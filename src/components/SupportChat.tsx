import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X, AlertTriangle } from "lucide-react";
import { useProfanityFilter } from "@/hooks/useProfanityFilter";
import type { ChatMessage } from "@/types/chat";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Здравствуйте! Я помощник службы доставки. Как дела? Чем могу помочь?",
      timestamp: new Date(),
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUserId = "user_1"; // В реальном приложении это будет получаться из контекста

  const { isUserBlocked, blockUser, filterMessage, reportProfanity } =
    useProfanityFilter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Проверяем, заблокирован ли пользователь
    if (isUserBlocked(currentUserId)) {
      const blockedMessage: ChatMessage = {
        id: Date.now().toString(),
        text: "Вы временно заблокированы за нарушение правил общения. Попробуйте позже.",
        timestamp: new Date(),
        isUser: false,
      };
      setMessages((prev) => [...prev, blockedMessage]);
      setInputText("");
      return;
    }

    // Фильтруем сообщение
    const filterResult = filterMessage(inputText);

    if (!filterResult.isClean) {
      // Блокируем пользователя
      blockUser(currentUserId);
      reportProfanity(currentUserId, inputText, filterResult.detectedWords);

      const warningMessage: ChatMessage = {
        id: Date.now().toString(),
        text: "Ваше сообщение содержит недопустимые выражения. Вы заблокированы на 15 минут. Администратор уведомлен.",
        timestamp: new Date(),
        isUser: false,
      };
      setMessages((prev) => [...prev, warningMessage]);
      setInputText("");
      return;
    }

    // Добавляем сообщение пользователя
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      timestamp: new Date(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Симуляция ответа бота
    setTimeout(
      () => {
        const botResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputText),
          timestamp: new Date(),
          isUser: false,
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    );
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("время") ||
      input.includes("часы") ||
      input.includes("работа")
    ) {
      return "Мы работаем с 12:00 до 19:30, с понедельника по пятницу.";
    }

    if (
      input.includes("доставка") ||
      input.includes("стоимость") ||
      input.includes("цена")
    ) {
      return "Стоимость доставки зависит от района и веса заказа. Уточнить можно по телефону +7 961 057 46 93.";
    }

    if (input.includes("заказ") || input.includes("как заказать")) {
      return "Для заказа звоните по номеру +7 961 057 46 93 или пишите в WhatsApp. Мы быстро обработаем ваш заказ!";
    }

    if (
      input.includes("что нельзя") ||
      input.includes("запрещен") ||
      input.includes("ограничения")
    ) {
      return "Мы не доставляем: никотин, табак, товары для взрослых, алкоголь. Все остальное - пожалуйста!";
    }

    const responses = [
      "Спасибо за ваше обращение! Наш менеджер свяжется с вами в ближайшее время.",
      "Я передам ваш вопрос специалисту. Обычно отвечаем в течение 15 минут.",
      "Понял вас! Если вопрос срочный, лучше позвонить по номеру +7 961 057 46 93.",
      "Записал ваш вопрос. Наша команда поможет вам решить любую проблему!",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-2xl z-50 transform hover:scale-110 transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-[28rem] shadow-2xl z-50 flex flex-col border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg py-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">🛠️ Техподдержка</CardTitle>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-purple-800 h-8 w-8 transform hover:rotate-90 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-purple-100 text-sm">
          ⚡ Обычно отвечаем в течение 15 минут
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.isUser
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-800"
                } ${message.isFiltered ? "border-2 border-red-300" : ""}`}
              >
                {message.isFiltered && (
                  <div className="flex items-center gap-1 mb-1 text-red-600">
                    <AlertTriangle className="w-3 h-3" />
                    <span className="text-xs">Отфильтровано</span>
                  </div>
                )}
                <p>{message.text}</p>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишите сообщение..."
              className="flex-1"
              disabled={isUserBlocked(currentUserId)}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              disabled={!inputText.trim() || isUserBlocked(currentUserId)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          {isUserBlocked(currentUserId) && (
            <p className="text-xs text-red-600 mt-1">
              Вы временно заблокированы за нарушение правил
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportChat;

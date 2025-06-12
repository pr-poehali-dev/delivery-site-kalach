import { useState, useCallback } from "react";
import type { ProfanityFilterResponse } from "@/types/chat";

const PROFANITY_WORDS = [
  "блядь",
  "сука",
  "пидор",
  "хуй",
  "пизда",
  "ебать",
  "ебаный",
  "гандон",
  "шлюха",
  "козел",
  "дебил",
  "идиот",
  "тупой",
  "дурак",
  "мудак",
  "придурок",
  "говно",
  "урод",
  "уебок",
  "долбоеб",
  "петух",
  "лох",
  "черт",
  "херня",
];

const BLOCK_DURATION = 15 * 60 * 1000; // 15 минут в миллисекундах

export const useProfanityFilter = () => {
  const [blockedUsers, setBlockedUsers] = useState<Record<string, Date>>(() => {
    const stored = localStorage.getItem("blockedUsers");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Преобразуем строки обратно в Date объекты
      Object.keys(parsed).forEach((key) => {
        parsed[key] = new Date(parsed[key]);
      });
      return parsed;
    }
    return {};
  });

  const isUserBlocked = useCallback(
    (userId: string): boolean => {
      const blockUntil = blockedUsers[userId];
      if (!blockUntil) return false;

      if (new Date() > blockUntil) {
        // Разблокируем пользователя
        const updated = { ...blockedUsers };
        delete updated[userId];
        setBlockedUsers(updated);
        localStorage.setItem("blockedUsers", JSON.stringify(updated));
        return false;
      }

      return true;
    },
    [blockedUsers],
  );

  const blockUser = useCallback(
    (userId: string) => {
      const blockUntil = new Date(Date.now() + BLOCK_DURATION);
      const updated = { ...blockedUsers, [userId]: blockUntil };
      setBlockedUsers(updated);
      localStorage.setItem("blockedUsers", JSON.stringify(updated));
    },
    [blockedUsers],
  );

  const filterMessage = useCallback((text: string): ProfanityFilterResponse => {
    const lowercaseText = text.toLowerCase();
    const detectedWords: string[] = [];
    let filteredText = text;

    PROFANITY_WORDS.forEach((word) => {
      const regex = new RegExp(word, "gi");
      if (regex.test(lowercaseText)) {
        detectedWords.push(word);
        filteredText = filteredText.replace(regex, "*".repeat(word.length));
      }
    });

    return {
      isClean: detectedWords.length === 0,
      filteredText,
      detectedWords,
    };
  }, []);

  const sendProfanityEmail = async (
    userId: string,
    message: string,
    detectedWords: string[],
  ) => {
    try {
      // Формируем данные для отправки
      const emailData = {
        to: "sergejustinov52@gmail.com",
        subject: "🚨 Обнаружена ненормативная лексика в чате поддержки",
        body: `
          ВНИМАНИЕ: Обнаружена ненормативная лексика!
          
          Пользователь: ${userId}
          Время: ${new Date().toLocaleString("ru-RU")}
          Сообщение: "${message}"
          Обнаруженные слова: ${detectedWords.join(", ")}
          
          Пользователь автоматически заблокирован на 15 минут.
        `,
      };

      // Используем mailto для отправки (браузерный клиент)
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;

      // Автоматически открываем почтовый клиент
      window.open(mailtoLink, "_blank");

      console.log("Уведомление о матерных словах отправлено на email");
    } catch (error) {
      console.error("Ошибка отправки email:", error);
    }
  };

  const reportProfanity = useCallback(
    async (userId: string, message: string, detectedWords: string[]) => {
      // Отправляем на email
      await sendProfanityEmail(userId, message, detectedWords);

      // Сохраняем локально для демонстрации
      const reports = JSON.parse(
        localStorage.getItem("profanityReports") || "[]",
      );
      reports.push({
        userId,
        message,
        detectedWords,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("profanityReports", JSON.stringify(reports));

      console.log(
        "📧 Матерные слова отправлены на sergejustinov52@gmail.com:",
        {
          userId,
          message,
          detectedWords,
          timestamp: new Date().toISOString(),
        },
      );
    },
    [],
  );

  return {
    isUserBlocked,
    blockUser,
    filterMessage,
    reportProfanity,
    blockedUsers,
  };
};

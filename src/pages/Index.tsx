import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  AlertTriangle,
} from "lucide-react";
import ReviewsSection from "@/components/ReviewsSection";
import SupportChat from "@/components/SupportChat";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/79610574693", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+79610574693";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🚀 Быстрая доставка по городу
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight animate-scale-in">
              Доставка в<br />
              <span className="text-6xl md:text-8xl">Калач-на-Дону</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Быстрая и надежная доставка товаров по городу. <br />
              <span className="font-semibold text-purple-700">
                Работаем для вашего удобства с 12:00 до 19:30
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
              <Button
                onClick={handlePhoneClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                +7 961 057 46 93
              </Button>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="border-3 border-green-500 text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-sm"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Working Hours */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Режим работы
                </h3>
                <p className="text-gray-600 text-lg">
                  <strong className="text-2xl text-blue-600">
                    12:00 - 19:30
                  </strong>
                  <br />
                  <span className="text-gray-500">Понедельник - Пятница</span>
                </p>
              </CardContent>
            </Card>

            {/* Delivery Area */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Зона доставки
                </h3>
                <p className="text-gray-600 text-lg">
                  <strong className="text-2xl text-purple-600">
                    По всему городу
                  </strong>
                  <br />
                  <span className="text-gray-500">Калач-на-Дону</span>
                </p>
              </CardContent>
            </Card>

            {/* Prohibited Items */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Не доставляем
                </h3>
                <div className="space-y-2">
                  {["Никотин", "Табак", "Товары 18+", "Алкоголь"].map(
                    (item, index) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="text-red-600 border-red-300 bg-red-50 hover:bg-red-100 transition-colors duration-200 m-1 transform hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Как сделать заказ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Три простых шага до получения вашего заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Позвоните нам",
                desc: "Свяжитесь с нами по телефону или WhatsApp",
              },
              {
                step: 2,
                title: "Оформите заказ",
                desc: "Расскажите, что нужно доставить и куда",
              },
              {
                step: 3,
                title: "Получите заказ",
                desc: "Курьер привезет ваш заказ в указанное время",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-slide-in-right"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-xl transform hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Support Chat */}
      <SupportChat />
    </div>
  );
};

export default Index;

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">
              🚀 Быстрая доставка по городу
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Доставка в Калач-на-Дону
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Быстрая и надежная доставка товаров по городу. <br />
              Работаем для вашего удобства с 12:00 до 19:30
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handlePhoneClick}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                +7 961 057 46 93
              </Button>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Working Hours */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="text-gray-600">
                  <strong>12:00 - 19:30</strong>
                  <br />
                  Понедельник - Пятница
                </p>
              </CardContent>
            </Card>

            {/* Delivery Area */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Зона доставки</h3>
                <p className="text-gray-600">
                  По всему городу
                  <br />
                  Калач-на-Дону
                </p>
              </CardContent>
            </Card>

            {/* Prohibited Items */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Не доставляем</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-200"
                  >
                    Никотин
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-200"
                  >
                    Табак
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-200"
                  >
                    Товары 18+
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-200"
                  >
                    Алкоголь
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Как сделать заказ?
            </h2>
            <p className="text-gray-600">
              Три простых шага до получения вашего заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Позвоните нам</h3>
              <p className="text-gray-600">
                Свяжитесь с нами по телефону или WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Оформите заказ</h3>
              <p className="text-gray-600">
                Расскажите, что нужно доставить и куда
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите заказ</h3>
              <p className="text-gray-600">
                Курьер привезет ваш заказ в указанное время
              </p>
            </div>
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

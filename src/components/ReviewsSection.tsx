import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import UserProfileModal from "./UserProfileModal";
import type { Review, User } from "@/types/chat";

const mockReviews: Review[] = [
  {
    id: "1",
    userId: "1",
    user: {
      id: "1",
      name: "Анна",
      surname: "Петрова",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=100&h=100&fit=crop&crop=face",
      isBlocked: false,
      ordersCount: 23,
      memberSince: "2023",
      rating: 5,
    },
    rating: 5,
    text: "Отличная служба доставки! Всегда быстро и качественно. Курьеры вежливые, заказы приходят в срок.",
    date: "15.12.2024",
  },
  {
    id: "2",
    userId: "2",
    user: {
      id: "2",
      name: "Михаил",
      surname: "Соколов",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isBlocked: false,
      ordersCount: 15,
      memberSince: "2024",
      rating: 5,
    },
    rating: 5,
    text: "Пользуюсь уже полгода. Никаких нареканий! Цены адекватные, доставка быстрая.",
    date: "12.12.2024",
  },
  {
    id: "3",
    userId: "3",
    user: {
      id: "3",
      name: "Елена",
      surname: "Васильева",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      isBlocked: false,
      ordersCount: 8,
      memberSince: "2024",
      rating: 4,
    },
    rating: 4,
    text: "Хорошая доставка, но иногда бывают небольшие задержки. В целом рекомендую!",
    date: "10.12.2024",
  },
  {
    id: "4",
    userId: "4",
    user: {
      id: "4",
      name: "Дмитрий",
      surname: "Козлов",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isBlocked: false,
      ordersCount: 31,
      memberSince: "2022",
      rating: 5,
    },
    rating: 5,
    text: "Лучшая доставка в городе! Всегда свежие продукты, быстрая доставка. Спасибо!",
    date: "08.12.2024",
  },
];

const ReviewsSection = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const getUserReviews = (userId: string) => {
    return mockReviews.filter((review) => review.userId === userId);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-600">
            Что говорят о нас жители Калач-на-Дону
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mockReviews.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => handleUserClick(review.user)}
                    className="flex-shrink-0 hover:scale-105 transition-transform duration-200"
                  >
                    <Avatar className="w-12 h-12 ring-2 ring-purple-200 hover:ring-purple-400 transition-colors">
                      <AvatarImage
                        src={review.user.photo}
                        alt={`${review.user.name} ${review.user.surname}`}
                      />
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {review.user.name[0]}
                        {review.user.surname[0]}
                      </AvatarFallback>
                    </Avatar>
                  </button>

                  <div className="flex-1">
                    <button
                      onClick={() => handleUserClick(review.user)}
                      className="text-left hover:text-purple-600 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-800">
                        {review.user.name} {review.user.surname}
                      </h4>
                    </button>

                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>

                    <p className="text-gray-700 mt-3 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <UserProfileModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userReviews={getUserReviews(selectedUser?.id || "")}
        />
      </div>
    </section>
  );
};

export default ReviewsSection;

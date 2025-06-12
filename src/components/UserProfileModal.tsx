import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, ShoppingBag } from "lucide-react";
import type { User, Review } from "@/types/chat";

interface UserProfileModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  userReviews: Review[];
}

const UserProfileModal = ({
  user,
  isOpen,
  onClose,
  userReviews,
}: UserProfileModalProps) => {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Профиль пользователя
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Info */}
          <div className="text-center space-y-4">
            <Avatar className="w-20 h-20 mx-auto">
              <AvatarImage
                src={user.photo}
                alt={`${user.name} ${user.surname}`}
              />
              <AvatarFallback className="text-lg">
                {user.name[0]}
                {user.surname[0]}
              </AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-xl font-semibold">
                {user.name} {user.surname}
              </h3>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < user.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  ({user.rating}/5)
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <ShoppingBag className="w-5 h-5 mx-auto mb-1 text-purple-600" />
              <div className="text-lg font-semibold">{user.ordersCount}</div>
              <div className="text-xs text-gray-600">заказов</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 mx-auto mb-1 text-blue-600" />
              <div className="text-lg font-semibold">{user.memberSince}</div>
              <div className="text-xs text-gray-600">с нами</div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="font-semibold mb-3">Отзывы пользователя</h4>
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {userReviews.map((review) => (
                <div key={review.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-700">{review.text}</p>
                </div>
              ))}
              {userReviews.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  Пока нет отзывов от этого пользователя
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileModal;

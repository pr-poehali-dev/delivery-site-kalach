export interface ChatMessage {
  id: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
  isFiltered?: boolean;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  photo: string;
  isBlocked: boolean;
  blockUntil?: Date;
  ordersCount: number;
  memberSince: string;
  rating: number;
}

export interface Review {
  id: string;
  userId: string;
  user: User;
  rating: number;
  text: string;
  date: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  messages: ChatMessage[];
  status: "open" | "closed";
  createdAt: Date;
}

export interface ProfanityFilterResponse {
  isClean: boolean;
  filteredText: string;
  detectedWords: string[];
}

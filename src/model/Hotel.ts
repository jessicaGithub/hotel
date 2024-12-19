export interface Hotel {
  id: number;
  image_url: string;
  hotel_name: string;
  hotel_rating: string;
  room_type: (string | null)[];
  price_per_night: number;
}

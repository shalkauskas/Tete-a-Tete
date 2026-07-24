export interface ServiceItem {
  id: number;
  service: string;
  price: string;
  info?: string;
  isVideo?: boolean;
}

export interface ServiceCategory {
  title: string;
  image: string;
}

export type ServiceGroup = [ServiceCategory, ...ServiceItem[]];

export interface GoogleReview {
  text: string;
  profile_photo_url: string;
  author_url: string;
  author_name: string;
  relative_time_description: string;
  rating: number;
}

export interface GooglePlaceDetails {
  rating: number;
  total: number;
  reviews: GoogleReview[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  photo: string;
  link?: string;
}

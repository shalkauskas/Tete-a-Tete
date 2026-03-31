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

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  photo: string;
  link?: string;
}

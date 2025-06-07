
export enum PropertyType {
  HOUSE = 'House',
  APARTMENT = 'Apartment',
  CONDO = 'Condo',
  TOWNHOUSE = 'Townhouse',
  LAND = 'Land'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  beds: number;
  baths: number;
  area: number; // in sqft
  type: PropertyType;
  imageUrl: string;
  description: string;
  isFeatured?: boolean;
  latitude?: number;
  longitude?: number;
  yearBuilt?: number;
  lotSize?: number; // in sqft
  agent?: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface PropertyFilterCriteria {
  searchTerm?: string;
  type?: PropertyType | '';
  minPrice?: number | '';
  maxPrice?: number | '';
  beds?: number | '';
  baths?: number | '';
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string; // ISO date string
  imageUrl?: string;
  slug: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NavLink {
  path: string;
  label: string;
}

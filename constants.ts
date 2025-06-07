import { Property, BlogArticle, NavLink, PropertyType } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/properties', label: 'Properties' },
  { path: '/about', label: 'About Us' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Spacious 3 BHK in Vashi',
    price: 9500000, // ₹95 Lakhs
    address: 'Sector 17, Vashi',
    city: 'Navi Mumbai',
    beds: 3,
    baths: 3,
    area: 1300,
    type: PropertyType.APARTMENT,
    imageUrl: 'https://picsum.photos/seed/mumbai1/600/400',
    description: 'A spacious 3 BHK apartment in the heart of Vashi, close to shopping malls and schools.',
    isFeatured: true,
    yearBuilt: 2015,
    lotSize: 0,
    agent: { name: 'Rahul Desai', phone: '022-23456789', email: 'rahul@realestate.in' }
  },
  {
    id: '2',
    title: '2 BHK Flat in Nerul',
    price: 7200000, // ₹72 Lakhs
    address: 'Sector 21, Nerul',
    city: 'Navi Mumbai',
    beds: 2,
    baths: 2,
    area: 900,
    type: PropertyType.APARTMENT,
    imageUrl: 'https://picsum.photos/seed/mumbai2/600/400',
    description: 'Well-maintained 2 BHK flat with Sadguru amenities near Nerul railway station.',
    isFeatured: true,
  },
  {
    id: '3',
    title: '1 BHK Cozy Apartment in Kharghar',
    price: 4600000, // ₹46 Lakhs
    address: 'Sector 15, Kharghar',
    city: 'Navi Mumbai',
    beds: 1,
    baths: 1,
    area: 650,
    type: PropertyType.APARTMENT,
    imageUrl: 'https://picsum.photos/seed/mumbai3/600/400',
    description: 'Perfect starter home with peaceful surroundings and easy access to parks.',
  },
  {
    id: '4',
    title: 'Luxury Villa in Panvel',
    price: 25000000, // ₹2.5 Crores
    address: 'Plot No 56, Panvel',
    city: 'Navi Mumbai',
    beds: 5,
    baths: 5,
    area: 4000,
    type: PropertyType.HOUSE,
    imageUrl: 'https://picsum.photos/seed/mumbai4/600/400',
    description: 'Exclusive villa with private garden and parking, located in a gated community in Panvel.',
    isFeatured: true,
  },
  {
    id: '5',
    title: '2 BHK Townhouse near Seawoods',
    price: 8500000, // ₹85 Lakhs
    address: 'Seawoods Sector 40',
    city: 'Navi Mumbai',
    beds: 2,
    baths: 2,
    area: 1100,
    type: PropertyType.TOWNHOUSE,
    imageUrl: 'https://picsum.photos/seed/mumbai5/600/400',
    description: 'Sadguru townhouse close to Seawoods railway station and shopping centers.',
  },
  {
    id: '6',
    title: 'Land for Sale in Khandeshwar',
    price: 18000000, // ₹1.8 Crores
    address: 'Near Khandeshwar Station',
    city: 'Navi Mumbai',
    beds: 0,
    baths: 0,
    area: 10000, // Approx 1 acre
    type: PropertyType.LAND,
    imageUrl: 'https://picsum.photos/seed/mumbai6/600/400',
    description: 'Prime land plot ideal for residential development in Khandeshwar.',
  },
  {
    id: '7',
    title: '3 BHK Apartment in Airoli',
    price: 9000000, // ₹90 Lakhs
    address: 'Sector 20, Airoli',
    city: 'Navi Mumbai',
    beds: 3,
    baths: 3,
    area: 1250,
    type: PropertyType.APARTMENT,
    imageUrl: 'https://picsum.photos/seed/mumbai7/600/400',
    description: 'Well-lit 3 BHK apartment with club facilities and excellent connectivity.',
    isFeatured: false,
  },
  {
    id: '8',
    title: '1 BHK Affordable Flat in Ulwe',
    price: 4200000, // ₹42 Lakhs
    address: 'Sector 10, Ulwe',
    city: 'Navi Mumbai',
    beds: 1,
    baths: 1,
    area: 600,
    type: PropertyType.APARTMENT,
    imageUrl: 'https://picsum.photos/seed/mumbai8/600/400',
    description: 'Affordable 1 BHK flat with basic amenities, close to new metro lines.',
  },
  {
    id: '9',
    title: 'Penthouse Condo in Vashi',
    price: 15000000, // ₹1.5 Crores
    address: 'Sector 19, Vashi',
    city: 'Navi Mumbai',
    beds: 3,
    baths: 3,
    area: 2000,
    type: PropertyType.CONDO,
    imageUrl: 'https://picsum.photos/seed/mumbai9/600/400',
    description: 'Luxurious penthouse with panoramic views of the city and sea.',
    isFeatured: true,
  },
  {
    id: '10',
    title: 'Countryside Retreat in Panvel',
    price: 13000000, // ₹1.3 Crores
    address: 'Old Mumbai-Pune Highway, Panvel',
    city: 'Navi Mumbai',
    beds: 4,
    baths: 3,
    area: 3000,
    type: PropertyType.HOUSE,
    imageUrl: 'https://picsum.photos/seed/mumbai10/600/400',
    description: 'Peaceful countryside home with large garden and Sadguru interiors.',
  }
];

export const MOCK_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    slug: 'buying-property-in-navi-mumbai-guide',
    title: 'Complete Guide to Buying Property in Navi Mumbai',
    summary: 'Explore the booming real estate market of Navi Mumbai and find the best areas to invest in.',
    content: '<p>Navi Mumbai is rapidly developing with excellent infrastructure...</p>',
    author: 'Sanjay Mehta, Real Estate Consultant',
    date: '2024-06-01T10:00:00Z',
    imageUrl: 'https://picsum.photos/seed/blogm1/600/300',
  },
  {
    id: '2',
    slug: 'upcoming-infrastructure-projects-mumbai',
    title: 'Upcoming Infrastructure Projects Transforming Mumbai',
    summary: 'Mumbai is seeing massive growth with new metro lines, highways, and commercial hubs.',
    content: '<p>The Mumbai Metropolitan Region is expanding at a rapid pace...</p>',
    author: 'Anita Shah, Urban Planner',
    date: '2024-06-15T14:30:00Z',
    imageUrl: 'https://picsum.photos/seed/blogm2/600/300',
  },
  {
    id: '3',
    slug: 'best-neighborhoods-to-live-in-navi-mumbai',
    title: 'Best Neighborhoods to Live in Navi Mumbai',
    summary: 'Discover Navi Mumbai’s top residential localities with the best amenities and connectivity.',
    content: '<p>Navi Mumbai offers a mix of urban convenience and greenery...</p>',
    author: 'Rohit Kulkarni, Property Analyst',
    date: '2024-06-20T09:15:00Z',
    imageUrl: 'https://picsum.photos/seed/blogm3/600/300',
  }
];

export const PROPERTY_TYPES_OPTIONS = [
  { value: '', label: 'Any Type' },
  { value: PropertyType.HOUSE, label: 'House' },
  { value: PropertyType.APARTMENT, label: 'Apartment' },
  { value: PropertyType.CONDO, label: 'Condo' },
  { value: PropertyType.TOWNHOUSE, label: 'Townhouse' },
  { value: PropertyType.LAND, label: 'Land' },
];

export const BEDS_BATHS_OPTIONS = [
  { value: '', label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
  { value: 5, label: '5+' },
];

export const PRICE_RANGE_OPTIONS = [
    { value: '', label: 'Any Price' },
    { value: '0-5000000', label: '₹0 - ₹50 Lakhs' },
    { value: '5000000-10000000', label: '₹50 Lakhs - ₹1 Crore' },
    { value: '10000000-20000000', label: '₹1 Crore - ₹2 Crores' },
    { value: '20000000-50000000', label: '₹2 Crores - ₹5 Crores' },
    { value: '50000000-100000000', label: '₹5 Crores+' },
];

export const ITEMS_PER_PAGE = 6;


import { MOCK_PROPERTIES, MOCK_BLOG_ARTICLES, ITEMS_PER_PAGE } from '../constants';
import { Property, BlogArticle, PropertyFilterCriteria, ContactMessage } from '../types';

// Simulate API delay
const fakeApiDelay = <T,>(data: T, delay: number = 500): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

export const getProperties = async (
  filters: PropertyFilterCriteria,
  page: number = 1,
): Promise<{ properties: Property[]; totalPages: number; totalResults: number }> => {
  let filteredProperties = MOCK_PROPERTIES;

  if (filters.searchTerm) {
    const searchTermLower = filters.searchTerm.toLowerCase();
    filteredProperties = filteredProperties.filter(
      p =>
        p.title.toLowerCase().includes(searchTermLower) ||
        p.address.toLowerCase().includes(searchTermLower) ||
        p.city.toLowerCase().includes(searchTermLower)
    );
  }
  if (filters.type) {
    filteredProperties = filteredProperties.filter(p => p.type === filters.type);
  }
  if (filters.minPrice !== undefined && filters.minPrice !== '') {
    filteredProperties = filteredProperties.filter(p => p.price >= (filters.minPrice as number));
  }
  if (filters.maxPrice !== undefined && filters.maxPrice !== '') {
    filteredProperties = filteredProperties.filter(p => p.price <= (filters.maxPrice as number));
  }
  if (filters.beds !== undefined && filters.beds !== '') {
    filteredProperties = filteredProperties.filter(p => p.beds >= (filters.beds as number));
  }
  if (filters.baths !== undefined && filters.baths !== '') {
    filteredProperties = filteredProperties.filter(p => p.baths >= (filters.baths as number));
  }
  
  const totalResults = filteredProperties.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return fakeApiDelay({ properties: paginatedProperties, totalPages, totalResults });
};

export const getFeaturedProperties = async (limit: number = 3): Promise<Property[]> => {
  const featured = MOCK_PROPERTIES.filter(p => p.isFeatured).slice(0, limit);
  return fakeApiDelay(featured);
};

export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  return fakeApiDelay(MOCK_BLOG_ARTICLES);
};

export const getBlogArticleBySlug = async (slug: string): Promise<BlogArticle | undefined> => {
  const article = MOCK_BLOG_ARTICLES.find(a => a.slug === slug);
  return fakeApiDelay(article);
};

export const submitContactForm = async (data: ContactMessage): Promise<{success: boolean; message: string}> => {
  console.log('Simulating contact form submission:', data);
  // Simulate some validation or processing
  if (!data.email || !data.message) {
    return fakeApiDelay({ success: false, message: 'Email and message are required.' }, 200);
  }
  // Simulate success
  return fakeApiDelay({ success: true, message: 'Your message has been sent successfully! We will get back to you soon.' });
};

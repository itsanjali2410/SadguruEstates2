
import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import Spinner from '../components/Spinner';
import { BlogArticle } from '../../types';
import { getBlogArticles } from '../../services/propertyService';

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedArticles = await getBlogArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError('Failed to load blog articles.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="bg-neutral-800 text-white py-12 mb-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Real Estate Insights</h1>
            <p className="text-center text-neutral-300 mt-2">Stay updated with the latest news, tips, and trends in the property market.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-600">No blog articles available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

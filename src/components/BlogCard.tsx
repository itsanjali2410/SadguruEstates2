import React from 'react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../../types';

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
      {article.imageUrl && (
        <Link to={`/blog/${article.slug}`} className="block">
          <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
        </Link>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 mb-2 hover:text-blue-600 transition-colors">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="text-sm text-neutral-500 mb-2">
            By {article.author} on {formattedDate}
          </p>
          <p className="text-neutral-600 text-sm mb-4 flex-grow">{article.summary}</p>
        </div>
        <div className="mt-auto">
          <Link
            to={`/blog/${article.slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
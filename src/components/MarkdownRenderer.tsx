import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    const renderMarkdown = async () => {
      try {
        // Configure marked for better rendering
        marked.setOptions({
          breaks: true,
          gfm: true,
        });

        const rawHtml = await marked(content);
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        setHtml(cleanHtml);
      } catch (error) {
        console.error('Error rendering markdown:', error);
        setHtml('<p>Error rendering content</p>');
      }
    };

    renderMarkdown();
  }, [content]);

  return (
    <div 
      className={`prose prose-blue max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        // Custom prose styling for our color scheme
        '--tw-prose-body': '#374151',
        '--tw-prose-headings': '#111827',
        '--tw-prose-lead': '#4b5563',
        '--tw-prose-links': '#1E5FFF',
        '--tw-prose-bold': '#111827',
        '--tw-prose-counters': '#6b7280',
        '--tw-prose-bullets': '#d1d5db',
        '--tw-prose-hr': '#e5e7eb',
        '--tw-prose-quotes': '#111827',
        '--tw-prose-quote-borders': '#e5e7eb',
        '--tw-prose-captions': '#6b7280',
        '--tw-prose-code': '#111827',
        '--tw-prose-pre-code': '#e5e7eb',
        '--tw-prose-pre-bg': '#1f2937',
        '--tw-prose-th-borders': '#d1d5db',
        '--tw-prose-td-borders': '#e5e7eb',
      } as React.CSSProperties}
    />
  );
};
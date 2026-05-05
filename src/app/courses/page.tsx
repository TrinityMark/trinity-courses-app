'use client';

import Link from 'next/link';
import { COURSES, CourseCategory } from '@/data/courses';
import CourseSearch from '@/components/CourseSearch';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

function totalModules(category: CourseCategory): number {
  return category.items.reduce((sum, item) => sum + (item.modules ? item.modules.length : 1), 0);
}

export default function CoursesPage() {
  return (
    <div style={{ padding: 40, maxWidth: 1000, margin: '0 auto' }}>
      {/* Page header */}
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#1f2937',
            fontFamily: FONT,
            marginBottom: 6,
          }}
        >
          Trinity Coaching Courses
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#6b7280', fontFamily: FONT }}>
          Select a course category to explore the modules and their value to clients.
        </p>
      </div>

      {/* Quick find */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#6b7280', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
          Quick Find
        </p>
        <CourseSearch />
      </div>

      {/* Tiles grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {COURSES.map((category) => (
          <Link
            key={category.id}
            href={category.route}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s, transform 0.2s',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(21,57,127,0.12)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Tile header */}
              <div
                style={{
                  background: '#15397F',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                    fontFamily: FONT,
                  }}
                >
                  {category.title}
                </span>
              </div>

              {/* Tile body */}
              <div style={{ padding: '16px 20px' }}>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    fontFamily: FONT,
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  {category.description}
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#eff6ff',
                    color: '#15397F',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontFamily: FONT,
                  }}
                >
                  {totalModules(category)} {totalModules(category) === 1 ? 'module' : 'modules'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import CourseSection from '@/components/CourseSection';
import { COURSES } from '@/data/courses';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export default function MarketingPage() {
  const category = COURSES.find((c) => c.id === 'marketing')!;

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1f2937', fontFamily: FONT }}>
            {category.title}
          </h1>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#6b7280', fontFamily: FONT }}>{category.description}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {category.items.map((item) => (
          <CourseSection
            key={item.id}
            title={item.title}
            overview={item.overview}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

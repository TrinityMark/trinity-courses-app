'use client';

import { useState } from 'react';
import type { ContentBlock } from '@/data/courses';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

interface CourseSectionProps {
  title: string;
  overview: ContentBlock;
  value: ContentBlock;
}

function Block({ label, content }: { label: string; content: ContentBlock }) {
  return (
    <div style={{ marginTop: 16 }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#15397F', marginBottom: 6, fontFamily: FONT }}>
        {label}
      </p>
      <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.6, fontFamily: FONT }}>
        {content.intro}
      </p>
      {content.bullets.length > 0 && (
        <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {content.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.875rem', color: '#374151', fontFamily: FONT }}>
              <span style={{ color: '#15397F', flexShrink: 0, marginTop: 2 }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CourseSection({ title, overview, value }: CourseSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', borderLeft: open ? '4px solid #15397F' : '4px solid transparent', transition: 'border-left-color 0.2s' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: open ? '#f0f4ff' : 'white', border: 'none', cursor: 'pointer', transition: 'background 0.2s', textAlign: 'left', gap: 12 }}
      >
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1f2937', fontFamily: FONT }}>
          {title}
        </span>
        <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', fontSize: '0.75rem', color: '#6b7280', flexShrink: 0 }}>
          ▼
        </span>
      </button>

      {open && (
        <div style={{ padding: '0 18px 18px', borderTop: '1px solid #e5e7eb' }}>
          <Block label="Course Overview" content={overview} />
          <Block label="Client Value" content={value} />
        </div>
      )}
    </div>
  );
}

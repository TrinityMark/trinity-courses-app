'use client';

import { useState } from 'react';
import CourseSection from './CourseSection';
import type { ModuleItem } from '@/data/courses';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

interface LeadershipSectionProps {
  title: string;
  modules: ModuleItem[];
}

export default function LeadershipSection({ title, modules }: LeadershipSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', borderLeft: open ? '4px solid #15397F' : '4px solid transparent', transition: 'border-left-color 0.2s' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: open ? '#f0f4ff' : 'white', border: 'none', cursor: 'pointer', transition: 'background 0.2s', textAlign: 'left', gap: 12 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1f2937', fontFamily: FONT }}>
            {title}
          </span>
          <span style={{ background: '#eff6ff', color: '#15397F', fontSize: '0.72rem', fontWeight: 600, padding: '2px 8px', borderRadius: 20, fontFamily: FONT, whiteSpace: 'nowrap' }}>
            {modules.length} {modules.length === 1 ? 'module' : 'modules'}
          </span>
        </div>
        <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', fontSize: '0.75rem', color: '#6b7280', flexShrink: 0 }}>
          ▼
        </span>
      </button>

      {open && (
        <div style={{ padding: '12px 18px 18px', borderTop: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {modules.map((mod, index) => (
            <CourseSection
              key={mod.id}
              title={`Module ${index + 1}: ${mod.title}`}
              overview={mod.overview}
              value={mod.value}
            />
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { COURSES } from '@/data/courses';

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

interface SearchEntry {
  label: string;
  context: string;
  route: string;
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const category of COURSES) {
    for (const item of category.items) {
      if (item.modules && item.modules.length > 0) {
        // Leadership: index each individual module
        for (const mod of item.modules) {
          entries.push({
            label: mod.title,
            context: `${category.title} › ${item.title}`,
            route: category.route,
          });
        }
      } else {
        entries.push({
          label: item.title,
          context: category.title,
          route: category.route,
        });
      }
    }
  }
  return entries;
}

const ALL_ENTRIES = buildIndex();

export default function CourseSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? ALL_ENTRIES.filter((e) =>
        e.label.toLowerCase().includes(query.toLowerCase()) ||
        e.context.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function select(entry: SearchEntry) {
    setQuery('');
    setOpen(false);
    router.push(entry.route);
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', maxWidth: 480 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'white',
          border: open && results.length > 0 ? '1px solid #15397F' : '1px solid #e5e7eb',
          borderRadius: open && results.length > 0 ? '8px 8px 0 0' : 8,
          padding: '10px 14px',
          transition: 'border-color 0.15s',
        }}
      >
        <span style={{ color: '#9ca3af', fontSize: '0.9rem', flexShrink: 0 }}>🔍</span>
        <input
          type="text"
          placeholder="Find a module quickly… e.g. Top Clients, SWOT, Feedback"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '0.875rem',
            color: '#1f2937',
            fontFamily: FONT,
            background: 'transparent',
          }}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setOpen(false); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1, padding: 0 }}
          >
            ✕
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            border: '1px solid #15397F',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            boxShadow: '0 4px 16px rgba(21,57,127,0.1)',
            zIndex: 50,
            overflow: 'hidden',
          }}
        >
          {results.map((entry, i) => (
            <button
              key={i}
              onClick={() => select(entry)}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px 14px',
                background: 'white',
                border: 'none',
                borderTop: i > 0 ? '1px solid #f3f4f6' : 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.1s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1f2937', fontFamily: FONT }}>
                {entry.label}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#6b7280', fontFamily: FONT, marginTop: 2 }}>
                {entry.context}
              </span>
            </button>
          ))}
        </div>
      )}

      {open && query.trim().length > 0 && results.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            border: '1px solid #e5e7eb',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            padding: '12px 14px',
            fontSize: '0.875rem',
            color: '#9ca3af',
            fontFamily: FONT,
            zIndex: 50,
          }}
        >
          No modules found for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}

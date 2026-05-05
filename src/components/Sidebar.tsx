'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const NAV_ITEMS = [
  { key: 'courses', label: 'Trinity Coaching Courses', icon: '🎛️', href: '/courses' },
  { key: 'foundation', label: 'Foundation', icon: '🎯', href: '/courses/foundation' },
  { key: 'alignment', label: 'Business Alignment', icon: '💼', href: '/courses/alignment' },
  { key: 'marketing', label: 'Marketing and Sales', icon: '📈', href: '/courses/marketing' },
  { key: 'leadership', label: 'Leadership', icon: '👥', href: '/courses/leadership' },
  { key: 'kickstart', label: 'KickStart', icon: '⚡', href: '/courses/kickstart' },
  { key: 'stop-the-chaos', label: 'Stop the Chaos', icon: '⏱️', href: '/courses/stop-the-chaos' },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/courses') return pathname === '/courses';
    return pathname.startsWith(href);
  };

  return (
    <div
      style={{
        width: 300,
        minWidth: 300,
        background: '#15397F',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          minHeight: 72,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/trinity-logo.png`}
          alt="Trinity Advisory"
          width={70}
          height={20}
          style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 8px', overflowY: 'auto' }}>
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <div key={item.key} style={{ marginBottom: 2 }}>
              <Link
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  color: 'white',
                  background: active ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'background 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: active ? 600 : 400 }}>
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

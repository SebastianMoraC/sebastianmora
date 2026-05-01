import { useEffect, useState } from 'react';
import { useThemeStore } from '../../stores/theme';

export default function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);
  const setTheme = useThemeStore((s) => s.setTheme);
  const [mounted, setMounted] = useState(false);

  // After hydration, re-sync the store with what the pre-paint script applied.
  useEffect(() => {
    const initial = document.documentElement.classList.contains('is-light') ? 'light' : 'dark';
    if (initial !== theme) setTheme(initial);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Avoid icon flicker before hydration syncs the store.
  const display = mounted ? theme : 'dark';

  return (
    <button
      type="button"
      className="pf-theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${display === 'dark' ? 'light' : 'dark'} theme`}
    >
      {display === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

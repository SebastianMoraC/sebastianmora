import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface Props {
  items: ReadonlyArray<NavItem>;
}

const HEADER_OFFSET = 96;
const ACTIVE_OFFSET = 140;

export default function ScrollSpyNav({ items }: Props) {
  const initial = items[0]?.id ?? '';
  const [active, setActive] = useState<string>(initial);

  useEffect(() => {
    if (items.length === 0) return;

    const elements = items
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const onScroll = () => {
      // If we're at (or within ~4px of) the bottom of the page, the last
      // section can never reach the threshold — pin it active.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        const last = items[items.length - 1]?.id;
        if (last) {
          setActive(last);
          return;
        }
      }

      const top = window.scrollY + ACTIVE_OFFSET;
      let cur = items[0]?.id ?? '';
      for (const el of elements) {
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        if (elTop <= top) cur = el.id;
      }
      setActive(cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET / 1.5;
    window.scrollTo({ top, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav className="pf-nav" aria-label="Section navigation">
      {items.map((n) => (
        <button
          key={n.id}
          type="button"
          className={active === n.id ? 'is-active' : ''}
          onClick={handleClick(n.id)}
          aria-current={active === n.id ? 'true' : undefined}
        >
          <span className="line" aria-hidden="true" />
          <span>{n.label}</span>
        </button>
      ))}
    </nav>
  );
}

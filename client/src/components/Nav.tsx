type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

// 다른 API 챗봇이 추가되면 이 배열에 항목만 늘리면 됨
const NAV_ITEMS: NavItem[] = [{ label: 'Groq', href: '/', active: true }];

export const Nav = () => (
  <nav className="nav" aria-label="챗봇 목록">
    <ul className="nav__list">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            className="nav__link"
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

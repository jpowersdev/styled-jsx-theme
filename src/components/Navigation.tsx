import React from 'react';
import Link from 'next/link';

interface NavigationLink {
  href: string;
  label: string;
  key?: string;
}

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map((link: NavigationLink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{``}</style>
  </nav>
);

export default Navigation;

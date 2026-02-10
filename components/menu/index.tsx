import Link from 'next/link';

interface ILinks {
  id: number;
  label: string;
  href: string;
}

const links: ILinks[] = [
  { id: 1, label: 'About the shelter', href: '/about' },
  { id: 2, label: 'Our pets', href: '/pets' },
  { id: 3, label: 'Help the shelter', href: '/help' },
  { id: 4, label: 'Contacts', href: '/contacts' },
];

const Menu = () => {
  return (
    <ul className='flex items-center justify-center gap-x-8.75'>
      {links.map(({ id, label, href }) => (
        <li className='relative' key={id}>
          <Link
            href={href}
            className='
            text-[15px] 
            leading-relaxed
            text-[#cdcdcd] 
            hover:text-[#fafafa]
            links-on-hover
            '
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

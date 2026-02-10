import Link from 'next/link';
import { MouseEventHandler } from 'react';

interface IMenuProps {
  click?: MouseEventHandler;
}

const Menu = ({ click }: IMenuProps) => {
  return (
    <ul className='hidden items-center justify-center gap-x-8.75 md:flex'>
      <li className='relative'>
        <Link href='/#section-about' className='links links-on-hover' onClick={click}>
          About the shelter
        </Link>
      </li>
      <li className='relative'>
        <Link href='/pets' className='links links-on-hover'>
          Our pets
        </Link>
      </li>
      <li className='relative'>
        <Link href='/help' className='links links-on-hover'>
          Help the shelter
        </Link>
      </li>
      <li className='relative'>
        <Link href='/contacts' className='links links-on-hover'>
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Menu;

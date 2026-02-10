'use client';

import Burger from '../burger';
import Container from '../container';
import Logo from '../logo';
import Menu from '../menu';

const Header = () => {
  // -----------------------------------------------------------------
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  // -----------------------------------------------------------------

  return (
    <header
      className='
        bg-gradient
        pt-7.5 pb-22.5'
    >
      <Container>
        <nav className='flex items-center justify-between'>
          <Logo />
          <Menu click={handleScroll} />
          <Burger />
        </nav>
      </Container>
    </header>
  );
};

export default Header;

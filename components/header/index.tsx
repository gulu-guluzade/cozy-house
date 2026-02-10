import Burger from '../burger';
import Container from '../container';
import Logo from '../logo';
import Menu from '../menu';

const Header = () => {
  return (
    <header
      className='
        bg-gradient
        pt-7.5 pb-22.5'
    >
      <Container>
        <nav className='flex items-center justify-between'>
          <Logo />
          <Menu />
          <Burger />
        </nav>
      </Container>
    </header>
  );
};

export default Header;

import Container from '../container';
import Logo from '../logo';
import Menu from '../menu';

const Header = () => {
  return (
    <header
      className='
      bg-[#5B483A]
        bg-[linear-gradient(to_right,rgba(91,72,58,1)_0%,rgba(38,36,37,1)_100%)]
        pt-7.5 pb-22.5'
    >
      <Container>
        <nav className='flex items-center justify-between'>
          <Logo />
          <Menu />
        </nav>
      </Container>
    </header>
  );
};

export default Header;

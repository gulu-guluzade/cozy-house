import { Menu } from 'lucide-react';

const Burger = () => {
  return (
    <button className='cursor-pointer md:hidden'>
      <Menu size={30} stroke='#F1CDB3' />
    </button>
  );
};

export default Burger;

import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex flex-col gap-y-2.5'>
      <span className='capitalize text-[32px] leading-tight tracking-wide text-[#F1CDB3]'>
        cozy house
      </span>
      <span className='text-[13px] tracking-wider text-white'>Shelter for pets in Boston</span>
    </Link>
  );
};

export default Logo;

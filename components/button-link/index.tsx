import Link from 'next/link';

interface IButtonLink {
  text: string;
  href: string;
  className?: string;
  parentClassName?: string;
}
const ButtonLink = ({ text, href, className, parentClassName }: IButtonLink) => {
  return (
    <div className={`${parentClassName}`}>
      <Link
        href={href}
        className={`
          bg-[#F1CDB3] 
          hover:bg-[#FDDCC4] 
          cursor-pointer 
          text-[17px] 
          leading-snug 
          tracking-wide
          rounded-4xl
          py-3.75
          px-11.25
          inline-block
          ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;

interface IButton {
  text: string;
  className?: string;
}
const Button = ({ text, className }: IButton) => {
  return (
    <div>
      <button
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
      </button>
    </div>
  );
};

export default Button;

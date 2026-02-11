interface IHeadingProps {
  heading: string;
  className?: string;
  parentClassName?: string;
}

const Heading = ({ heading, className, parentClassName }: IHeadingProps) => {
  return (
    <div className={parentClassName}>
      <h2
        className={`
          text-[#545454]
          leading-snug 
          tracking-wide 
          text-[25px] 
          text-center
          md:text-[35px] 
          md:text-start
          ${className}`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default Heading;

interface IHeading {
  heading: string;
}

const Heading = ({ heading }: IHeading) => {
  return (
    <div>
      <h2
        className='
        text-[#545454]
        leading-snug 
        tracking-wide 
        text-[25px] 
        text-center
        md:text-[35px] 
        md:text-start'
      >
        {heading}
      </h2>
    </div>
  );
};

export default Heading;

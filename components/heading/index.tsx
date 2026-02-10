interface IHeading {
  heading: string;
}

const Heading = ({ heading }: IHeading) => {
  return (
    <div>
      <h2 className='text-[35px] leading-snug tracking-wide text-[#545454]'>{heading}</h2>
    </div>
  );
};

export default Heading;

import ButtonLink from '../button-link';
import Container from '../container';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='bg-gradient '>
      <Container>
        <div className='flex flex-col justify-between items-center gap-y-26.25 gap-x-10.5 lg:flex-row'>
          <div className='lg:max-w-115 flex flex-col gap-y-10.5'>
            <h3
              className='
              text-white
                text-[30px] 
                text-center
                tracking-wide
                leading-snug 
                sm:text-[44px]
                sm:text-start
                sm:tracking-normal'
            >
              Not only people need a house
            </h3>
            <p
              className='
              text-[#cdcdcd]
              leading-relaxed
              text-center
              sm:text-start
              '
            >
              We offer to give a chance to a little and nice puppy with an extremely wide and open
              heart. He or she will love you more than anybody else in the world, you will see!
            </p>
            <ButtonLink
              text='Make a friend'
              href='#'
              parentClassName='
              flex 
              justify-center 
              items-center
              md:justify-start'
            />
          </div>
          <div>
            <Image src='/hero-puppy.png' alt='puppy' width={698} height={728} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

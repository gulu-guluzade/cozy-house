import Image from 'next/image';
import Container from '../container';
import Heading from '../heading';

const About = () => {
  return (
    <section className='py-10.5' id='section-about'>
      <Container>
        <div className='flex flex-col justify-center items-center gap-y-10.5 gap-x-30 lg:flex-row-reverse'>
          <div className='flex flex-col gap-y-6.25 lg:max-w-107.5'>
            <Heading heading='About the shelter “Cozy House”' />
            <p className='text-[15px] leading-relaxed text-justify'>
              Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20%
              of them will find a family. The others will continue to live with us and will be
              waiting for a lucky chance to become dearly loved.
            </p>
            <p className='text-[15px] leading-relaxed text-justify'>
              We feed our wards with the best food and make sure that they do not get sick, feel
              comfortable (including psychologically) and well. We are supported by 87 volunteers
              and 28 employees of various skill levels. About 12% of the animals are taken by the
              shelter staff. Taking care of the animals, they become attached to the pets and would
              hardly ever leave them alone.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <Image src='/about-pets.png' alt='pets' width={300} height={408} loading='eager' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

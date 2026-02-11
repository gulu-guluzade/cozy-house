import Image from 'next/image';
import Container from '../container';
import Heading from '../heading';

interface IHelpData {
  id: number;
  text: string;
  imgSrc: string;
}

const helpData: IHelpData[] = [
  { id: 1, text: 'Pet food', imgSrc: '/icon-pet-food.svg' },
  { id: 2, text: 'Transportation', imgSrc: '/icon-transportation.svg' },
  { id: 3, text: 'Toys', imgSrc: '/icon-toys.svg' },
  { id: 4, text: 'Bowls and cups', imgSrc: '/icon-bowls-and-cups.svg' },
  { id: 5, text: 'Shampoos', imgSrc: '/icon-shampoos.svg' },
  { id: 6, text: 'Vitamins', imgSrc: '/icon-vitamins.svg' },
  { id: 7, text: 'Medicines', imgSrc: '/icon-medicines.svg' },
  { id: 8, text: 'Collars / Leashes', imgSrc: '/icon-collars-leashes.svg' },
  { id: 9, text: 'Sleeping areas', imgSrc: '/icon-sleeping-area.svg' },
];

const Help = () => {
  return (
    <section className='pt-20 pb-25' id='section-help'>
      <Container>
        <div className='flex flex-col gap-y-15'>
          <Heading
            heading='How you can help our shelter'
            parentClassName='flex items-center justify-center'
          />
          <ul
            className='
            grid grid-cols-1 gap-y-13.75
            xs:grid-cols-2 sm:grid-cols-3'
          >
            {helpData.map(({ id, text, imgSrc }) => (
              <li key={id} className='flex flex-col items-center gap-y-7.5'>
                <Image src={imgSrc} alt={text} width={60} height={60} />
                <span className='text-xl leading-tight tracking-wide text-[#545454]'>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Help;

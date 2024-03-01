import Slider, { Settings } from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from './SlickSlider';

const cardData = [
  {
    id: 1,
    first: 'Barbiana',
    last: 'Liu',
    role: 'Brand Design',
    image: '/person1.png',
    workImage: '/w1.png',
    earned: '$90k+ earned',
  },
  {
    id: 2,
    first: 'Corey',
    last: 'Ward',
    role: 'Full Stack Development',
    image: '/person2.png',
    workImage: '/w2.png',
    earned: '$150k+ earned',
  },
  {
    id: 3,
    first: 'Adriano',
    last: 'Reis',
    role: 'Framer Web Development',
    image: '/person3.png',
    workImage: '/w3.png',
    earned: '$40k+ earned',
  },
  {
    id: 4,
    first: 'Aishwarya',
    last: 'Agarwal',
    role: 'Brand Strategy',
    image: '/person4.png',
    workImage: '/w4.png',
    earned: '$25k+ earned',
  },
  {
    id: 5,
    first: 'Brandon',
    last: 'Hernard',
    role: 'Frontend Development',
    image: '/person5.png',
    workImage: '/w2.png',
    earned: '530k+ earned',
  },
  // Add more card data as needed
];

const FreelancersCards: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div >
      {/* <Slider {...settings} className="w-full overflow-hidden"> */}
      <SlickSlider>
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-grow px-3 lg:px-5">
            <div key={card.id} className="h-70 relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="mb-4 bg-yellow-500 py-2 text-xs font-semibold md:text-base">{card.earned}</div>

              <div className="mb-2 flex w-full flex-row items-center gap-3 px-3 md:gap-4">
                <div className='w-[30%]'>
                  <div className='relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-emerald-600 ring-offset-1' >
                    <Image src={`/assets/people${card.image}`} alt="img"
                      fill
                      className="object-cover" />
                  </div>
                </div>

                <div className="flex w-[70%] flex-col flex-wrap break-words">
                    <h2 className="break-all text-left indent-0 font-Tobias text-2xl font-light lg:text-3xl">{card.first}</h2>
                  <h2 className="break-all text-left font-Tobias text-2xl font-light lg:text-3xl">{card.last}</h2>
                  </div>
              </div>

              <div className="mb-2 flex justify-center rounded-md px-4 py-2 text-center">
                <h6 className="bg-black-500 rounded-full border bg-gray-200 px-2 py-1 font-Inter text-xs lg:px-5 lg:py-3">{card.role}</h6>
              </div>

              <div className='relative aspect-video w-full'>
                <Image src={`/assets/samplework${card.workImage}`} fill alt="img" className="object-cover lg:mb-0" />
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
      {/* </Slider> */}
    </div>
  );
};

export default FreelancersCards;
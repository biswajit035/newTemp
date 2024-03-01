import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type DiscoverCardProps = {
  img: string;
  title: string;
  description: string;
};

const DiscoverCard  = ({ img, title, description }: DiscoverCardProps) => {
  return (
      <div className="flex aspect-video h-full w-full flex-col px-2">
        <div className="relative aspect-video w-full">
        <Image src={img} alt="side img" className="rounded-3xl" height={250} width={200} layout="responsive"  />
        </div>
        
        <div className="flex flex-grow flex-col">
          <div>
          <h3 className="py-3 text-xl font-medium md:text-2xl">{title}</h3>
            <p className="mb-4 overflow-hidden text-base font-light">{description}</p>
           
          </div>
          <div className="mt-auto">
            <button className="rounded-full border border-gray-600 px-4 py-1 hover:bg-black hover:text-white">Read More</button>
          </div>
        </div>
      </div>
  );
};

export default DiscoverCard;

import Image from "next/image";
import star from "@/public/assets/starImage.png";
type startProps = {
  title: string;
  subtitle: string;
  description: string;
}

const Start = ({ title, subtitle, description }: startProps) => {
  return (
    <div className="font-Interpx-5 relative flex h-[70vh] w-full items-center overflow-hidden bg-[#DDD8FF] px-5 md:px-16 lg:h-screen">

      <div className="z-[2]">
        <div className="flex flex-col justify-center">
          <h1 className="font-Inter text-3xl font-semibold antialiased md:text-5xl md:font-normal lg:text-7xl">{title}</h1>
          <h1 className="pt-1 font-Inter text-3xl font-light antialiased md:text-5xl lg:text-7xl">{subtitle}</h1>
          <p className="w-1/2 py-8 font-Inter text-base font-extralight lg:text-2xl">
            {description}
          </p>
          <button className="btn-primary text-base lg:text-lg">Get Started</button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[1] aspect-square w-[80%] md:w-[35%]">
        <div className="relative -bottom-4 h-full w-full md:-bottom-16">
          <Image src={star} alt="side img" fill />
        </div>
      </div>
    </div>
  );
};

export default Start;

import Image, { StaticImageData } from 'next/image';


type imageType = {
  imgData: StaticImageData;
  alt: string;
}

const GraphicsCard = ({ imgData,alt}:imageType) => {
  return (
    <div className='my-auto flex flex-col items-center justify-center font-Inter'>
      <Image src={imgData} alt={alt} className="h-100% px-2 pt-4" />
      <span className='py-3 text-center font-Inter text-lg'>
      {alt}
      </span>

    </div>
  )
}

export default GraphicsCard
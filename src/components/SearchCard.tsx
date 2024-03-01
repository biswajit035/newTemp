import Image from "next/image";
import star from '@/public/assets/searchRes/star.png'
import Location from '@/public/assets/searchRes/location.png'
import Love from '@/public/assets/searchRes/love.png'
import Send from '@/public/assets/searchRes/send.png'

interface SearchCardProps {
  name: string;
}

const SearchCard = ({ name }: SearchCardProps) => {
  return (
    <div className="w-full  rounded-md  border-2 border-slate-300 ">
      {/* TOP */}
      <div className="m-2 flex gap-3">
        {/* LEFT */}
        <div className=" relative flex items-center">
          {/* IMAGE HOLDER */}
          <div className="relative bg-gradient-to-r from-amber-500 to-purple-400 rounded-full aspect-square h-14 my-auto overflow-hidden border-1 border-black p-[3px]">

            <Image src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg" alt="nature" height={200} width={200} className="w-full rounded-full" />
          </div>
          <span className="absolute bottom-1 left-2  bg-gradient-to-r from-amber-500 to-purple-400 flex items-center p-[2px]">
            <span className="w-full bg-[#ffe6e6] px-2 text-[#93370D] text-bold text-center text-[8px] p-[1px] rounded-md">
              PRO
            </span>
          </span>
        </div>

        {/* // right */}
        <div className="flex flex-col gap-1">
          <span className="flex gap-1">
            <div className="bg-[#EEEBFF] text-[8px] p-1 rounded-md text-[#6A57E3] font-bold flex">
              TOP INDEPENDENT
            </div>
            <div className="bg-[#CFF0D7] text-[8px] p-1 rounded-md text-[#307F4A] font-semibold">AVAILABLE</div>
          </span>
          <span className="text-base">
            Priya Sharma
          </span>
          <span className="text-xs text-gray-500 flex gap-1">
            <Image src={star} alt="star" />
            Recommended 6x
          </span>
          <span className="text-xs text-slate-600 flex gap-1">
            <Image src={Location} alt="location" />
            Delhi
          </span>
        </div>

      </div>
      <div className="my-5 w-8/12  flex gap-2 flex-wrap">
        <span className="text-[9px] border border-gray-400 px-2 py-1 rounded-full">$50-$75/hr</span>
        <span className="text-[9px] border border-gray-400 px-2 py-1 rounded-full">Videographer</span>
        <span className="text-[9px] border border-gray-400 px-2 py-1 rounded-full">Content Writer</span>
        <span className="text-[9px] border border-gray-400 px-2 py-1 rounded-full">Google Drive</span>
        <span className="text-[9px] border border-gray-400 px-2 py-1 rounded-full">20+</span>
      </div>
      <div className="image aspect-video w-full">
        <Image src="https://img.freepik.com/free-photo/side-view-smiley-woman-holding-hen_23-2149456919.jpg" alt="nature" height={200} width={200} className="w-full" />
      </div>
      <div className="m-2">
        <span className="flex gap-2 items-center">
          <div className="border-2 border-gray-500 rounded-full aspect-square h-12 flex items-center justify-center">
            <Image src={Love} alt="nature" className="" />
          </div>
          <div className="bg-[#222834] text-white h-fit w-full rounded-full flex justify-center items-center py-2 cursor-pointer hover:bg-[#303a4c] gap-1">
            <Image src={Send} alt="send icon" className="w-5 h-5" />
              Get In Touch
          </div>
        </span>
      </div>
    </div>
  )
}

export default SearchCard
import DiscoverCard from "./DiscoverCard"
import SlickSlider from "./SlickSlider"

interface DiscoverProps {
    data: Array<{ img: string; title: string; description: string }>;
}

const Discover = ({ data }: DiscoverProps) => {


    return (
        <div className="flex h-fit flex-col gap-2 bg-white px-5 py-10 font-Inter md:px-16">

            <div className="flex flex-row">
                <h1 className="font-Inter text-3xl md:text-5xl lg:text-6xl">How to get started on Crewlance</h1>
            </div>
            <SlickSlider>
                {data.map((el, index) => <DiscoverCard key={index} img={`/assets${el.img}`} title={el.title} description={el.description} />)}
            </SlickSlider>
        </div>

    )
}

export default Discover


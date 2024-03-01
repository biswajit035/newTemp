import { fetchData } from "@/src/actions/fetchData";
import SearchBoxDist from "@/src/components/ui/SearchBoxDist";
import { LoadMore } from "@/src/components/ui/load-more";
import SearchBox from "@/src/components/SearchBox";
import Link from "next/link";

const Search = async () => {
  const fetchedResults = await fetchData(1);

  return (
    <div className="mx-4 lg:mx-20">
      {/* topbar */}
     <div className="flex flex-col gap-5 mt-10">
        <div className="p-1 sm:p-0 flex flex-col sm:flex-row gap-2 bg-green-300 rounded-3xl lg:rounded-full justify-between">
          <SearchBox cross={true} width="w-full lg:w-full" />
          <div className="buttonHandler flex items-center ">
            <Link href="/people" className="bg-white px-4 py-1 rounded-full">People</Link>
            <Link href="/people" className="px-4 py-1 rounded-full">Service</Link>
          </div>
        </div>
        <span className="gap-2 flex ">
          <button className="border border-gray-400 p-2 text-[12px] font-semibold text-gray-700 rounded-xl">Location</button>
          <button className="border border-gray-400 p-2 text-[12px] font-semibold text-gray-700 rounded-xl">Rate</button>
          <button className="border border-gray-400 p-2 text-[12px] font-semibold text-gray-700 rounded-xl">All Filters</button>
        </span>
     </div>
      


      <SearchBoxDist results={fetchedResults} />
      <LoadMore />
    </div>
  );
};

export default Search;

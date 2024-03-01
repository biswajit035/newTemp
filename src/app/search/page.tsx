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
     <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col justify-between gap-2 rounded-3xl bg-green-300 p-1 sm:flex-row sm:p-0 lg:rounded-full">
          <SearchBox placeholder="Search..." width="w-full lg:w-full" />
          <div className="buttonHandler flex items-center">
            <Link href="/people" className="rounded-full bg-white px-4 py-1">People</Link>
            <Link href="/people" className="rounded-full px-4 py-1">Service</Link>
          </div>
        </div>
        <span className="flex gap-2">
          <button className="rounded-xl border border-gray-400 p-2 text-[12px] font-semibold text-gray-700">Location</button>
          <button className="rounded-xl border border-gray-400 p-2 text-[12px] font-semibold text-gray-700">Rate</button>
          <button className="rounded-xl border border-gray-400 p-2 text-[12px] font-semibold text-gray-700">All Filters</button>
        </span>
     </div>
      


      <SearchBoxDist results={fetchedResults} />
      <LoadMore />
    </div>
  );
};

export default Search;

"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchData } from "@/src/actions/fetchData";
import { SearchCardProps } from "@/src/types";
import SearchBoxDist from "./SearchBoxDist";

export function LoadMore() {
    const [results, setResults] = useState<SearchCardProps[]>([]);
    const [page, setPage] = useState(1);

    const { ref, inView } = useInView();

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const loadMoreCards = async () => {
        // Once the page 8 is reached repeat the process all over again.
        await delay(1000);
        const nextPage = (page % 7) + 1;
        const newProducts = (await fetchData(nextPage)) ?? [];
        setResults((prevProducts: SearchCardProps[]) => [...prevProducts, ...newProducts]);
        setPage(nextPage);
    };

    useEffect(() => {
        if (inView) {
            loadMoreCards();
        }
    }, [inView]);

    return (
        <>
            <SearchBoxDist results={results} />
            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                ref={ref}
            >
                Loading ... 
            </div>
        </>
    );
}
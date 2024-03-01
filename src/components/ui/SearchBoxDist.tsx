import React from 'react'
import SearchCard from '../SearchCard'
import { SearchCardProps } from '@/src/types';

export interface resultProps {
    results: SearchCardProps[] | null;
}

const SearchBoxDist = ({ results }: resultProps) => {
    return (
            <div className="mx-2 h-fit grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 mt-10">
                {

                    results?.map((item, idx) => <SearchCard name={item.name} key={idx} />)
                }
            </div>
    )
}

export default SearchBoxDist
import React from 'react'
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function SearchBoxSkeleton(
  { width }
    : {
      width: string;
    }
) {
  return (
    <div className={`${shimmer} relative overflow-hidden flex ${width} justify-end items-center gap-3 rounded-full border-2  bg-gray-200 py-1`}>
      {/* <div className=""> */}
      {/* <div
        className="w-full rounded-s-full bg-gray-300 py-2 pl-3 md:py-3 lg:py-4"
      /> */}

      {/* ------------------------------- SEARCH ICON ------------------------------ */}
      <button
        type="submit"
        className="mr-2 h-12 w-12 rounded-full border bg-gray-300"
      >
      </button>
    </div>
  )
}
export function SearchPaginationSkeleton(
  { width }
    : {
      width: string;
    }
) {
  return (
    <div className={`${shimmer} h-10 px-5 relative overflow-x-hidden flex ${width} items-center gap-3 rounded-full  py-1`}>
      {/* <div className=""> */}
      {/* <div
        className="w-full rounded-s-full bg-gray-300 py-2 pl-3 md:py-3 lg:py-4"
      /> */}

      {/* ------------------------------- SEARCH ICON ------------------------------ */}
      <div className='h-8 w-[100px] rounded-full bg-gray-300 md:w-[100px]'></div>
      <div className='h-8 w-[100px] rounded-full bg-gray-300 md:w-[100px]'></div>
      <div className='h-8 w-[100px] rounded-full bg-gray-300 md:w-[100px]'></div>

    </div>
  )
}
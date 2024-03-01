"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const TooglleBtn = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams()
  const search = searchParams?.get('userType')

  const handleCheckboxClick = () => {
    push(search === "freelance" ? "/" : "/?userType=freelance");
  };

  return (
    <label className="relative mx-5 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        onClick={handleCheckboxClick}
        checked={search === 'freelance'}
        readOnly
      />
      <div className="peer h-6 w-11 rounded-full bg-darkBg after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-darkBg rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-darkBg"></div>
    </label>
  );
};

export default TooglleBtn;

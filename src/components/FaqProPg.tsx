import { useState } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const FaqProPg = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="text-white relative border-t">
                    <div
                        className={`cursor-pointer flex justify-between items-center border-b ${activeIndex === index ? 'border-transparent' : 'border-white'
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className=" lg:text-2xl text-lg my-4">{item.question}</div>
                        <div className={`transform  ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                        &#x25BC;
                        </div>
                    </div>
                    <div
                        className={`mt-4 lg:text-xl text-lg transition-all duration-300 ${activeIndex === index ? 'max-h-96 border-b  border-white' : 'hidden max-h-0'
                            }`}
                    >
                        <p className='mb-3'>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqProPg;
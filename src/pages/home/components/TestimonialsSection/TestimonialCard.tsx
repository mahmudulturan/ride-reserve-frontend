import { FC } from 'react';
import './testimonial-card.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';
const TestimonialCard: FC = () => {
    return (
        <div className="relative pt-10 px-10 pb-0 rounded-[20px] rounded-l-none rounded-tl-[20px] bg-[#222] item">
            <div className="absolute top-0 right-0 pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-bl-[20px] text-primaryColor bg-[#1b1b1b]">
                <div className='flex items-center gap-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='absolute rounded-tr-none rounded-full top-0 -left-6 bg-[#1B1B1B]'>
                    <div className='size-6 rounded-full bg-[#222]' />
                </div>
                <div className='absolute rounded-tr-none rounded-full -bottom-6 right-0 bg-[#1B1B1B]'>
                    <div className='size-6 rounded-full bg-[#222]' />
                </div>
            </div>
            <FaQuoteLeft className='size-10 text-primaryColor' />
            <div className="text-sm text-Grayish font-light py-3 ">
                <p>Came in for walk-in inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.</p>
            </div>
            <div className="info mt-30">

                <div className="img-curv">
                    <div className="img">
                        <img decoding="async" src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2-1.jpg" alt="" />
                    </div>
                    <div className='absolute rounded-bl-none rounded-full -top-6 left-0 bg-[#1B1B1B]'>
                        <div className='size-6 rounded-full bg-[#222]' />
                    </div>
                    <div className='absolute rounded-bl-none rounded-full bottom-0 -right-6 bg-[#1B1B1B]'>
                        <div className='size-6 rounded-full bg-[#222]' />
                    </div>
                </div>
                <div className="ml-[20px]">
                    <h6 className="text-sm">Olivia Brown</h6>
                    <p className='text-xs font-light text-Grayish'>Customer</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
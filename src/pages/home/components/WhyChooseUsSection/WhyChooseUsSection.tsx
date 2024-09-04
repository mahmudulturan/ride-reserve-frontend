import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { FaCar, FaUserAlt } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa6';

const WhyChooseUsSection: FC = () => {
    return (
        <div className='wrapper my-20 flex items-center justify-between gap-6'>
            <div className='flex-1'>
                <SectionHeading subHeading='Why Choose Us' heading='Why you will choose us' align='left' className='my-0' />
                <p className='text-Grayish max-w-xl'>At our car rental company, we pride ourselves on providing an exceptional experience that sets us apart from the competition. From our wide selection of well-maintained vehicles to our unparalleled customer service, we're dedicated to making your rental experience seamless and enjoyable.</p>
                <div className='space-y-3 my-5'>
                    <div className='flex items-center gap-2 group'>
                        <Button variant={"outline"} size={"icon"} isArrowIcon={false} className='group-hover:bg-primaryColor group-hover:text-black'>
                            <FaCar className='size-5' />
                        </Button>
                        <div>
                            <h5 className='text-xl'>Extensive Fleet</h5>
                            <p className='text-Grayish text-sm'>Choose from a wide range of well-maintained vehicles to fit your needs, from compact cars to spacious SUVs.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 group'>
                        <Button variant={"outline"} size={"icon"} isArrowIcon={false} className='group-hover:bg-primaryColor group-hover:text-black'>
                            <FaCar className='size-5' />
                        </Button>
                        <div>
                            <h5 className='text-xl'>Competitive Pricing</h5>
                            <p className='text-Grayish text-sm'>Enjoy our affordable rates and transparent pricing, ensuring you get the best value for your money.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 group'>
                        <Button variant={"outline"} size={"icon"} isArrowIcon={false} className='group-hover:bg-primaryColor group-hover:text-black'>
                            <FaRegCreditCard className='size-5' />
                        </Button>
                        <div>
                            <h5 className='text-xl'>Exceptional Service</h5>
                            <p className='text-Grayish text-sm'>Our dedicated team is committed to providing personalized attention and support throughout your rental experience.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 group'>
                        <Button variant={"outline"} size={"icon"} isArrowIcon={false} className='group-hover:bg-primaryColor group-hover:text-black'>
                            <FaUserAlt className='size-5' />
                        </Button>
                        <div>
                            <h5 className='text-xl'>Convenient Locations</h5>
                            <p className='text-Grayish text-sm'>With multiple locations across the city, we make it easy for you to pick up and drop off your rental car.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex items-end justify-end'>
                <div className='rounded-[20px] overflow-hidden relative'>
                    <img
                        className='hover:scale-110 transition-all duration-500'
                        src="https://i.ibb.co/WkNYc4m/satisfied-male-customer-holding-car-key-auto-repair-shop-looking-camera-1.jpg"
                        alt="" />

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;
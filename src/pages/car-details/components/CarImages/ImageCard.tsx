import { FC, useState, useEffect, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

const ImageCard: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // user menu outside click handler
    const handleClickOutside = (event: Event) => {
        if (imageRef.current && !imageRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='rounded-[20px] overflow-hidden group cursor-pointer'>
                <img
                    src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/11b.jpg"
                    className='group-hover:scale-110 duration-300'
                    alt=""
                />
            </div>

            {isOpen && (
                <div className='fixed top-0 left-0 z-50 w-full min-h-screen px-3 py-3 bg-black/70 cursor-zoom-out'>
                    <div className='relative flex items-center justify-center min-h-screen'>
                        <img
                            ref={imageRef}
                            src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/11b.jpg"
                            className='md:w-1/2 cursor-pointer'
                            onBlur={() => setIsOpen(false)}
                        />
                        <button
                            ref={buttonRef}
                            onClick={() => setIsOpen(false)}
                            className='absolute top-5 right-5 text-white p-1'>
                            <RxCross2 className='size-6' />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCard;
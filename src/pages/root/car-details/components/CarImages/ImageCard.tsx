import { FC, useState, useEffect, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';

const ImageCard: FC<{ image: string }> = ({ image }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const zoomInButtonRef = useRef<HTMLButtonElement | null>(null);
    const zoomOutButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            imageRef.current && !imageRef.current.contains(event.target as Node)
            &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)
            &&
            zoomInButtonRef.current && !zoomInButtonRef.current.contains(event.target as Node)
            &&
            zoomOutButtonRef.current && !zoomOutButtonRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
            setScale(1);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleZoomIn = () => {
        setScale(prevScale => Math.min(prevScale + 0.1, 3));
    };

    const handleZoomOut = () => {
        setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='rounded-[20px] overflow-hidden group cursor-pointer'>
                <img
                    src={image}
                    className='group-hover:scale-110 duration-300 w-full lg:w-[368px] h-[207px] object-cover'
                    alt=""
                />
            </div>

            {isOpen && (
                <div className='fixed top-0 left-0 z-50 w-full min-h-screen px-3 py-3 bg-black/70 cursor-zoom-out'>
                    <div className='relative flex items-center justify-center min-h-screen'>
                        <img
                            ref={imageRef}
                            src={image}
                            className='md:w-1/2 cursor-move'
                            style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
                            onBlur={() => setIsOpen(false)}
                        />
                        <button
                            ref={buttonRef}
                            onClick={() => setIsOpen(false)}
                            className='absolute top-5 right-5 text-white p-1'>
                            <RxCross2 className='size-6' />
                        </button>

                        {/* Zoom controls */}
                        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4'>
                            <button
                                ref={zoomInButtonRef}
                                onClick={handleZoomIn}
                                className='bg-white/20 hover:bg-white/30 text-white p-2 rounded-full'
                            >
                                <FiZoomIn className='size-6' />
                            </button>
                            <button
                                ref={zoomOutButtonRef}
                                onClick={handleZoomOut}
                                className='bg-white/20 hover:bg-white/30 text-white p-2 rounded-full'
                            >
                                <FiZoomOut className='size-6' />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCard;
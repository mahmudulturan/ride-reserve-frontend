import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { FC, useState } from 'react';

type SliderProps = React.ComponentProps<typeof Slider>

const PriceRangeSelector: FC<SliderProps> = ({ className, ...props }) => {
    const [priceRange, setPriceRange] = useState([0, 50000]);

    return (
        <div>
            <Slider
                min={0}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className={cn(
                    "mt-2 w-full",
                    className
                )}
                {...props}
            />
            <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
            </div>
        </div>
    );
};

export default PriceRangeSelector;
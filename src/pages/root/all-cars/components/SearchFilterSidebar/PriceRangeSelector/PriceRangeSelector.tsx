import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useGetHighestPricedCarQuery } from '@/redux/features/car/carApi';
import { FC, useEffect, useState } from 'react';

type SliderProps = React.ComponentProps<typeof Slider>

const PriceRangeSelector: FC<SliderProps> = ({ className, ...props }) => {
    const [priceRange, setPriceRange] = useState([0, 1]);
    const { data: highestPrice } = useGetHighestPricedCarQuery();


    useEffect(() => {
        if (highestPrice?.data) {
            setPriceRange([0, highestPrice.data]);
        }
    }, [highestPrice])
    return (
        <div>
            <Slider
                min={0}
                max={highestPrice?.data || 1}
                step={1}
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
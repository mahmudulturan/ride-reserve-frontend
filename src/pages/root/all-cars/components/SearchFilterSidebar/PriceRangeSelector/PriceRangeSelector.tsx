import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useGetHighestPricedCarQuery } from '@/redux/features/car/carApi';
import { FC, useEffect, useState } from 'react';

interface SliderProps extends React.ComponentProps<typeof Slider> {
    handleMinPrice: (val: string) => void;
    handleMaxPrice: (val: string) => void;
}

const PriceRangeSelector: FC<SliderProps> = ({ handleMaxPrice, handleMinPrice, className, ...props }) => {
    const [priceRange, setPriceRange] = useState([0, 1]);
    const { data: highestPrice } = useGetHighestPricedCarQuery();


    useEffect(() => {
        if (highestPrice?.data) {
            setPriceRange([0, highestPrice.data]);
        }
    }, [highestPrice]);

    const onValueChange = (data: [number, number]) => {
        if (priceRange[0] != data[0]) {
            handleMinPrice(data[0].toString());
        }
        if (priceRange[1] != data[1]) {
            handleMaxPrice(data[1].toString());
        }
        setPriceRange(data);
    }

    return (
        <div>
            <Slider
                min={0}
                max={highestPrice?.data || 1}
                step={1}
                value={priceRange}
                onValueChange={onValueChange}
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
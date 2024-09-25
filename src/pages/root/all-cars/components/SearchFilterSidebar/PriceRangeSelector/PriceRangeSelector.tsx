import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useGetHighestPricedCarQuery } from '@/redux/features/car/carApi';
import { FC, useEffect, useState } from 'react';

interface SliderProps extends React.ComponentProps<typeof Slider> {
    handleMinPrice: (val: string) => void;
    handleMaxPrice: (val: string) => void;
    previousValue: [number | null, number | null];
}

const PriceRangeSelector: FC<SliderProps> = ({ handleMaxPrice, handleMinPrice, className, previousValue, ...props }) => {
    const [priceRange, setPriceRange] = useState([0, 1]);
    const { data: priceRangeData } = useGetHighestPricedCarQuery();


    useEffect(() => {
        if (priceRangeData?.data) {
            setPriceRange([priceRangeData.data.lowestPriceCar.pricePerHour, priceRangeData.data.highestPriceCar.pricePerHour]);
        }
    }, [priceRangeData]);


    const onValueChange = (data: [number, number]) => {
        if (priceRange[0] != data[0]) {
            handleMinPrice(data[0].toString());
        }
        if (priceRange[1] != data[1]) {
            handleMaxPrice(data[1].toString());
        }
        setPriceRange(data);
    }

    useEffect(() => {
        if (previousValue[0] == null && previousValue[1] == null) {
            if (priceRangeData?.data) {
                setPriceRange([priceRangeData.data.lowestPriceCar.pricePerHour, priceRangeData.data.highestPriceCar.pricePerHour]);
            }
        }
        else if (typeof previousValue[0] == "number" && previousValue[1] == null) {
            if (priceRangeData?.data) {
                setPriceRange([previousValue[0], priceRangeData.data.highestPriceCar.pricePerHour]);
            }
        }
        else if (typeof previousValue[1] == "number" && previousValue[0] == null) {
            if (priceRangeData?.data) {
                setPriceRange([priceRangeData.data.lowestPriceCar.pricePerHour, previousValue[1]]);
            }
        }
        else {
            setPriceRange([previousValue[0] || 0, previousValue[1] || 1]);
        }
    }, [previousValue]);

    return (
        <div>
            <Slider
                min={priceRangeData?.data?.lowestPriceCar?.pricePerHour || 0}
                max={priceRangeData?.data?.highestPriceCar?.pricePerHour || 1}
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
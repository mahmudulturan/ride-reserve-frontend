import { FC, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';


interface ISelectAdditionalFeaturesProps {
    features: string[];
    setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectAdditionalFeatures: FC<ISelectAdditionalFeaturesProps> = ({ features, setFeatures }) => {
    const [value, setValue] = useState<string>('');
    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const addFeature = (feature: string) => {
        if (!feature) return;
        setFeatures([...features, feature]);
        setValue('');
    };

    return (
        <div className='flex flex-row flex-wrap gap-2 w-full rounded-md border text-black border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-primaryColor dark:ring-offset-slate-300 dark:placeholder:text-slate-400 dark:focus-visible:ring-primaryColor duration-200 overflow-hidden'>
            {features?.map((feature, index) => (
                <span key={index} className='bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-full text-sm flex items-center'>
                    {feature}
                    <span onClick={() => removeFeature(index)} className='ml-2 text-red-500 cursor-pointer'><RxCross2 /></span>
                </span>
            ))}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="features"
                placeholder="Car's Features"
                id='features'
                className="outline-none flex-grow"
                onBlur={(e) => addFeature(e.target.value)}
            />

        </div>
    );
};

export default SelectAdditionalFeatures;
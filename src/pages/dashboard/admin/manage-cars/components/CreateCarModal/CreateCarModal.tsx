import { FC, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ICar } from '@/redux/features/car/carApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';
import SelectFeatures from './SelectFeatures';
import SelectAdditionalFeatures from './SelectAdditionalFeatures';
import UploadCarImages from './UploadCarImages';


const CreateCarModal: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isElectric, setIsElectric] = useState<string>("");
    const [features, setFeatures] = useState<string[]>([]);
    const [additionalFeatures, setAdditionalFeatures] = useState<string[]>([]);
    const [carType, setCarType] = useState<string>('');
    const [carTypeRequiredError, setCarTypeRequiredError] = useState<boolean>(false);
    const [featuresRequiredError, setFeaturesRequiredError] = useState<boolean>(false);
    const [isElectricRequiredError, setIsElectricRequiredError] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([]);

    const { register, handleSubmit, formState: { errors }, } = useForm<Partial<ICar>>();

    const onSubmit: SubmitHandler<Partial<ICar>> = (data) => {

        const reqData = {
            ...data,
            isElectric: isElectric === "Yes" ? true : false,
            features,
            carType,
            additionalFeatures,
            images
        }
        console.log(reqData);
    }

    const handleClickSubmit = () => {
        if (!carType) {
            setCarTypeRequiredError(true);
        }
        if (!features.length) {
            setFeaturesRequiredError(true);
        }
        if (!isElectric) {
            setIsElectricRequiredError(true);
        }

    }

    useEffect(() => {
        if (features.length) {
            setFeaturesRequiredError(false);
        }

        if (carType) {
            setCarTypeRequiredError(false);
        }
    }, [features, carType])
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline" className='h-10 px-4'>Add New Car</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl px-2">
                <DialogHeader className='px-2'>
                    <DialogTitle>Add New Car</DialogTitle>
                    <DialogDescription>
                        Add new car to your shop
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-[50vh] overflow-y-auto thin-scrollbar px-2 pb-2'>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    {...register('name', { required: true })}
                                    id="name"
                                    placeholder='Car Name'
                                    className=""
                                />
                                {errors.name && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="model" className="text-right">
                                    Model
                                </Label>
                                <Input
                                    {...register('model', { required: true })}
                                    id="model"
                                    placeholder='Car Model'
                                    className=""
                                />
                                {errors.model && <span className='text-red-400 text-sm px-3'>Model is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="carType" className="text-right">
                                    Type
                                </Label>
                                <Select
                                    onValueChange={(e) => setCarType(e)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Car Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Sedan">Sedan</SelectItem>
                                        <SelectItem value="SUV">SUV</SelectItem>
                                        <SelectItem value="Hatchback">Hatchback</SelectItem>
                                        <SelectItem value="Coupe">Coupe</SelectItem>
                                        <SelectItem value="Truck">Truck</SelectItem>
                                        <SelectItem value="Minivan">Minivan</SelectItem>
                                        <SelectItem value="Convertible">Convertible</SelectItem>
                                        <SelectItem value="Wagon">Wagon</SelectItem>
                                        <SelectItem value="Crossover">Crossover</SelectItem>
                                        <SelectItem value="Van">Van</SelectItem>
                                    </SelectContent>
                                </Select>
                                {carTypeRequiredError && <span className='text-red-400 text-sm px-3'>Car Type is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricePerHour" className="text-right">
                                    Price
                                </Label>
                                <Input
                                    {...register('pricePerHour', { required: true })}
                                    id="pricePerHour"
                                    placeholder='Car Price by Per Hour'
                                    className=""
                                    min={0}
                                    type='number'
                                />
                                {errors.pricePerHour && <span className='text-red-400 text-sm px-3'>Price is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="color" className="text-right">
                                    Color
                                </Label>
                                <Input
                                    {...register('color', { required: true })}
                                    id="color"
                                    placeholder='Car Color'
                                    className=""
                                    type='text'
                                />
                                {errors.color && <span className='text-red-400 text-sm px-3'>Color is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="isElectric" className="text-right">
                                    Is Electric
                                </Label>
                                <Select
                                    onValueChange={(e) => setIsElectric(e)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Is Electric or Not" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Yes">Yes</SelectItem>
                                        <SelectItem value="No">No</SelectItem>
                                    </SelectContent>
                                </Select>
                                {
                                    isElectricRequiredError && <span className='text-red-400 text-sm px-3'>Is Electric is required</span>
                                }
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="features" className="text-right">
                                    Features
                                </Label>
                                <SelectFeatures features={features} setFeatures={setFeatures} />
                                {featuresRequiredError && <span className='text-red-400 text-sm px-3'>Features is required</span>}
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="additionFeature" className="text-right">
                                    Additional Features
                                </Label>
                                <SelectAdditionalFeatures features={additionalFeatures} setFeatures={setAdditionalFeatures} />
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    {...register('description', { required: true })}
                                    id="description"
                                    placeholder='Car description'
                                    className="col-span-2"
                                    type='text'
                                />
                                {errors.description && <span className='text-red-400 text-sm px-3'>Description is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="totalPassengers" className="text-right">
                                    Total Passengers
                                </Label>
                                <Input
                                    {...register('totalPassengers', { required: true })}
                                    id="totalPassengers"
                                    placeholder="Car's Total Passengers"
                                    className="col-span-2"
                                    type='number'
                                />
                                {errors.totalPassengers && <span className='text-red-400 text-sm px-3'>Total Passengers is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="totalDoors" className="text-right">
                                    Total Doors
                                </Label>
                                <Input
                                    {...register('totalDoors', { required: true })}
                                    id="totalDoors"
                                    placeholder="Car's Total Doors"
                                    className="col-span-2"
                                    type='number'
                                />
                                {errors.totalDoors && <span className='text-red-400 text-sm px-3'>Total Doors is required</span>}
                            </div>
                            <div className='col-span-2'>
                                <UploadCarImages images={images} setImages={setImages} />
                            </div>
                        </div>
                        <Button onClick={handleClickSubmit} type="submit" className='w-full mt-6'>Add Car</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCarModal;
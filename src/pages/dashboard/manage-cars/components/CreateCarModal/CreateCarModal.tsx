import { FC, FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ICar } from '@/redux/features/car/carApi';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const CreateCarModal: FC = () => {
    const [open, setOpen] = useState(false);
    const [isElectric, setIsElectric] = useState(false);
    const [features, setFeatures] = useState<string[]>([]);
    const [additionalFeatures, setAdditionalFeatures] = useState<string[]>([]);

    const handleAddCar = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.name as unknown as HTMLInputElement).value;
        const model = (form.model as unknown as HTMLInputElement).value;
        // const year = (form.year as unknown as HTMLInputElement).value;
        const color = (form.color as unknown as HTMLInputElement).value;
        const carType = (form.carType as unknown as HTMLInputElement).value;
        const description = (form.description as unknown as HTMLInputElement).value;
        const pricePerHour = (form.pricePerHour as unknown as HTMLInputElement).value;

        const CarData: Partial<ICar> = {
            name,
            model,
            year: parseInt('434'),
            description,
            color,
            isElectric,
            carType,
            features,
            additionalFeatures,
            pricePerHour: parseInt(pricePerHour)
        }

        console.log(CarData)
    }
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
                    <form onSubmit={handleAddCar} className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-[50vh] overflow-y-auto thin-scrollbar px-2 pb-2'>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    required
                                    id="name"
                                    placeholder='Car Name'
                                    className=""
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="model" className="text-right">
                                    Model
                                </Label>
                                <Input
                                    required
                                    id="model"
                                    placeholder='Car Model'
                                    className=""
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="carType" className="text-right">
                                    Type
                                </Label>
                                <Select>
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
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricePerHour" className="text-right">
                                    Price
                                </Label>
                                <Input
                                    required
                                    id="pricePerHour"
                                    placeholder='Car Price by Per Hour'
                                    className=""
                                    min={0}
                                    type='number'
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="color" className="text-right">
                                    Color
                                </Label>
                                <Input
                                    required
                                    id="color"
                                    placeholder='Car Color'
                                    className=""
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="isElectric" className="text-right">
                                    Is Electric
                                </Label>
                                <div className="flex items-center gap-2 h-10 w-full rounded-md border text-black border-slate-200 bg-white px-3 py-2 text-sm dark:border-primaryColor">
                                    <Checkbox id="isElectric" />
                                    <label
                                        htmlFor="isElectric"
                                        className="text-sm min-w-20 font-semibold cursor-pointer "
                                    >
                                        Is Electric
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="features" className="text-right">
                                    Features
                                </Label>
                                <Input
                                    required
                                    id="features"
                                    placeholder="Car's Features"
                                    className="col-span-2"
                                    type='text'
                                />
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="additionFeature" className="text-right">
                                    Additional Features
                                </Label>
                                <Input
                                    required
                                    id="additionFeature"
                                    placeholder="Car's Additional Features"
                                    className="col-span-2"
                                    type='text'
                                />
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    required
                                    id="description"
                                    placeholder='Car description'
                                    className="col-span-2"
                                    type='text'
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="totalPassengers" className="text-right">
                                    Total Passengers
                                </Label>
                                <Input
                                    required
                                    id="totalPassengers"
                                    placeholder="Car's Total Passengers"
                                    className="col-span-2"
                                    type='number'
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="totalDoors" className="text-right">
                                    Total Doors
                                </Label>
                                <Input
                                    required
                                    id="totalDoors"
                                    placeholder="Car's Total Doors"
                                    className="col-span-2"
                                    type='number'
                                />
                            </div>
                        </div>
                        <Button type="submit" className='w-full mt-6'>Add Car</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCarModal;
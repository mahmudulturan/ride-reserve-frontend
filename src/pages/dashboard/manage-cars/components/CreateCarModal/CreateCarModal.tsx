import { FC, FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


const CreateCarModal: FC = () => {
    const [open, setOpen] = useState(false);


    const handleAddCar = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = (form.title as unknown as HTMLInputElement).value;
        const category = (form.category as unknown as HTMLInputElement).value;
        const price = parseInt((form.price as unknown as HTMLInputElement).value);
        const stock_quantity = parseInt((form.stock_quantity as unknown as HTMLInputElement).value);
        const image = (form.image as unknown as HTMLInputElement).value;
        const description = (form.description as unknown as HTMLInputElement).value;

        const CarData = {
            title,
            category,
            price: {
                amount: price,
                discount: 0
            },
            rating: {
                rate: Math.random() * 5,
                count: Math.floor(Math.random() * 1000)
            },
            inventory: {
                quantity: stock_quantity,
                inStock: true
            },
            image,
            description
        }

        console.log(CarData)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline" className='h-10 px-4'>Add New Car</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add New Car</DialogTitle>
                    <DialogDescription>
                        Add new car to your shop
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form onSubmit={handleAddCar} className='grid grid-cols-2 gap-3'>
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
                            <Input
                                required
                                id="carType"
                                placeholder='Car Type (Ex: SUV, Sedan, etc.)'
                                className=""
                            />
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
                        <Button type="submit" className='col-span-2 mt-3'>Add Car</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCarModal;
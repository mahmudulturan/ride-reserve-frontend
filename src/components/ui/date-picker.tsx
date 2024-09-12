import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { FC, useState } from "react";



const DatePicker: FC<{ label: string }> = ({ label }) => {
    const [date, setDate] = useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild className="group">
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal text-black dark:text-slate-400",
                        !date && "text-muted-foreground"
                    )}
                    isArrowIcon={false}
                >
                    <CalendarIcon className="mr-2 size-5 text-primaryColorLight dark:text-primaryColor group-hover:text-white dark:group-hover:text-black" />
                    {date ? format(date, "PPP") : <span>{label}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
};

export default DatePicker;
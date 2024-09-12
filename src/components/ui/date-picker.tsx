"use client"

import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"



const DatePicker: React.FC = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full lg:w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    isArrowIcon={false}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
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
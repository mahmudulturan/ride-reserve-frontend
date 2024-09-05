import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { GoArrowUpRight } from "react-icons/go"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-light ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 gap-2 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primaryColorLight text-white hover:text-black dark:bg-primaryColor hover:bg-slate-100  dark:text-blackColor dark:hover:bg-slate-50/90 translate-y-0 hover:-translate-y-1",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border-2 border-primaryColorLight hover:bg-primaryColorLight hover:text-white dark:border-primaryColor dark:hover:bg-primaryColor dark:hover:text-black",
        secondary:
          "dark:bg-slate-100 text-white dark:text-blackColor hover:bg-primaryColorLight bg-slate-800 dark:hover:bg-primaryColor",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "px-[42px] py-[14px] rounded-full",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "p-3 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isArrowIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isArrowIcon = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
        {
          isArrowIcon && <GoArrowUpRight />
        }
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

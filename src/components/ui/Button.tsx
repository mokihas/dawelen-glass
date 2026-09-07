import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-[0.05em] transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full cursor-pointer",
          {
            "bg-primary text-primary-foreground hover:bg-red-700 shadow-md hover:shadow-red-600/20 active:scale-[0.98]": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-red-600 active:scale-[0.98]": variant === "secondary",
            "border border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white": variant === "outline",
            "hover:text-primary": variant === "ghost",
            "text-primary underline-offset-8 hover:underline hover:text-red-500": variant === "link",
            "h-12 px-8 py-3": size === "default",
            "h-10 px-6 text-xs": size === "sm",
            "h-14 px-8 text-sm md:text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-lift shadow-cta",
  {
    variants: {
      variant: {
        primary: "gradient-cta text-cta-foreground hover:shadow-lg transform hover:scale-105 active:scale-95",
        secondary: "gradient-success text-secondary-foreground hover:bg-secondary-light",
        premium: "gradient-premium text-accent-foreground hover:shadow-lg",
        outline: "border-2 border-cta text-cta hover:bg-cta hover:text-cta-foreground",
        ghost: "text-cta hover:bg-cta/10"
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        default: "h-12 px-6 py-3",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl"
      },
      pulse: {
        true: "animate-pulse",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      pulse: false
    },
  }
)

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, pulse, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, pulse, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CTAButton.displayName = "CTAButton"

export { CTAButton, ctaButtonVariants }
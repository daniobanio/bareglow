
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-rosegold-500 text-white hover:bg-rosegold-600",
        secondary:
          "border-transparent bg-rosegold-100 text-rosegold-700 hover:bg-rosegold-200",
        outline: "text-foreground border-rosegold-200 hover:bg-rosegold-50",
        sage: "border-transparent bg-sage-100 text-sage-800 hover:bg-sage-200",
        cream: "border-transparent bg-cream-100 text-cream-800 hover:bg-cream-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils"

const washVariants = {
    default: "bg-inherit",
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    tertiary: "bg-tertiary",
} as const

export function ImageWash({
  variant = "default",
  className,
  wrapperProps,
  ...props
}: ImageProps & {variant?: keyof typeof washVariants, wrapperProps?: React.HTMLAttributes<HTMLSpanElement>}) {
    const { className: wrapperClassName, ...wrapperPropsRest } = wrapperProps || {};
    return (
    <span {...wrapperPropsRest} className={cn(wrapperClassName, 'inline-block', washVariants[variant])}>
        <Image {...props} className={cn(className, "transform-gpu object-cover grayscale mix-blend-screen")} />
    </span>
)}


import { cn } from "@/lib/utils";

export default function LuminanceImage({
    src,
    colorClass = "bg-primary",
    className = "",
    ...props
}: { 
    src: string;
    colorClass?: string;
    className?: string;
    [key: string]: any;
}) {

    const optimizedUrl = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=100`;

    return <div 
      className={cn(
        "w-full h-full",
        colorClass,
        "mask-luminance",
        "mask-cover",
        "mask-no-repeat",
        "contrast-150",
        "brightness-110",
        className
      )}
      style={{
        maskImage: `conic-gradient(#4d4d4d, #4d4d4d), url('${optimizedUrl}')`,
      }}
      {...props}
    />;
}
import { ImageProps } from 'next/image';
import { ReactNode, ReactElement, cloneElement } from 'react';
import { cn } from "@/lib/utils"

const theme = {
    none: "",
    primary: "primary",
    secondary: "secondary",
    accent: "accent",
    tertiary: "tertiary",
} as const

interface BlockquoteProps {
  children: ReactNode; 
  theme?: keyof typeof theme;
  image?: ReactElement<ImageProps> | null;
  imageFade?: boolean;
  colorWash?: boolean;
};

export function Blockquote({
  children, 
  image, 
  theme = 'none', 
  imageFade = false, 
  colorWash = false, 
  className, 
  ...restProps 
}: BlockquoteProps & React.HTMLAttributes<HTMLQuoteElement>) {
  const mergedImage = image 
    ? cloneElement(image, {
      className: cn(image.props.className, 'object-cover')
    })
    : null;
  const maskClass = mergedImage && imageFade
    ? `mask-t-from-60% mask-t-to-90% 
       md:mask-t-from-100% md:mask-t-to-0% md:mask-l-from-50% md:mask-l-to-90%`
    : '';
  const blockClassName = cn(
    'p-2!',
    className,
    theme,
    {'block relative': mergedImage},
    'p-0! px-8 lg:p-12 '
  );
  const contentClass = `p-4 py-2 md:p-10 pr-6 ${mergedImage ? 'md:mr-[30%]' : ''}`;
  const imageWrapClassName = cn(
    `not-prose inline-block relative w-full h-auto align-bottom md:align-middle
    ${maskClass} 
    ${colorWash ? 'color-wash' : ''}
    md:absolute md:inset-[0_0_0_auto] md:w-auto md:h-full  md:mb-0 md:mt-0
    lg:absolute`, 
  );
  return (
    <blockquote {...restProps}  className={blockClassName}>
      <div className={contentClass}>
        {children}
      </div>
      {mergedImage &&
        <span className={imageWrapClassName}>
          {mergedImage}
        </span>
      }
    </blockquote>
  );
}
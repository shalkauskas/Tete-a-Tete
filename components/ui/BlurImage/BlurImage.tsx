import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'src'> & { src: string };

const BLUR_TRANSFORM = 'w_32,e_blur:400,q_auto:low,f_auto';

const toBlurUrl = (src: string) =>
  src.replace('/image/upload/', `/image/upload/${BLUR_TRANSFORM}/`);

export default function BlurImage({ src, alt, style, onLoad, ...props }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const placeholderStyle = {
    backgroundImage: `url(${toBlurUrl(src)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      style={isLoaded ? style : { ...placeholderStyle, ...style }}
      onLoad={event => {
        setIsLoaded(true);
        onLoad?.(event);
      }}
    />
  );
}

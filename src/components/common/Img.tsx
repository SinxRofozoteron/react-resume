'use client';
import type { StaticImageData } from 'next/image';
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type ImgProps = {
  src?: string;
  lowQualitySrc?: StaticImageData;
  highQualitySrc?: StaticImageData;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

// component can load either low or high quality img, depending screen resolution
// treshhold is 1920 X 1080 = 2073600px
export const Img = ({
  lowQualitySrc,
  highQualitySrc,
  ...passThroughProps
}: ImgProps) => {
  let imgSrc: StaticImageData | string;
  if (lowQualitySrc && highQualitySrc) {
    // Get screen resolution
    const w = window.screen.width * window.devicePixelRatio;
    const h = window.screen.height * window.devicePixelRatio;
    if (w * h < 2073600) {
      imgSrc = lowQualitySrc;
    } else {
      imgSrc = highQualitySrc;
    }
  } else if (passThroughProps.src) {
    imgSrc = passThroughProps.src;
  } else {
    throw new Error(
      'Need to provide either lowQualitySrc' +
        'and highQualitySrc parameters or src parameter.'
    );
  }

  return <img alt="" {...passThroughProps} src={imgSrc as string} />;
};

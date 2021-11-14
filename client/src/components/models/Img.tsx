import { FC, DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ImgProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src?: string;
    lowQualitySrc?: string;
    highQualitySrc?: string;
}

// component can load either low or high quality img, depending screen resolution
// treshhold is 1920 X 1080 = 2073600px
const Img: FC<ImgProps> = ({ lowQualitySrc, highQualitySrc, ...passThroughProps }) => {
    let imgSrc: string;
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
            "Need to provide either lowQualitySrc and highQualitySrc parameters or src parameter."
        )
    }
    return <img {...passThroughProps} src={imgSrc} />
}

export default Img;
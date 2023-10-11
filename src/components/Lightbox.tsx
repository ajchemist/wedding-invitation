import { ImageType } from 'types/app';
import Lightbox, { LightboxExternalProps, SlideImage } from "yet-another-react-lightbox";

interface UserLightboxProps extends Omit<LightboxExternalProps, 'slides'> {
    images: ImageType[]
}

const slideImages = (images: ImageType[]): SlideImage[] => images.map((image) => ({
    src: image.link.replace(/\.(jpg|jpeg|png)$/, '.webp'),
    width: image.width,
    height: image.height,
    alt: ''
}));

export const makeLightboxProps = ({ images, ...props }: UserLightboxProps) => {
    return {
        ...props,
        slides: slideImages(images)
    };
}

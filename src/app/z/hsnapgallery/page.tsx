import { fetchAlbumImages } from '@/integrations/Imgur';
import { ZBlockContainer, ZContainer } from '../layout';
import HSnapGallery from '@/components/HSnapGallery';

export default async function Page() {
    const images = await fetchAlbumImages({}, 'wRqi9Mk');

    return (
        <>
            <ZBlockContainer>
                <HSnapGallery images={images.data} />
            </ZBlockContainer>
        </>
    )
}
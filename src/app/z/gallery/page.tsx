
import { fetchAlbumImages } from '@/integrations/Imgur';
import { ZBlockContainer, ZContainer } from '../layout';
import { Gallery } from '@/components/Gallery';

export default async function Page() {
    const images = await fetchAlbumImages({}, 'uLfnMDZ');

    return (
        <>
            <ZBlockContainer>
                <Gallery images={images.data} />
            </ZBlockContainer>
        </>
    )
}
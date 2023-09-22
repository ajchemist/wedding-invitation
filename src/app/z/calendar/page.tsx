import { ZBlockContainer, ZContainer } from '../layout';
import { Calendar } from '@/components/Calendar';

export default function Page() {
    return (
        <>
            <ZBlockContainer>
                <Calendar dday={{year: 2023, month: 11, day: 11}} />
            </ZBlockContainer>
        </>
    )
}
export const TmapNaviUrl = (name: string, { lat, lng }: { lat: number, lng: number } ) => {
    return `http://www.tmap.co.kr/tmap2/mobile/route.jsp?name=${encodeURIComponent(name)}&lat=${lat}&lon=${lng}`;
}

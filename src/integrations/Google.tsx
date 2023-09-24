import Script from 'next/script';

export const GTagScript = ({ gtagId }: { gtagId: string }) => {
    return (
        <>
            <Script
                id="gtag-script"
                async={true} 
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}>
            </Script>
            <Script id="gtag-config-script">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', '${gtagId}');
                `}
            </Script>
        </>
    )
};
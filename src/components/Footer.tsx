export default function Footer() {
    return (
        <footer className={`w-full bg-[#1A3C34] text-[#fafafa]`}>
            <div className={`px-4 py-8 md:mx-12 text-[#8D9C98]`}>
                <p className={`text-xs`}>© 2023 alchemia, Inc. All Rights Reserved.</p>
                <hr className={`mt-4 border-top border-[#8D9C98]`} color="#8D9C98"></hr>
                <section className={`pt-4`}>
                    <p className={`p-0.5 text-xs mx-auto`}>designed by the groom @ Gwangju, 2023</p>
                    <p className={`font-light text-xs mx-auto opacity-70`}>with immense love for the bride.</p>
                </section>
            </div>
        </footer>
    )
}
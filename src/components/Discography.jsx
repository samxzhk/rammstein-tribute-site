import Album from "./Album"

const Discography = () =>
{
    const HERZELEID = "https://m.media-amazon.com/images/I/71DAbhAMsvL._UF1000,1000_QL80_.jpg";
    const SEHNSUCHT = "https://m.media-amazon.com/images/I/81gnPTo+hOL._UF1000,1000_QL80_.jpg";
    const MUTTER = "https://m.media-amazon.com/images/I/41mDgOoCmsL._UF1000,1000_QL80_.jpg";
    const REISE_REISE = "https://m.media-amazon.com/images/I/41aZRSuXXJL._UF1000,1000_QL80_.jpg";
    const ROSENROT = "https://m.media-amazon.com/images/I/61mUf0U2YAL._UF1000,1000_QL80_.jpg";
    const LIEBE = "https://m.media-amazon.com/images/I/71P-J2fAQQL._UF1000,1000_QL80_.jpg";
    const RAMMSTEIN = "https://m.media-amazon.com/images/I/31sUw4+cc+L._UF1000,1000_QL80_.jpg";
    const ZEIT = "https://upload.wikimedia.org/wikipedia/pt/8/86/Rst-Zeit-album.png";
    return <section className="mt-10">
        <h2 className="relative font-rod-chenko text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    DISCOGRAPHY
        </h2>
        <section className="mt-5 md:mt-7 sm:mt-6 lg:mt-10 grid grid-cols-[repeat(auto-fit,_minmax(245px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(345px,_1fr))] gap-2">
            <Album title={"Herzeleid"} source={HERZELEID}/>
            <Album title={"Sehnsucht"} source={SEHNSUCHT}/>
            <Album title={"Mutter"} source={MUTTER}/>
            <Album title={"Reise Reise"} source={REISE_REISE}/>
            <Album title={"Rosenrot"} source={ROSENROT}/>
            <Album title={"Liebe ist fur alle da"} source={LIEBE}/>
            <Album title={"Rammstein"} source={RAMMSTEIN}/>
            <Album title={"Zeit"} source={ZEIT}/>
        </section>
    </section>
}

export default Discography
const Gallery = () =>
{
    return <section className="gallery mt-10">
        <h2 className="relative font-rod-chenko text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">GALLERY</h2>
        <div className="lg:mt-10 mt-4 md:mt-7 sm:mt-6 w-[80%] mx-auto  max-h-[300px] overflow-x-scroll overflow-y-hidden flex md:w-[100%] md:max-w-[700px] md:max-h-[unset] md:grid md:overflow-x-hidden md:grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))]">
            <article className="shrink-0 grow w-[100%] h-[100%] md:h-auto flex aspect-[1/1] md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%]" src="https://getwallpapers.com/wallpaper/full/5/8/6/663175.jpg" alt="rammstein" />
            </article>
             <article className="shrink-0 grow aspect-[1/1]  w-[100%] h-[100%] md:h-auto  md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%]" src="https://www.eventworld.co/blob/images/pg/rammstein_aa87ee0ad8_opgh.jpg" alt="rammstein" />
            </article>
            <article className="shrink-0 grow aspect-[1/1]  w-[100%] h-[100%] md:h-auto  md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%]" src="https://w0.peakpx.com/wallpaper/882/909/HD-wallpaper-100-rammstein-rammstein-feuer-frei-flame-lindemann-till.jpg" alt="" />
            </article>
            <article className="shrink-0 grow aspect-[1/1] md:h-auto  md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%]" src="https://c4.wallpaperflare.com/wallpaper/126/600/846/concert-concerts-fire-heavy-wallpaper-preview.jpg" alt="rammstein" />
            </article>
            <article className="shrink-0 grow aspect-[1/1] md:h-auto  md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%] md:h-auto" src="https://c4.wallpaperflare.com/wallpaper/486/969/319/rammstein-till-lindemann-band-wallpaper-preview.jpg" alt="rammstein"/>
            </article>
            <article className="shrink-0 grow aspect-[1/1] md:h-auto  md:aspect-[unset]">
                <img className="object-cover block w-[100%] h-[100%]" src="https://e0.pxfuel.com/wallpapers/376/735/desktop-wallpaper-till-lindemann-high-quality.jpg" alt="rammstein" />
            </article>
        </div>

    </section>
}

export default Gallery;

/**
 * 
 * 
 * 
 * md:grid md:grid-flow-dense md:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]
 */
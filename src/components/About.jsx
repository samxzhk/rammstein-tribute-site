const About = () =>
{
    return (
        <>
            <section className="mt-10">
                <h2 className="relative font-rod-chenko text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    ABOUT THE BAND
                </h2>
                <div className="md:grid md:grid-cols-2 md:justify-items-start md:grid-rows-[70px_minmax(200px,_1fr)] md:gap-x-8 lg:grid-rows-[80px_minmax(500px,_1fr)] lg:mt-10 mt-4 md:mt-7 sm:mt-6">
                    <p className="text-gray-300 leading-relaxed max-w-[100%] sm:max-w-[unset] text-lg font-gt-america-regular mb-10 md:mb-0 md:col-start-2 md:col-end-3 md:h-min">
                    Rammstein is a German <a className="cursor-pointer text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Neue_Deutsche_H%C3%A4rte">Neue Deutsche Härte</a> band formed in Berlin in 1994
                    </p>
                    <picture className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:row-span-full lg:row-span-ful">
                        <source media="(max-width: 700px)" srcSet="https://64.media.tumblr.com/aa2167d51e3c49c4b9d2cde16f831e7f/tumblr_inline_pkmskzPVsq1s2nw7z_500.png" alt="rammstein members"/>
                        <source media="(min-width: 700px) and (max-width: 900px)" srcSet="https://c4.wallpaperflare.com/wallpaper/930/299/783/rammstein-wallpaper-preview.jpg"/>
                        <source media="(min-width: 900px)" srcSet="https://cutewallpaper.org/23/rammstein-wallpaper-hd/647328658.jpg"/>
                        <img className="block max-md:w-[100%] h-auto md:h-[100%] object-cover md:row-start-1 md:row-end-3 md:row-span-full lg:row-span-full" src="https://64.media.tumblr.com/aa2167d51e3c49c4b9d2cde16f831e7f/tumblr_inline_pkmskzPVsq1s2nw7z_500.png" alt="rammstein members"/>
                    </picture>
                    <p className="text-gray-300 leading-relaxe max-w-[100%] sm:max-w-[unset] text-lg font-gt-america-regular mt-10 text-start md:col-start-2 md:col-end-2 md:mt-0">
                    The band's lineup—consisting of lead vocalist <a className="cursor_pointer text-red-500" href="https://en.wikipedia.org/wiki/Till_Lindemann" target="_blank">Till Lindemann</a>, lead guitarist <a className="cursor_pointer text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Richard_Kruspe">Richard Kruspe</a>, rhythm guitarist<a className="cursor_pointer text-red-500"  href="https://en.wikipedia.org/wiki/Paul_Landers" target="_blank"> Paul Landers</a>, bassist <a className="cursor_pointer text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Oliver_Riedel">Oliver Riedel</a>, drummer <a className="cursor_pointer text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Christoph_Schneider">Christoph Schneider</a>, and keyboardist <a className="cursor_pointer text-red-500" target="_blank" href="https://en.wikipedia.org/wiki/Christian_Lorenz">Christian "Flake" Lorenz—has</a> remained unchanged throughout their history, along with their approach to songwriting, which consists of Lindemann writing and singing the lyrics over instrumental pieces the rest of the band has completed beforehand.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;
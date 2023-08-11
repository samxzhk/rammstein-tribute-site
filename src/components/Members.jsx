const Members = () =>
{
    return (
        <section className=''>
            <h2 className="font-rod-chenko text-3xl mt-10 text-white sm:text-5xl md:text-6xl lg:text-7xl">THE MEMBERS</h2>
            <div className="mt-5 md:mt-7 sm:mt-6 lg:mt-10 grid gap-y-10 lg:gap-y-20">
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 ">
                    <picture>
                        <source media="(max-width: 760px)" srcSet="https://roadie-metal.com/wp-content/uploads/2021/05/Till-Lindemann.jpg"/>
                        <source media="(min-width: 760px)" srcSet="https://townsquare.media/site/366/files/2022/03/attachment-Till-Lindemann.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://roadie-metal.com/wp-content/uploads/2021/05/Till-Lindemann.jpg" alt="till lindemann"/>
                    </picture>
                    <div className="mt-2 md:px-5 flex flex-col justify-center">
                        <div className="md:flex flex-col">
                            <h3 className="text-xl lg:order-1 text-white font-gt-america-regular md:mb-5 lg:text-3xl">Till Lindemann</h3>
                            <p className="text-red-500 font-gt-america-regular">Lead Vocalist</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Till Lindemann is a German singer and songwriter. 
                        He is the lead vocalist and lyricist of Neue Deutsche Härte band Rammstein 
                        and solo project Lindemann
                        </p>
                    </div>
                </article>
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 gap-x-5">
                    <picture className="order-1">
                        <source media="(max-width: 760px)" srcSet="https://1.bp.blogspot.com/_WWjNxAIvxlU/TCPl6ittI7I/AAAAAAAAAKw/-R2oy8pgpIM/s1600/31172_128318747186287_100000244870835_275196_6323483_n.jpg"/>
                        <source media="(min-width: 760px)" srcSet="https://i0.wp.com/metalwani.com/wp-content/uploads/2021/11/RichardKruspe.jpg?fit=856%2C639&ssl=1"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://i0.wp.com/metalwani.com/wp-content/uploads/2021/11/RichardKruspe.jpg?fit=856%2C639&ssl=1" alt="Richard Kruspe"/>
                    </picture>
                    <div className="mt-2">
                        <div className="flex flex-col">
                            <h3 className="lg:order-1 text-xl text-white font-gt-america-regular md:mb-5 lg:text-3xl">Richard Kruspe</h3>
                            <p className="text-red-500 font-gt-america-regular">Lead Guitarist</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Richard Kruspe is a German musician. He is the lead guitarist of the Neue Deutsche Härte band Rammstein, as well as the lead singer and lead guitarist of the US-based industrial metal band Emigrate.
                        </p>
                    </div>
                </article>
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 gap-x-5">
                    <picture >
                        <source media="(max-width: 760px)" srcSet="https://pbs.twimg.com/media/EKT2AMhW4AABR_O.jpg"/>
                        <source media="(min-width: 760px)" srcSet="https://asc-images.forward-publishing.io/2023/03/20/23ae4365-d1d4-4264-8eb5-d6d7e7ce3da3.jpeg?rect=0%2C201%2C1920%2C1080&w=1024&auto=format"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://pbs.twimg.com/media/EKT2AMhW4AABR_O.jpg" alt="Christian Lorenz"/>
                    </picture>
                    <div className="mt-2">
                        <div className="md:flex flex-col">
                            <h3 className="text-xl lg:order-1 text-white font-gt-america-regular md:mb-5 lg:text-3xl">Christian Lorenz</h3>
                            <p className="text-red-500 font-gt-america-regular">Keyboardist</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Christian "Flake" Lorenz is a German musician. He is best known as the keyboardist in Neue Deutsche Härte band Rammstein, as well as the main composer of the band along with guitarist Richard Kruspe. He was also a member of the East German punk band Feeling B
                        </p>
                    </div>
                </article>
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 gap-x-5">
                    <picture className="order-1">
                        <source media="(max-width: 620px)" srcSet="https://pbs.twimg.com/media/EOvvYicWAAUmkNs.jpg"/>
                        <source media="(min-width: 760px)" srcSet="https://www.drumheads.de/images/Artikel/Interviews-Storys/csm_iv_rammstein_a_64bf96030f.webp"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://pbs.twimg.com/media/EOvvYicWAAUmkNs.jpg" alt="Christoph Schneider"/>
                    </picture>
                    <div className="mt-2">
                        <div className="md:flex flex-col">
                            <h3 className="lg:order-1 text-xl text-white font-gt-america-regular md:mb-5 lg:text-3xl">Christoph Schneider</h3>
                            <p className="text-red-500 font-gt-america-regular">Drummer</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Christoph Schneider is a German musician, best known as the drummer of the Neue Deutsche Härte band Rammstein
                        </p>
                    </div>
                </article>
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 gap-x-5">
                    <picture>
                        <source media="(max-width: 760px)" srcSet="https://external-preview.redd.it/-vSAZIW6iS4YMyy066kseHEO4oAcfiVqPSJp-PiXa4w.jpg?auto=webp&s=03a0bf5fefbcf900ebc7092eb4232f41b60cea4b"/>
                        <source media="(min-width: 760px)" srcSet="https://live.staticflickr.com/8435/7980581858_aa95746b51_c.jpg"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://external-preview.redd.it/-vSAZIW6iS4YMyy066kseHEO4oAcfiVqPSJp-PiXa4w.jpg?auto=webp&s=03a0bf5fefbcf900ebc7092eb4232f41b60cea4b" alt="Oliver Riedel"/>
                    </picture>
                    <div className="mt-2">
                        <div className="md:flex flex-col">
                            <h3 className="lg:order-1 text-xl text-white font-gt-america-regular md:mb-5 lg:text-3xl">Oliver Riedel</h3>
                            <p className="text-red-500 font-gt-america-regular">Bassist</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Oliver "Ollie" Riedel is a German musician, best known as the bassist for Neue Deutsche Härte band Rammstein.
                        </p>
                    </div>
                </article>
                <article className="w-[80%] mx-auto max-w-[800px] md:grid grid-cols-2 gap-x-5">
                    <picture className="order-1">
                        <source media="(max-width: 760px)" srcSet="https://cdn.mos.cms.futurecdn.net/sX8xdLtoxHaKeY3DXXCgpH.jpg"/>
                        <source media="(min-width: 760px)" srcSet="https://www.laut.de/Rammstein/Fotogalerien/Die-Lanxess-Arena-brennt!-4405/rammstein-lanxess-arena-brennt-paul-landers-101160.JPG"/>
                        <img className="md:block md:h-[100%] object-cover" src="https://cdn.mos.cms.futurecdn.net/sX8xdLtoxHaKeY3DXXCgpH.jpg" alt="Paul Landers"/>
                    </picture>
                    <div className="mt-2">
                        <div>
                            <h3 className="lg:order-1 text-xl text-white font-gt-america-regular md:mb-5 lg:text-3xl">Paul Landers</h3>
                            <p className="text-red-500 font-gt-america-regular">Rhythm Guitarist</p>
                        </div>
                        <p className="text-gray-300 font-gt-america-regular leading-relaxed mt-1 lg:text-xl">
                        Paul Landers is a German musician, notable as the rhythm guitarist for the Neue Deutsche Härte band Rammstein, and the punk rock band Feeling B
                        </p>
                    </div>
                </article>
                
            </div>
        </section>
    )
}

export default Members;
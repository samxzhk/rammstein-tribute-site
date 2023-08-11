const Album = ({title, source}) =>
{
    return (
        <article className="group w-[80%] mx-auto relative overflow-hidden">
            <picture className="group">
                <img className="block object-cover w-[100%] h-auto" src={`${source}`} alt={`${title}`}/>
            </picture>
            <div className="absolute w-[100%] h-[100%] bottom-[-100%] left-0 bg-black/50 ease-in-out duration-500 group-hover:bottom-0 flex justify-center items-center">
                <h3 className="font-gt-america-regular text-white text-2xl font-bold">{title}</h3>
            </div>
        </article>
    )
}

export default Album
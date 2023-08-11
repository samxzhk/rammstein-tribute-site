const Video = ({videoSrc}) =>
{
    return (
        <>
          <div className='relative bg-blue-500 w-[100%] min-h-[350px] sm:min-h-[400px] grid place-items-center lg:h-[95vh]'>
            <div className='absolute z-10'>
              <svg className="w-52 h-52 md:w-56 md:h-56 lg:w-96 lg:h-96" viewBox="0 0 1000 536" xmlns="http://www.w3.org/2000/svg">
                <g fill="#ffffff" transform="translate(310,18)">
                <path d="M10,200 v80 h90 v-82.5 h8.5 l30,82.5 h88 l-28,-77 v-103 h-188.5 v80" fill="none" stroke="#ffffff" stroke-width="20" stroke-dasharray="none"/>
                <path d="M90,70 v-70 h90 v20 h-70 v50 h-20 Z"/>
                <path d="M200,0 h90 v90 h90 v90 h-20 v-70 h-90 v-90 h-70 v-20 Z"/>
                <path d="M360,200 h20 v90 h-90 v90 h-90 v-20 h70 v-90 h90 v-70 Z"/>
                <path d="M180,360 v20 h-90 v-70 h20 v50 h70 Z"/>
              </g>
              <g fill="#ffffff" transform="translate(18,434)">
                <path d="M0,0 v84 h41 v-38.5 h5 l14 38.5 h41 l-13 -36 v-48 h-88 Z"/>
                <path d="M107,0 v84 h41 v-44 l16 44 h41 l-30.5 -84 h-67.5 Z"/>
                <path d="M211,0 v84 h41 v-44 l16 44 h41 l16 -44 v44 h41 v-84 h-41 l-23.25 64 l-23.25 -64 h-67.5 Z"/>
                <path d="M372,0 v84 h41 v-44 l16 44 h41 l16 -44 v44 h41 v-84 h-41 l-23.25 64 l-23.25 -64 h-67.5 Z"/>
                <path d="M533,0 v34 l59 16 h-59 v34 h92 v-34 l-59 -16 h59 v-34 h-92 Z"/>
                <path d="M631,22 v40 h22 v22 h40 v-22 h22 v-40 h-22 v-22 h-40 v22 h-22 Z"/>
                <path d="M721,0 v84 h92 v-32 h-52 v-6.5 h22 l30 -7 h-52 v-6.5 h52 v-32 h-92 Z"/>
                <path d="M819,0 v84 h41 v-84 h-41 Z"/>
                <path d="M866,0 v84 h41 v-44 l16 44 h41 v-84 h-11 v53.5 l-19.5 -53.5 h-67.5 Z"/>
              </g></svg>
            </div>
            <video className='w-[100%] top-0 left-0 object-cover min-h-[100%] absolute max-h-[100%]' autoPlay muted loop>
              <source className='absolute' src={`${videoSrc}`}/>
            </video>        
          </div>
        </>);
}

export default Video;
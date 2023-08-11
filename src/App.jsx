import { useState } from 'react'
import './App.css'
import Video from "./components/Video"
import About from "./components/About"

import myVideo from "./assets/video/edit-bg-video.webm";
import Members from './components/Members';

function App() {

 return (
  <>
    <Video videoSrc={myVideo}/>
    <main className='max-w-[1124px] mx-auto p-3 sm:p-5 md:p-7 lg:p-9'>
      <About/>
      <Members/> 
    </main>
  </>
 );
}

export default App

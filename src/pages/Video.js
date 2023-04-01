import React, {useRef, useState} from "react";
import VideoFooter from "./Components/footer/VideoFooter";
import './video.css';
import VideoSidebar from "./Components/sidebar/videoSidebar";

function Video({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setplay] = useState(false)

    function hamddleStart() {
        if (play){
            videoRef.current.pause()
            setplay(false)
        } else {
            videoRef.current.play()
            setplay(true)
        }
    }
    return(
        <div className='video'>
            <video
                className='video_player'
                ref={videoRef}
                onClick={hamddleStart}
                loop
                src={url}>
            </video>
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}
export default Video
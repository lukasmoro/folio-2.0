import React, { useState, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web'
import './AudioPlayer.css';
import BehaviourClick from './BehaviourClick.jsx';

const AudioPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
        reverse: !isPlaying,
    }))

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            api.start({
                from: {
                    opacity: 0,
                    y: 0,
                },
                to: {
                    opacity: 1,
                    y: 50,
                },
            });
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            api.start({
                from: {
                    opacity: 1,
                    y: 50,
                },
                to: {
                    opacity: 0,
                    y: 0,
                },
            });
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = secs % 60;
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className='audio-player'>
            <div className='player-container'>
                <audio ref={audioPlayer} src={props.src} preload="metadata" onLoadedMetadata={onLoadedMetadata} ></audio>
                <div className='button'>
                    <BehaviourClick><button className='play-pause' onClick={() => { togglePlayPause(); props.handleClick(); }} >{isPlaying ? <p>Pause</p> : <p>Play</p>}</button></BehaviourClick>
                </div>
                <animated.div style={{ ...springs }} className='progress'>
                    <div className='current-time'>{calculateTime(currentTime)}</div>
                    <div><input className='progress-bar' type="range" defaultValue="0" ref={progressBar} onChange={changeRange} /></div>
                    <div className='duration' >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                </animated.div>
            </div>
        </div >
    )
}

export default AudioPlayer;
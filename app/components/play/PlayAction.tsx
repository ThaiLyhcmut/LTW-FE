"use client"
import { FaPause, FaPlay } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector<HTMLElement>(".play-audio");
    if (!elementPlayAudio) return;
  
    const elementAudio = elementPlayAudio.querySelector<HTMLAudioElement>(".inner-audio");
    const elementPlay = elementPlayAudio.querySelector<HTMLElement>(".box-button-play");
  
    if (!elementPlay || !elementAudio) return;
  
    if (!elementAudio.paused) {
      elementPlay.classList.remove("play");
      elementAudio.pause();
    } else {
      elementPlay.classList.add("play");
      elementAudio.play();
    }
  };

  const handleNextPrev = (action: string) => {
    const elementPlayAudio = document.querySelector<HTMLElement>(".play-audio")
    let idSongCurrent
    if (elementPlayAudio){
      idSongCurrent = elementPlayAudio.getAttribute("song-id")
    }
    const elementSongCurrent = document.querySelector(`[song-list] [song-id='${idSongCurrent}']`)
    if(elementSongCurrent) {
      switch (action) {
        case "next":
          const elementSongNext = elementSongCurrent.nextElementSibling;
          if(elementSongNext){
            const buttonPlay = elementSongNext.querySelector<HTMLButtonElement>("button[button-play]");
            if (buttonPlay){
              buttonPlay.click()
            }
          }
          break;
        default:
          const elementSongPrev = elementSongCurrent.previousElementSibling;
          if(elementSongPrev){
            const buttonPlay = elementSongPrev.querySelector<HTMLButtonElement>("button[button-play]");
            if (buttonPlay){
              buttonPlay.click()
            }
          }
          break;
      }
    }
  }
  return (
    <>
      <div className="flex items-center justify-center text-[16px]">
        <button className="" onClick={() => handleNextPrev("prev")}>
          <FaBackwardStep />
        </button>
        <button className="w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play" onClick={handlePlay}>
          <FaPlay className="inner-item-play"/>
          <FaPause className="inner-item-pause"/>
        </button>
        <button className="" onClick={() => handleNextPrev("next")}>
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}

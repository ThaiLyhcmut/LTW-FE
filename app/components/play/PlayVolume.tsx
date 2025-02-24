"use client"

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementVolumeTotal = event.target; // Đây là một HTMLInputElement
    const elementPlayAudio = document.querySelector<HTMLElement>(".play-audio");
    if (!elementPlayAudio) return;

    const elementAudio = elementPlayAudio.querySelector<HTMLAudioElement>(".inner-audio");
    if (elementAudio) {
        elementAudio.volume = parseFloat(elementVolumeTotal.value) / 100;
    }

    const elementVolumeCurrent = document.querySelector<HTMLElement>(".inner-current-volume");
    if (elementVolumeCurrent) {
        elementVolumeCurrent.style.width = `${elementVolumeTotal.value}%`;
    }
};

  return (
    <>
      <div className="flex items-end box-volume sm:block hidden">
        <button className="text-[16px] inner-button-volume">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-primary w-[80%] h-[4px] rounded-[50px] absolute top-[13px] left-0 inner-current-volume"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={80}
            className=" w-full rounded-[50px] bg-[#FFFFFF1A] h-[4px] appearance-none cursor-pointer range-sm inner-total-volume"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

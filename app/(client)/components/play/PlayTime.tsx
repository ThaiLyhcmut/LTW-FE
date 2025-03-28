"use client"
export default function PlayTime() {
  const handleChange = (event: any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementPlayTimeTotal = elementPlayAudio.querySelector(".inner-total")
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    // const playtime = elementPlayAudio.querySelector(".play-time")
    
    elementAudio.currentTime = parseFloat(elementPlayTimeTotal.value)
  }
  return (
    <>
      <div className="mt-[11px] relative box-play-time">
        <div className="bg-[#00ADEF] w-[0] h-[4px] rounded-[50px] absolute top-[11px] left-0 inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className=" w-full rounded-[50px] bg-[#FFFFFF0A] h-[8px] appearance-none cursor-pointer range-sm inner-total"
          onChange={handleChange}
        />
        {/* <div className="play-time"></div> */}
      </div>
    </>
  );
}

import React from 'react'
import DL from '../assets/Images/Achievements/DL.jpg'
import ArrowDown from '../assets/home/arrow-down.svg'
function Achievement() {
  return (
    <>
      <section className='achievment-section'>
        <span className='achivement-span'>
            <button className=''>
                See More
                <img src={ArrowDown} alt="" />
            </button>
        </span>
        <article>
            <label className='lg:text-3xl 2xl uppercase font-semibold border-b-4 m-5 border-prime-pink'>Achievements</label>
        </article>
        <div className='achievment-layout'>
            <div className='achievment-container'>
                <span>
                    <img src={DL} alt="" />
                </span>
                <article>
                    <label>Dean's Listers</label>
                    <p className='lg:text-sm text-xs'>Dean’s Lister, Southwestern University PHINMA — Academic Year 2024–2025
Awarded for outstanding academic performance and commitment to excellence."</p>
                </article>
            </div>
        </div>
      </section>
    </>
  )
}

export default Achievement

import React from 'react'
import cert from '../../assets/home/cert.png'

function Certificates() {
  return (
    <>
      <section className='cert-section'>
        <article className='flex justify-center items-center text-2xl font-semibold '>
          <header className='border-b-4 border-prime-pink'>Certificates</header>
        </article>
        <div className='cert-container'>
          <div className='cert-card'>
            <figure className='flex justify-center embed'>
              <embed src="src/assets/certificates/Ivan Dale Clarion_React Development.pdf" frameborder="0" className='cursor-none pointer-none:'/>
            </figure>
            <article>
              <header className='font-semibold capitalize'>React Development Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>
          
          <div className='cert-card'>
            <figure className='flex justify-center embed'>
              <embed src="src/assets/certificates/Ivan Dale Clarion_React Development.pdf" frameborder="0"/>
            </figure>
            <article>
              <header className='font-semibold capitalize'>React Development Certification Course</header>
              <span className='flex gap-2 text-xs text-prime-gray'>
              <label>From:</label>
              <p>Programmer Hub</p>
              </span>
            </article>
          </div>

        </div>
      </section>
    </>
  )
}

export default Certificates

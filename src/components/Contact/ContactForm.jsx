import React from 'react'
import { CircleAlert } from 'lucide-react';
import { Mail } from 'lucide-react';
function ContactForm() {
  return (
    <>
      <section className='text-white p-5 list-none flex flex-col items-center justify-center'>
        <div className='contact-form-container'>
            <CircleAlert className='text-prime-pink size-10'/>
        <article className='text-center'>
            
            <header className='text-xl font-semibold text-prime-pink'>This Feature is not yet developed</header>
            <summary>In a meantime you can contact me through gmail or socials.</summary>
            <span className='flex items-center justify-center gap-2 text-sm my-3'>
            <Mail className=' size-5'/>
            <label>clarion.ivan.dale@gmail.com</label>
            </span>
        </article>
        </div>
      </section>
    </>
  )
}

export default ContactForm

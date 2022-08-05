import React from 'react'

export default function Contact() {
return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center px-4 pt-20 '>
        <form method='POST' action="https://getform.io/f/0c29e487-4c17-40cf-8ea6-27bb7619603d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#457b9d] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - shajwannamiqsalh@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#457b9d] hover:border-[#457b9d] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
      
    </div>
  )
}

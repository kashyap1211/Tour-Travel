import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className='container'>
                
                <h1 className='my-8 border-l-8 border-blue-600/50 py-2  text-3xl font-bold pl-2 text-gray-60'data-aos="fade-right" data-aos-duration="1000">Location to Visit</h1>
                <div data-aos="zoom-in" data-aos-duration="2000" className='rounded-xl border-2 border-blue-500'>
                    <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.340809840306!2d72.5163879356613!3d23.071055164391232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d004c769aa1%3A0x65a5ca569feb4220!2sShukan%20Mall!5e0!3m2!1sen!2sin!4v1740485994074!5m2!1sen!2sin"width="100%" allowFullScreen="" referrerPolicy='no-referrer-when-downgrade' height="360" loading='lazy' frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location

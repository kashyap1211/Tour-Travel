// import React from 'react';
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import backgroundImg from '../../public/form-background.png'
// const Popup = ({orderPopup , setOrderPopup}) => {
//   return (
//   <>{orderPopup && <div>
//         <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-800 p-4 rounded-md w-[300px] bg-gray-100'>
//             {/* header  */}
            
//             <div className='flex items-center justify-between '>
//                 <div>
//                     <h1 className='font-semibold'>Booking Your Trip</h1>
//                 </div>
//                 <div>
//                     <IoMdCloseCircleOutline  className='text-2xl cursor-pointer' onClick={()=>setOrderPopup(false)}/>
//                 </div>
//             </div>
//             {/* body  */}
//             <div className='mt-4'>
//                 <input type="text" placeholder='Enter Your Name' className='w-full rounded-full border border-blue-800  px-2 py-1 mb-4' />
//                 <input type="text" placeholder='Enter Your Email' className='w-full rounded-full border border-blue-800  px-2 py-1 mb-4' />
//                 <input type="text" placeholder='Enter Your Phone Number' className='w-full rounded-full border border-blue-800  px-2 py-1 mb-4' />
//                 <div className='text-center'>
//                     <button className='bg-linear-to-r/increasing from-indigo-500 to-teal-400 text-white px-3 py-1 rounded-full hover:scale-110 cursor-pointer'>Inquiry Now</button>
//                 </div>
//             </div>
//         </div>
    
//      </div>}</>  
//   )
// };

// export default Popup
import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import backgroundImg from '../../public/form-background.png';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div className="text-blue-800 p-4 rounded-md w-[300px] bg-gray-100 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Inquiry Form</h1>
              <IoMdCloseCircleOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div className="mt-4">
              <input type="text" placeholder="Enter Your Name" className="w-full rounded-full border border-blue-800 px-2 py-1 mb-4" />
              <input type="email" placeholder="Enter Your Email" className="w-full rounded-full border border-blue-800 px-2 py-1 mb-4" />
              <input type="tel" placeholder="Enter Your Phone Number" className="w-full rounded-full border border-blue-800 px-2 py-1 mb-4" />
              <div className="text-center">
                <button className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-3 py-1 rounded-full hover:scale-110 transition cursor-pointer">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 z-50 ">
//       <div className="flex items-center justify-center min-h-screen  px-8 ">
//         <div className="fixed inset-0 bg-black opacity-50 " onClick={onClose}></div>
//         <div className="relative bg-white rounded-md shadow-lg px-3  w-[350px]">
//           <button className="absolute top-1 right-3 text-gray-500" onClick={onClose}>
//             &times;
//           </button>
//           {children}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevents click inside the modal from closing it
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="flex items-center justify-center min-h-screen px-8">
        {/* Modal Overlay */}
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        {/* Modal Content */}
        <div
          className="relative bg-white rounded-md shadow-lg px-3 w-[350px]"
          onClick={handleModalContentClick} // Prevent click inside modal from closing it
        >
          <button className="absolute top-1 right-3 text-gray-500" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

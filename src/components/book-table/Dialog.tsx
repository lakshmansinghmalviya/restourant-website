import React from "react";
import BookTable from "../BookTable";

type ModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  onClose,
  children,
}) => {

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-10 overflow-y-auto w-full"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center w-full">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
          {/* Body */}
          <div className="bg-white">
            <div className="sm:flex sm:items-start max-h-[450px] overflow-y-auto p-1 rounded-lg">  
                  <BookTable
                    onClose={onClose}
                  />  
            </div>
          </div>

          {/* Footer */}
          {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {children}
            <button
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

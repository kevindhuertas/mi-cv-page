import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-2xl relative">
        <button
          className="text-gray-500 dark:text-gray-300 absolute top-3 right-3"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          {title}
        </h2>

        {children}
      </div>
    </div>
  )
}

export default Modal

import React, { useState, useEffect, Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const revealVariants = {
  hidden: {
    clipPath: `circle(0% at 50% 50%)`,
    // No necesitamos definir la transición aquí si es la misma que 'visible'
    // Framer Motion usará la transición del estado al que se anima (visible)
    // o podemos definirla explícitamente en 'exit' si queremos una salida diferente.
  },
  visible: {
    clipPath: `circle(150% at 50% 50%)`,
    // Aquí definimos la transición para la animación HACIA este estado (visible)
    transition: {
      type: 'tween', //  'spring' o 'tween'
      duration: 0.5,
      ease: 'easeInOut', // "easeOut", "linear", [0.25, 0.1, 0.25, 1.0])
    },
  },
  // Opcional: Definir explícitamente la transición de salida si quieres que sea diferente
   exit: {
       clipPath: `circle(0% at 50% 50%)`,
       transition: {
           type: 'tween',
           duration: 0.4,
           ease: 'easeInOut',
       }
   }
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  useEffect(() => {
    if (isOpen) {
      setModalContent(children);
    }
  }, [isOpen, children]);

  return (
    <AnimatePresence
      initial={false}
      mode='wait'
      onExitComplete={() => setModalContent(null)}
    >
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          className="relative z-50"
          open={isOpen}
          onClose={onClose}
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} // Puedes usar ease aquí también
          />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
               <Dialog.Panel
                 className={`
                    bg-transparent rounded-xl
                    w-full sm:w-11/12 sm:max-w-4xl md:max-w-5xl lg:max-w-6xl
                    max-h-[90vh] flex flex-col text-left align-middle
                 `}
               >
                 <motion.div
                   className="bg-white dark:bg-gray-900 rounded-[40px] w-full h-full flex flex-col overflow-hidden"
                   variants={revealVariants}
                   initial="hidden"
                   animate="visible"
                   exit="exit" 
                 >
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                        <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-800 dark:text-gray-200">
                           {title}
                        </Dialog.Title>
                        <button>
                           <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="p-4 md:p-6 overflow-y-auto flex-grow">
                        {modalContent}
                    </div>
                 </motion.div>
               </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
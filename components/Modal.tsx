import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}
const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="bg-gray-50 rounded-lg ">
            <div className="min-h-screen px-4 text-center transform -translate-y-full">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                </Transition.Child>
                <span className="inline-block h-screen align-middle" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 text-gray-900 shadow-xl rounded-2xl">
                        {children}
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition>
);

export default Modal;

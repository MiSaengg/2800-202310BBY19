import Image from 'next/image';
import Button from './../button/Button'

const Modal = ({ }) => {
  return (
    // Insert "hidden" in the className 
    <div tabindex="-1" aria-hidden="true" className="fixed top-15 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full">
        <div className="relative max-w-full max-h-full">
            
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-mono text-gray-900 dark:text-white">
                        Title
                    </h3>
                </div>

                <div className="p-6 space-y-6">
                    <p className="text-base font-mono text-gray-700 dark:text-gray-400">
                    Continue the story</p>
                </div>

                <form className="mx-5">
                    <label for="text-input" className="block mb-3 text-md font-mono text-gray-900 dark:text-white">
                        <textarea id="text-input" rows="15" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </label>
                </form>

                <div className="flex items-stretch justify-between px-5 pt-1 pb-3 border-gray-200 rounded-b dark:border-gray-600">                   
                    < Button text="AI Check" />
                    < Button text="AI Generate" />
                    < Button text="Text-to-Speech" />

                    < Button text="Font Size" />
                    < Button text="Translate" />     

                </div>
                <div className="flex justify-end border-t p-5">
                    < Button text="Create" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;
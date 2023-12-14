import React, { useState, Fragment } from 'react';
import { parse } from 'csv-parse';
import { HiCloudArrowDown } from 'react-icons/hi2';
import { Dialog, Transition } from '@headlessui/react';
import { Text, Title } from '@tremor/react';

const Export = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headers = [
    { label: 'First Column', key: 'first' },
    { label: 'Second Column', key: 'second' },
    // adicione mais cabeçalhos conforme necessário
  ];

  const handleExport = () => {
    parse(data, { columns: headers }, (err, output) => {
      if (err) {
        // Trate o erro aqui
        console.error(err);
      } else {
        // Aqui você tem o CSV em 'output', você pode agora criar um Blob e um URL para download
        const blob = new Blob([output], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.csv';
        link.click();
        setIsOpen(false);
      }
    });
  };

  return (
    <div>
      <HiCloudArrowDown className="w-12 h-12 text-blue-400 cursor-pointer" onClick={() => setIsOpen(true)} />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as={Title} className="text-lg font-medium leading-6 text-gray-900">
                    Exportar CSV
                  </Dialog.Title>
                  <div className="flex items-center justify-center h-64 border-2 border-gray-200 border-dashed rounded-md">
                    <div className="text-center">
                      <HiCloudArrowDown className="w-12 h-12 mx-auto text-gray-400" />
                      <Text className="mt-2 text-sm text-gray-600">Clique no botão abaixo para exportar os dados</Text>
                      <button onClick={handleExport} className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                        Exportar
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Export;
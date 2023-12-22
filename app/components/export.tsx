import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { HiOutlineCloudArrowDown } from "react-icons/hi2";
import { Card, Flex, Icon, Metric, Text, Title } from "@tremor/react";

const createCsvBlob = async (data: any[], headers: string[]) => {
  let csv = headers.join(',') + '\n';
  data.forEach((row: {[key: string]: any}) => {
    csv += headers.map((header: string) => row[header]).join(',') + '\n';
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  return blob;
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
};

const Export = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headers = ['first', 'second']; // cabeçalhos como array de strings

  const handleExport = async () => {
    try {
      const response = await axios.get('/api/products');
      const data = response.data;
      const blob = await createCsvBlob(data, headers);
      downloadBlob(blob, 'data.csv');
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Icon icon={HiOutlineCloudArrowDown } variant="outlined" tooltip="Exportar dados" size="lg" onClick={() => setIsOpen(true)} />
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
                    <HiOutlineCloudArrowDown className="w-12 h-12 mx-auto text-gray-400" />
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
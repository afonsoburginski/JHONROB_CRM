'use client'
import React, { useCallback, useState, Fragment } from 'react';
import { useDropzone } from 'react-dropzone';
import { Dialog, Transition } from '@headlessui/react';
import { HiOutlineCloudArrowUp  } from "react-icons/hi2";
import { Card, Flex, Icon, Metric, Text, Title } from "@tremor/react";

const Dropzone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsUploading(true);
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setIsUploading(false);
      })
      .catch((error) => {
        console.error('Erro ao fazer upload do arquivo:', error);
        setIsUploading(false);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  return (
    <div>
      <Icon icon={HiOutlineCloudArrowUp } variant="outlined" tooltip="Upload de dados" size="lg" onClick={() => setIsOpen(true)} />
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
                <Dialog.Panel {...getRootProps()} className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ${isDragActive ? 'border-green-500' : ''}`}>
                  <Dialog.Title as={Title} className="text-lg font-medium leading-6 text-gray-900">
                    Upload CSV
                  </Dialog.Title>
                  <div className="flex items-center justify-center h-64 border-2 border-gray-200 border-dashed rounded-md">
                    <div className="text-center">
                      <HiOutlineCloudArrowUp   className="w-12 h-12 mx-auto text-gray-400" />
                      <Text className="mt-2 text-sm text-gray-600">Arraste e solte um arquivo aqui, ou clique para selecionar um arquivo</Text>
                      <input {...getInputProps()} />
                    </div>
                  </div>
                  {acceptedFiles.length > 0 && (
                    <div className="mt-4">
                      <Text className="text-sm text-tremor-brand-subtle">Arquivo {acceptedFiles[0].name} adicionado com sucesso!</Text>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Dropzone;
// ExpeditionModal.tsx
import { Dialog, Transition } from '@headlessui/react'
import { Button, Text, Title, Textarea } from '@tremor/react'
import { Fragment, useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { FiEdit, FiCheck, FiX, FiPaperclip } from 'react-icons/fi';
import Link from 'next/link'

const StyledButton = styled(Button)`
  border-radius: 5px;
`;

interface ExpeditionModalProps {
  isOpen: boolean;
  closeModal: () => void;
  isSaved: boolean;
  linkedDocumentUrl?: string;
}

export default function ExpeditionModal({ isOpen, closeModal, isSaved, linkedDocumentUrl }: ExpeditionModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={closeModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6">
              {isSaved ? (
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <FiCheck className="text-green-500" size={24} />
                  </div>
                  <Title>Salvo com sucesso</Title>
                  <Text>Nº documento:</Text>
                  <Text>CNPJ:</Text>
                  <Text>Hora:</Text>
                  {linkedDocumentUrl && (
                    <div className="flex items-center space-x-2">
                      <FiPaperclip size={24} />
                      <Link href={linkedDocumentUrl}>Abrir no autodesk</Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <FiX className="text-red-500" size={24} />
                  </div>
                  <Title>Erro ao salvar</Title>
                </div>
              )}
              <div className="mt-4 flex justify-end">
                <StyledButton size='xs' variant='secondary' type="button" onClick={closeModal}>
                  Fechar
                </StyledButton>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
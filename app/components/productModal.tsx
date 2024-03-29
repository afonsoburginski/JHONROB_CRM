// ProductModal.tsx
import { Dialog, Transition } from '@headlessui/react'
import { Button, Text, Title, Textarea } from '@tremor/react'
import { Fragment, useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { SelectedProductContext } from '../contexts/selectedProductContext';

const StyledButton = styled(Button)`
  border-radius: 5px;
`;

const StyledText = styled(Text)`
  font-family: Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
`;

interface ProductModalProps {
  product: Product;
}

export default function ProductModal({ product }: ProductModalProps) {
  let [isOpen, setIsOpen] = useState(false)
  let [text, setText] = useState(product?.observation || '')

  useEffect(() => {
    setText(product?.observation || '');
  }, [product?.observation]);

  const { updateProductObservation } = useContext(SelectedProductContext);

  function closeModal() {
    if (product) {
      updateProductObservation(product.tempId, text);
    }
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <StyledButton variant='secondary' onClick={openModal}>
        <FiEdit onClick={openModal} className="cursor-pointer" />
      </StyledButton>

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
                <Title>
                  Observação do Produto
                </Title>
                <Textarea 
                  className="h-52"
                  value={text} 
                  placeholder="Digite uma breve observação sobre o produto"  
                  onChange={(e) => setText(e.target.value)} 
                />

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
    </>
  )
}
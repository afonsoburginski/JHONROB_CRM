// EditProductsModal.tsx
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@tremor/react';

const EditProductsModal: React.FC<{ open: boolean, onClose: () => void, products: any[] }> = ({ open, onClose, products }) => {
  const [editedProducts, setEditedProducts] = useState(products);

  const handleProductChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newProducts = [...editedProducts];
    newProducts[index][event.target.name] = event.target.value;
    setEditedProducts(newProducts);
  }

  const handleSaveChanges = async () => {
    // Aqui você pode adicionar a lógica para salvar as alterações feitas nos produtos
    // Por exemplo, você pode fazer uma chamada API para atualizar os produtos no servidor
    try {
      // Substitua esta URL pela URL do seu servidor
      const response = await fetch('api/products', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedProducts)
      });

      if (!response.ok) {
        throw new Error('Falha ao salvar as alterações');
      }

      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={onClose}>
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
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl h-[80%] sm:w-full">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 p-6">
                Editar Produtos
              </Dialog.Title>
              <div className="mt-2 p-6">
                {editedProducts.map((product, index) => (
                  <div key={index}>
                    <label>
                      Nome do Produto:
                      <input type="text" name="productName" value={product.productName} onChange={(event) => handleProductChange(index, event)} />
                    </label>
                    <label>
                      Preço do Produto:
                      <input type="text" name="productPrice" value={product.productPrice} onChange={(event) => handleProductChange(index, event)} />
                    </label>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button type="button" onClick={handleSaveChanges} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Salvar Alterações
                </Button>
                <Button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancelar
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditProductsModal;
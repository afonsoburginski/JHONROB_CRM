// ObservationModal.tsx
import { Dialog, Transition } from '@headlessui/react'
import { Button, Text, Title } from '@tremor/react'
import { Fragment, useState } from 'react'
import styled from 'styled-components';

const StyledButton = styled(Button)`
  border-radius: 5px;
`;

const StyledText = styled(Text)`
  font-family: Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
`;

interface ObservationModalProps {
  observation: string;
}

export default function ObservationModal({ observation }: ObservationModalProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  if (observation.length <= 20) {
    return <p>{observation}</p>;
  }

  const lines = observation.split('. ');
  const groupedLines = lines.reduce((acc: string[], line, index) => {
    acc.push(line);
    if ((index + 1) % 4 === 0) {
      acc.push('\n');
    }
    return acc;
  }, []);

  return (
    <>
      <div className="flex items-center">
        <p>{observation.substring(0, 50)}</p>
        <StyledButton variant='secondary' type="button" onClick={openModal} className="ml-2 ">
          Ver mais
        </StyledButton>
      </div>

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
                  OBSERVAÇÃO:
                </Title>
                <StyledText>
                  {groupedLines.map((group, index) => (
                    <Fragment key={index}>
                      <div>{group}</div>
                      {(index + 1) % 4 === 0 && <div>{'\n'}</div>}
                    </Fragment>
                  ))}
                </StyledText>



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
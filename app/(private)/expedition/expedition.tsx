// expedition.tsx
'use client'
import React, { useState } from 'react';
import { List, ListItem, Button, Title, Accordion, AccordionBody, AccordionHeader, AccordionList, Checkbox } from '@tremor/react';
import { useExpeditionContext } from '../../contexts/expeditionContext';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import ExpeditionLayout from './expeditionLayout';

type OFInfo = {
  of: string;
  items: Array<{
    balance: any;
    code: any;
    rdProduct: any;
    unit: any;
    color: any;
    material: any;
    dimensions: any;
    weight: any;
    product: string; // Alterado de name para product
    quantity: number;
  }>;
};

export default function Expedition({ onBack }: { onBack: () => void; }) {
  const { savedOFs, ofInfos, attachedItems, savedItems, setSavedItems } = useExpeditionContext();
  const [selectedOFInfos, setSelectedOFInfos] = useState<OFInfo[]>([]);
  const [selectedOfs, setSelectedOfs] = useState<string[]>([]);
  const [ofsToSend, setOfsToSend] = useState<OFInfo[]>([]);
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

  const handleSend = () => {
    setOfsToSend(selectedOFInfos);
  };

  const handleShowMore = (index: number) => {
    setShowMore(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSelectOf = (of: string) => {
    if (selectedOfs.includes(of)) {
      setSelectedOfs(selectedOfs.filter(selectedOf => selectedOf !== of));
      setSelectedOFInfos(selectedOFInfos.filter(info => info.of !== of));
    } else {
      setSelectedOfs([...selectedOfs, of]);
      const ofInfo = ofInfos.find(info => info.of === of);
      if (ofInfo) {
        setSelectedOFInfos([...selectedOFInfos, ofInfo]);
      }
    }
  };

  return (
    <main className="grid grid-cols-4 h-[84vh]">
      <div className="col-span-1 bg-white p-4 flex flex-col justify-between">
        <div>
          <Title className="mb-4">Expedição</Title>
          <div className="grid grid-cols-3 gap-2 justify-items-start mb-4">
            {savedOFs.map((of, index) => (
              <div key={index}>
                <input 
                  type="checkbox" 
                  checked={selectedOfs.includes(of)} 
                  onChange={() => handleSelectOf(of)}
                />
                <span>{of}</span>
              </div>
            ))}
          </div>
          <AccordionList>
            <Accordion>
              <AccordionHeader>Produtos Selecionados</AccordionHeader>
              <AccordionBody>
                <List>
                  {selectedOFInfos.map((ofInfo, index) => (
                    <div key={index}>
                      <h2>{ofInfo.of}</h2>
                      {ofInfo.items.map((item, itemIndex) => {
                        return (
                          <ListItem key={itemIndex}>
                            <div>
                              <strong>Nome:</strong> {item.product}, 
                              <strong>Quantidade:</strong> {item.quantity}
                              {showMore[itemIndex] && (
                                <>
                                  , <strong>Código:</strong> {item.code}
                                  , <strong>Peso:</strong> {item.weight}
                                </>
                              )}
                              <button onClick={() => handleShowMore(itemIndex)}>
                                {showMore[itemIndex] ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                              </button>
                            </div>
                          </ListItem>
                        );
                      })}
                    </div>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          </AccordionList>
        </div>
        <div>
          <Button onClick={onBack}>
            Voltar
          </Button>
          <Button onClick={handleSend}>
            Enviar
          </Button>
        </div>
      </div>
      <div className="col-span-3 bg-gray-200 p-4">
        <ExpeditionLayout 
          selectedOF={selectedOFInfos.length > 0 ? selectedOFInfos : []} 
          attachedItems={attachedItems} 
          savedItems={savedItems} 
          setSavedItems={setSavedItems} 
        />
      </div>
    </main>
  );
}
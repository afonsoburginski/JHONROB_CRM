// expeditionLayout.tsx
import React, { useState } from 'react';
import { Grid, Col, Flex, Button, Title, Text, TextInput } from '@tremor/react';
import { useExpeditionContext } from '../../contexts/expeditionContext';
import { Checkbox } from '@mui/material';

export default function ExpeditionLayout({ onBack }: { onBack: () => void; }) {
  const { ofs, savedItems } = useExpeditionContext();
  const [selectedOfs, setSelectedOfs] = useState<Array<OF>>([]);

  const handleSelectOf = (of: OF) => {
    if (selectedOfs.includes(of)) {
      setSelectedOfs(selectedOfs.filter(selectedOf => selectedOf !== of));
    } else {
      setSelectedOfs([...selectedOfs, of]);
    }
  };

  return (
    <main>
      <Grid numItemsMd={2} numItemsLg={2} className='h-[100vh]' >
        <Col className='bg-white p-4'>
          <Title>Expedição</Title>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Flex className='flex mt-5 mb-5'>
            <TextInput/>
            <TextInput/>
          </Flex>
          <Flex className='flex mt-5 mb-5'>
            <TextInput/>
            <TextInput/>
          </Flex>
          
          <Button onClick={onBack}>
            Voltar
          </Button>
        </Col>
        <Col className='bg-gray-200'>
          {/* Aqui vai ficar o componente referente ao Layout de uma NF, que é composto por uma ou várias OF */}
        </Col>
      </Grid>
    </main>
  );
}
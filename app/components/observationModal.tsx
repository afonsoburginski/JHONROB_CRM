// ObservationModal.tsx
import React, { useState } from 'react';
import { Button, Title, Text } from '@tremor/react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface ObservationModalProps {
  observation: string;
}

const ObservationModal: React.FC<ObservationModalProps> = ({ observation }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  if (observation.length <= 20) {
    return <Text>{observation}</Text>;
  }

  const lines = observation.split('\n');
  const groupedLines = lines.reduce((acc: string[], line, index) => {
    if (index !== 0 && index % 4 === 0) {
      acc.push('');
    }
    acc.push(line);
    return acc;
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Text>{observation.substring(0, 40)}</Text>
        <Button style={{ borderRadius: '5px', marginLeft: '10px' }} variant="secondary" onClick={handleOpen}>
          Ver mais
        </Button>
      </Box>
      <Modal
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '30%', 
          left: '50%', 
          width: '30%',
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'background.paper',
          border: '1px solid primary',
          borderRadius: '10px',
          boxShadow: 24, 
          p: 7 
        }}>
          <Title>OBSERVAÇÃO:</Title>
          <Box sx={{ textAlign: 'justify', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {groupedLines.map((group, index) => (
              <React.Fragment key={index}>
                <Text>{group}</Text>
                {(index + 1) % 4 === 0 && <Text>{'\n'}</Text>}
              </React.Fragment>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <Button style={{ borderRadius: '5px' }} variant="secondary" onClick={handleClose}>Fechar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ObservationModal;
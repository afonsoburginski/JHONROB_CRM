// ObservationModal.tsx
import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

interface ObservationModalProps {
  observation: string;
}

const ObservationModal: React.FC<ObservationModalProps> = ({ observation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (observation.length <= 30) {
    return <Typography variant="body1">{observation}</Typography>;
  }

  return (
    <>
      <Typography variant="body1" component="span">
        {observation.substring(0, 30)}
      </Typography>
      <Button color="primary" onClick={handleOpen}>
        Ver mais
      </Button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '60%', 
          bgcolor: 'background.paper', 
          border: '2px solid #000', 
          boxShadow: 24, 
          p: 4,
          overflow: 'auto' // adiciona barra de rolagem se necessário
        }}>
          <Typography variant="h6" component="h2">
            Observação
          </Typography>
          <Typography variant="body1" gutterBottom>
            {observation}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ObservationModal;
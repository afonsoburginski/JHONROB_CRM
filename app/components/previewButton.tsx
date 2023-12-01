// PreviewButton.tsx
import React, { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import Layout from './layout';
import { Propose } from '../propose/page';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Importe o ícone de visualização

interface PreviewButtonProps {
  propose: Propose;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ propose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <IconButton color="primary" onClick={handleOpen}> {/* Substitua Button por IconButton */}
        <VisibilityIcon /> {/* Substitua o texto "Visualizar" pelo ícone de visualização */}
      </IconButton>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '45%', 
          height: '100%', 
          bgcolor: 'background.paper', 
          border: '2px solid #000', 
          boxShadow: 24, 
          p: 4,
          overflow: 'auto' // adiciona barra de rolagem se necessário
        }}>
          <Layout propose={propose} />
        </Box>
      </Modal>
    </>
  );
};

export default PreviewButton;
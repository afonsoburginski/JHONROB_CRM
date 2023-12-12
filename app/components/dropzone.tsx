// components/dropzone.tsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
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
      })
      .catch((error) => {
        console.error('Erro ao fazer upload do arquivo:', error);
      });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Arraste e solte um arquivo aqui, ou clique para selecionar um arquivo</p>
    </div>
  );
};

export default Dropzone;
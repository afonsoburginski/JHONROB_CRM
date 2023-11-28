import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CSVUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        // Envie o arquivo CSV para a rota API
        await axios.post('/api/upload-csv', formData);

        // Limpe o estado do arquivo após o upload bem-sucedido
        setFile(null);
      } catch (error) {
        console.error('Erro ao enviar arquivo CSV:', error);
      }
    }
  };

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Arraste e solte um arquivo CSV aqui, ou clique para selecionar</p>
      </div>
      {file && (
        <div>
          <p>Arquivo selecionado: {file.name}</p>
          <button onClick={handleUpload}>Enviar para o banco de dados</button>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle: React.CSSProperties = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export { CSVUploader as default }; // Exporte a função de seta com um nome específico

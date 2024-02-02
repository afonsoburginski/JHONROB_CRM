// UserForm.tsx
import { useForm } from 'react-hook-form';
import { Button } from '@tremor/react';

interface UserFormInputs {
  name: string;
  email: string;
  password: string;
  image: string;
  role: 'USER' | 'ADMIN';
}

interface UserFormProps {
  onSubmit: (data: UserFormInputs) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const { register, handleSubmit, reset } = useForm<UserFormInputs>();

  const submitForm = (data: UserFormInputs) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input {...register('name')} placeholder="Nome" required />
      <input {...register('email')} placeholder="Email" required />
      <input {...register('password')} placeholder="Senha" required />
      <input {...register('image')} placeholder="Imagem" />
      <select {...register('role')} required>
        <option value="USER">Usuário</option>
        <option value="ADMIN">Admin</option>
      </select>
      <Button variant='secondary' type="submit">Adicionar Usuário</Button>
    </form>
  );
}
// UserForm.tsx
import { useForm } from 'react-hook-form';
import { Button } from '@tremor/react';

interface UserFormInputs {
  name: string;
  email: string;
  password: string;
  image: string;
  role: 'ADMIN' | 'MANAGER' | 'SELLER' | 'SHIPPER';
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
      <input {...register('name')} placeholder="Name" required />
      <input {...register('email')} placeholder="Email" required />
      <input {...register('password')} placeholder="Password" required />
      <input {...register('image')} placeholder="Image" />
      <select {...register('role')} required>
        <option value="ADMIN">Admin</option>
        <option value="MANAGER">Manager</option>
        <option value="SELLER">Seller</option>
        <option value="SHIPPER">Shipper</option>
      </select>
      <Button variant='secondary' type="submit">Add User</Button>
    </form>
  );
}
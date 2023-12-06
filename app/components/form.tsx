// components/form.tsx
'use client'
import { signIn } from 'next-auth/react';
import { Button, TextField, Box } from '@mui/material';
import { toast } from 'react-toastify';

export default function Form({ type }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      if (type === 'login') {
        const result = await signIn('credentials', { email: email.value, password: password.value, redirect: false });
        if (result.error) {
          toast.error(result.error);
        }
      } else if (type === 'register') {
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField name="email" type="email" label="Email" required fullWidth margin="normal" />
      <TextField name="password" type="password" label="Password" required fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">{type === 'login' ? 'Sign In' : 'Register'}</Button>
    </Box>
  );
}
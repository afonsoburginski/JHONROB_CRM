// page.tsx
'use client'
import { useEffect, useState } from 'react';
import { Card, Flex, Title, Text } from '@tremor/react';
import Search from '../../components/search';
import UserTable from './userTable';
import UserForm from './userForm';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  role: Role;
}

export default function UserPage({ searchParams }: { searchParams: { q: string }; }) {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const search = searchParams.q ?? '';

  const fetchUsers = async () => {
    try {
      const response = await fetch(`api/user?search=${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search, editingUserId]);

  const onSubmit = async (data: UserFormInputs) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Usuários</Title>
      <Text>Lista detalhada de usuários</Text>
      <Flex>
        <Search />
        <UserForm onSubmit={onSubmit} />
      </Flex>
      <Card className="mt-6">
        <UserTable users={users} editingUserId={editingUserId} onEditUser={setEditingUserId} />
      </Card>
    </main>
  );
}
// userTable.tsx
'use client'
import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

enum Role {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  SELLER = 'SELLER',
  SHIPPER = 'SHIPPER'
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  role: Role;
}

interface UserTableProps {
  users: User[];
  editingUserId: number | null;
  onEditUser: (userId: number | null) => void;
}

const updateUser = async (id: number, data: Partial<User>) => {
  try {
    const response = await fetch(`/api/user?id=${id}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

const UserTable: React.FC<UserTableProps> = ({ users, editingUserId, onEditUser }) => {
  const [editedUser, setEditedUser] = useState<User | null>(null);

  const handleSave = async () => {
    if (editedUser) {
      console.log('Saving user:', editedUser);
      const { id, name, email, image, role } = editedUser;
  
      const data: Partial<User> = {};
      if (name !== undefined) data.name = name;
      if (email !== undefined) data.email = email;
      if (image !== undefined) data.image = image;
      if (role !== undefined) data.role = role;
  
      await updateUser(id, data);
      onEditUser(null);
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Imagem</TableHeaderCell>
          <TableHeaderCell>Função</TableHeaderCell>
          <TableHeaderCell>Ação</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users && users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>
              {editingUserId === user.id ? (
                <input type="text" defaultValue={user.name} onChange={(e) => setEditedUser({ ...user, name: e.target.value })} />
              ) : (
                user.name
              )}
            </TableCell>
            <TableCell>
              {editingUserId === user.id ? (
                <input type="text" defaultValue={user.email} onChange={(e) => setEditedUser({ ...user, email: e.target.value })} />
              ) : (
                user.email
              )}
            </TableCell>
            <TableCell>
              {editingUserId === user.id ? (
                <input type="text" defaultValue={user.image} onChange={(e) => setEditedUser({ ...user, image: e.target.value })} />
              ) : (
                user.image
              )}
            </TableCell>
            <TableCell>
              {editingUserId === user.id ? (
                <select defaultValue={user.role} onChange={(e) => setEditedUser({ ...user, role: e.target.value as Role })}>
                  <option value={Role.ADMIN}>Admin</option>
                  <option value={Role.MANAGER}>Manager</option>
                  <option value={Role.SELLER}>Seller</option>
                  <option value={Role.SHIPPER}>Shipper</option>
                </select>
              ) : (
                user.role
              )}
            </TableCell>
            <TableCell>
              {editingUserId === user.id ? (
                <button onClick={handleSave}>Salvar</button>
              ) : (
                <button onClick={() => onEditUser(user.id)}>Editar</button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
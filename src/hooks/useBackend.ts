import React from 'react';
import { useEndpoint } from "./useEndpoint";

interface User {
  id: number;
  name: string;
  email: string;
}

export const useBackend = () => {
  const { data, isLoading, error, fetchData } = useEndpoint('https://jsonplaceholder.typicode.com');

  const getUsers = () => fetchData('GET', `/users`);
  const getUserById = (id: number) => fetchData('GET', `/users/${id}`);
  const createUser = (user: User) => fetchData('POST', `/users`, { body: user });
  const updateUser = (id: number, user: User) => fetchData('PUT', `/users/${id}`, { body: user });
  const deleteUser = (id: number) => fetchData('DELETE', `/users/${id}`);

  return { data, isLoading, error, getUsers, getUserById, createUser, updateUser, deleteUser };
};

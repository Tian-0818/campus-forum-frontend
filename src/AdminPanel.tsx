// frontend/src/AdminPanel.tsx
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3001/api');
const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="courses" list={ListGuesser} />
    <Resource name="reviews" list={ListGuesser} />
  </Admin>
);
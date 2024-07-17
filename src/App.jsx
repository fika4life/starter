import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useState } from 'react';

const App = () => {
  const addNewItem = (newItem) => {
    console.log(newItem);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
};
export default App;

import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import Button from './Button';


export default function State() {
  const { nome } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">Olá, {nome}! Tudo bem? </div>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">Aqui vai o exemplo de useState()</div>
      <div className="flex flex-row gap-x-4">
        <Button to="/">Voltar</Button>
        <Button to="/effect">Prosseguir</Button>
        </div>
    </>
  )
}

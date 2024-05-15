import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import Button from './Button';


export default function Effect() {
  const { nome } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">Olá, {nome}! Tudo bem? </div>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">E aqui vai o exemplo de useEffect()</div>
      <div className="flex flex-row gap-x-4">
        <Button to="/state">Voltar</Button>
        <Button to="/ref">Prosseguir</Button>
        </div>
    </>
  )
}

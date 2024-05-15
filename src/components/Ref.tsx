import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../App';
import Button from './Button';


export default function Ref() {
  const { nome } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">Olá, {nome}! Tudo bem? </div>
      <div className="flex flex-row w-100  m-2 text-xl text-center ">Aqui vai o exemplo de useRef()</div>
      <div className="flex flex-row gap-x-4">
        <Button to="/effect">Voltar</Button>
        </div>
    </>
  )
}

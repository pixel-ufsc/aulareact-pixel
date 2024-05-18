import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import Button from './Button';


export default function State() {
  const { nome } = useContext(AppContext);
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div className="w-100  m-2">
        <p className='text-xl text-center'>Olá, {nome}! Tudo bem? </p>
        <p className='m-3 text-md text-justify'>Vamos utilizar o hook <b>useState()</b>. Para isso, implementamos um contador, cujo valor é registrado por um <b>state</b>.</p>
      </div>
      <div className="w-100  m-2 mb-10 flex space-x-4">
        <span onClick={()=>setCount(count-1)} className="cursor-pointer border-solid hover:border-[#FA8400] border-[#023047] border-2 flex items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-4xl">-</span>
        <span className="flex items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-2xl">{count}</span>
        <span onClick={()=>setCount(count+1)} className="cursor-pointer border-solid hover:border-[#FA8400] border-[#023047] border-2 flex items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-4xl">+</span>
      </div>
      <div className="flex flex-row gap-x-4">
        <Button to="/">Voltar</Button>
        <Button to="/effect">Prosseguir</Button>
        </div>
    </>
  )
}

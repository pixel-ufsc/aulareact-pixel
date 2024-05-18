import { useContext, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../App';
import Button from './Button';

export default function Ref() {
  const { nome } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleStartPause = () => {
    if (isRunning) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      intervalRef.current = window.setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <>
      {!nome && <Navigate to={"/"}/>}
      <div className="w-100  m-2">
        <p className='text-xl text-center'>{nome}, conseguiu entender o potencial do useEffect? </p>
        <p className='m-3 text-md text-justify'>Por fim, veremos o hook <b>useRef()</b>. Ele armazena uma referência que não é reinicializada em cada estado, mantendo seu valor à cada renderização. Para ver como funciona na prática, implementamos um temporizador cujo valor é armazenado em uma referência.</p>
      </div>
      <div className="w-100  m-2 mb-10 flex items-center flex-center flex-col">
        <div className="flex flex-col items-center p-4 w-full">
          <span className="flex items-center justify-center w-80 h-20 mb-5 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-2xl">{counter} s</span>
          <div className="flex space-x-4 w-80">
            <button onClick={handleStartPause} className="border-solid hover:border-[#FA8400] border-[#023047] border-2 flex items-center justify-center w-full py-2 px-4 mb-5 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-2xl">
              {isRunning ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="10" y1="3" x2="10" y2="21" />
                  <line x1="14" y1="3" x2="14" y2="21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
            <button onClick={handleReset} className="border-solid hover:border-[#FA8400] border-[#023047] border-2 flex items-center justify-center w-full py-2 px-4 mb-5 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 1 0 2.13-3.36L1 10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4">
        <Button to="/effect">Voltar</Button>
      </div>
    </>
  );
}

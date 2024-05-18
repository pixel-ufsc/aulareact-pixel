import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Button from './components/Button'
import Card from './components/Card'
import State from './components/State'
import Effect from './components/Effect'
import Ref from './components/Ref'

type AppContextType = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = React.createContext<AppContextType>({
  nome: '',
  setNome: () => {},
});

function App() {
  const [nome, setNome] = useState('');
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,}$/u;;
    setIsValid(regex.test(nome));
  }, [nome]);

  return (
    <Router>
      <AppContext.Provider value={{nome, setNome}}>
      <header className="fixed justify-between top-0 w-full bg-gray text-midnight font-koho font-bold hover:text-spaceCadet flex items-center justify-between p-2">
        <Link to={"/"}>
          <img src="logo.png" alt="Logo" className="h-10 mr-2"/>
        </Link>
        <a target={"_blank"} href={"https://github.com/pixel-ufsc/aulareact-pixel"}>Acessar Repositório</a>
      </header>
      <div className="flex flex-col min-h-screen justify-center items-center p-2 bg-gradient-to-b from-[#82337E] to-[#023047] font-koho font-semibold">
          <Card>
            <Routes>
                <Route path="/" element={
                  <>
                    <div className="flex flex-row w-100  m-2 text-xl text-center font-koho">Olá! Qual é o seu nome?</div>
                    <input ref={inputRef} className="rounded-md p-2 m-2 cursor-pointer transition duration-500 ease-in-out outline-none focus:border-[#FA8400] border-[#023047] border-2 w-full " type="text" onChange={(e) => setNome(e.target.value)} />
                    <span className="flex flex-row"><Button to="/state" disabled={!isValid}>Prosseguir</Button></span>
                  </>
                } />
                
                <Route path="/state" element={
                  <State />
                } />
                <Route path="/effect" element={
                  <Effect />
                } />
                <Route path="/ref" element={
                  <Ref />
                } />
              </Routes>
            </Card>
        </div>
        <footer className="fixed bottom-0 w-full bg-gray text-midnight text-center py-2 flex items-center justify-center font-koho">
          <span>© 2024 <a target='_blank' className="font-bold hover:text-spaceCadet" href="https://ejpixel.com.br">Pixel - Soluções Digitais</a> | INE5646</span>
        </footer>
      </AppContext.Provider>
    </Router>
  )
}

export { App, AppContext };

{/* Identidade Visual da Pixel
Space Cadet: #82337E
Midnight-X: #023047
Sunrise-X: #FA8400
Midday-X: #1CACD8
#242837
#404045
#8F8F94
#DFDFE4*/}

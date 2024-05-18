import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import Button from './Button';
import { Navigate } from 'react-router-dom';


export default function Effect() {
  const { nome } = useContext(AppContext);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [request, setRequest] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados. Tente novamente!');
        }
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    };

    if (request) {
      fetchData();
      setRequest(false); // Reset request
    }
  }, [request]);

  const handleRequestClick = () => {
    if (!loading) { // Somente se não estiver carregando
      setRequest(true);
      setError(null);
    }
  };

  return (
    <>
      {!nome && <Navigate to={"/"}/>}
      <div className="w-100  m-2">
        <p className='text-xl text-center'>Eaí {nome}, gostou do exemplo anterior? </p>
        <p className='m-3 text-md text-justify'>Agora chegou a vez do hook <b>useEffect()</b>. Para isso, implementamos uma consulta à api <a target='_blank'>api.thecatapi.com</a>, requisitando fotos de gatinhos. A renderização aguarda a resposta da API em estado de carregamento, o <b>useEffect()</b> é utilizado para renderizar a imagem assim que o response foi dado.</p>
      </div>
      <div className="w-100  m-2 mb-10 flex items-center flex-center flex-col">
        <button onClick={handleRequestClick} disabled={loading} className="mb-3 border-solid hover:border-[#FA8400] border-[#023047] border-2 flex items-center justify-center w-20 h-10 rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] text-white text-md">
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 0120 12h-4a3.999 3.999 0 00-3.273-3.928L9.757 10.07l1.414 1.414-2.34 2.34a4.018 4.018 0 00-.423 5.416 8.01 8.01 0 01-2.98-5.749zM20 12h4a8 8 0 01-8 8v-4c2.027 0 3.88-.75 5.291-2.001A7.96 7.96 0 0120 12z"></path>
            </svg>
          ) : (
            'Request'
          )}
        </button>
        {error && (
          <div className="w-full mb-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {!error && (
          <span className="flex items-center p-2 justify-center rounded-lg bg-gradient-to-b from-[#82337E] to-[#023047] max-w-[500px]">
            {data ? (
                <img className="h-full w-full object-contain" src={data[0].url} alt={data[0].id} />
            ) : (
              <img className="h-full w-full object-contain" src={"src/img/img-default.webp"} alt={"Image Default"} />
            )}
          </span>
        )}
      </div>
      <div className="flex flex-row gap-x-4">
        <Button to="/state">Voltar</Button>
        <Button to="/ref">Prosseguir</Button>
        </div>
    </>
  )
}

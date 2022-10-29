import axios from 'axios';
import { useState } from 'react';
import isEmailValid from '../../utils/isEmailValid';
import { isSomeEmpty } from '../../utils/isSomeEmpty';

export default function NewGym() {
  const config = {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2ODM3Njc3LCJleHAiOjE2Njk0Mjk2Nzd9.kMtMa-SeI-xpovIV9AE10-b0FdD8ECy-6MpU1TQ8OvY',
    },
  };
  const [name, setName] = useState('');
  const [currentCapacity, setCurrentCapacity] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const [empty, setEmpty] = useState(false);
  const [zipCodeErr, setZipCodeErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  async function searchCep() {
    const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
    setState(data.uf);
    setStreet(data.logradouro);
    setCity(data.localidade);
  }

  function clearInputs() {
    setAdressNumber('');
    setCity('');
    setCurrentCapacity('');
    setEmail('');
    setMaxCapacity('');
    setName('');
    setPassword('');
    setState('');
    setStreet('');
    setZipCode('');
  }

  async function handleCreateGym() {
    const someFieldIsEmpty = isSomeEmpty([name, currentCapacity, maxCapacity, email, password,
      zipCode, state, city, street, adressNumber]);
    if (someFieldIsEmpty) {
      return setEmpty(true);
    }
    if (!someFieldIsEmpty) {
      setEmpty(false);
    }

    if (!isEmailValid(email)) {
      return setEmailErr(true);
    }

    if (zipCode.length < 8) {
      return setZipCodeErr(true);
    }
    setZipCodeErr(false);

    await axios.post('https://trainya-app-api.herokuapp.com/gyms', {
      name,
      currentCapacity: Number(currentCapacity),
      maxCapacity: Number(currentCapacity),
      email,
      password,
      zipCode: Number(zipCode),
      state,
      city,
      street,
      adressNumber: Number(adressNumber),
    }, config);
    return clearInputs();
  }

  if (zipCode.length >= 8) {
    searchCep();
  }

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleCreateGym();
    }
  });

  return (
    <div className="flex justify-center mt-16">
      <div className="w-full max-w-3xl flex items-center justify-center flex-col bg-[#05142D] border border-gray-800 rounded-2xl text-white px-12 py-16">
        <div className="flex w-full items-center justify-center border-b-[0.5px] border-gray-800 pb-4">
          <h1 className="font-bold text-3xl">Cadastrar academias</h1>
        </div>
        <div className="flex flex-row gap-1 text-sm items-center opacity-50 mt-1 mb-6" />
        <div className="flex gap-2 flex-row w-full mb-7">
          <div className="w-full flex flex-col gap-1">
            <span>Nome da academia *</span>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-row w-full mb-7">
          <div className="w-2/4 flex flex-col gap-1">
            <span>Capacidade atual *</span>
            <input
              type="text"
              onChange={(e) => {
                setCurrentCapacity(e.target.value);
              }}
              value={currentCapacity}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Capacidade máxima *</span>
            <input
              type="text"
              onChange={(e) => {
                setMaxCapacity(e.target.value);
              }}
              value={maxCapacity}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-row w-full mb-7">
          <div className="w-2/4 flex flex-col gap-1">
            <span>E-mail *</span>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Senha *</span>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-row w-full mb-7">
          <div className="w-2/4 flex flex-col gap-1">
            <span>CEP *</span>
            <input
              type="text"
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
              value={zipCode}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Estado *</span>
            <input
              type="text"
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-row w-full mb-7">
          <div className="w-2/5 flex flex-col gap-1">
            <span>Cidade *</span>
            <input
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-1">
            <span>Endereço *</span>
            <input
              type="text"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              value={street}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-1/5 flex flex-col gap-1">
            <span>Número *</span>
            <input
              type="text"
              onChange={(e) => {
                setAdressNumber(e.target.value);
              }}
              value={adressNumber}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        {empty && <span className="text-red-500 mb-4">Preencha todos os campos e tente novamente!</span>}
        {zipCodeErr && <span className="text-red-500 mb-4">Digite um CEP válido</span>}
        {emailErr && <span className="text-red-500 mb-4">O formato do e-mail não é válido</span>}
        <div className="w-full bg-[#1753B2] hover:bg-[#2960b9] active:bg-[#0d4cb0] py-3 px-4 font-semibold text-lg rounded-lg">
          <button type="submit" onClick={handleCreateGym} className="w-full  flex items-center justify-center">
            <span className="opacity-90">Cadastrar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

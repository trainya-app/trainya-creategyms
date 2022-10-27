import axios from 'axios';
import { useState } from 'react';

export default function NewGym() {
  const config = {
    headers: {

      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2ODM3Njc3LCJleHAiOjE2Njk0Mjk2Nzd9.kMtMa-SeI-xpovIV9AE10-b0FdD8ECy-6MpU1TQ8OvY',
    },
  };
  const [info, setInfo] = useState({
    name: '', currentCapacity: '', maxCapacity: '', email: '', password: '', zipCode: '', state: '', city: '', street: '', adressNumber: '',
  });

  async function searchCep() {
    const { data } = await axios.get(`https://viacep.com.br/ws/${info.zipCode}/json/`);
    setInfo({
      ...info, street: data.logradouro, state: data.uf, city: data.localidade,
    });
  }

  async function handleCreateGym() {
    await axios.post('https://trainya-app-api.herokuapp.com/gyms', {
      ...info,
      currentCapacity: Number(info.currentCapacity),
      maxCapacity: Number(info.maxCapacity),
      zipCode: Number(info.zipCode),
      adressNumber: Number(info.adressNumber),
    }, config);
  }

  if (info.zipCode.length >= 8) {
    searchCep();
  }

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
                // setName(e.target.value);
                setInfo({ ...info, name: e.target.value });
              }}
              value={info.name}
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
                setInfo({ ...info, currentCapacity: e.target.value });
              }}
              value={info.currentCapacity}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Capacidade máxima *</span>
            <input
              type="text"
              onChange={(e) => {
                setInfo({ ...info, maxCapacity: e.target.value });
              }}
              value={info.maxCapacity}
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
                // setName(e.target.value);
                setInfo({ ...info, email: e.target.value });
              }}
              value={info.email}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Senha *</span>
            <input
              type="text"
              onChange={(e) => {
                // setName(e.target.value);
                setInfo({ ...info, password: e.target.value });
              }}
              value={info.password}
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
                setInfo({ ...info, zipCode: e.target.value });
              }}
              value={info.zipCode}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/4 flex flex-col gap-1">
            <span>Estado *</span>
            <input
              type="text"
              onChange={(e) => {
                // setName(e.target.value);
                setInfo({ ...info, state: e.target.value });
              }}
              value={info.state}
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
                // setName(e.target.value);
                setInfo({ ...info, city: e.target.value });
              }}
              value={info.city}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-1">
            <span>Endereço *</span>
            <input
              type="text"
              onChange={(e) => {
                // setName(e.target.value);
                setInfo({ ...info, street: e.target.value });
              }}
              value={info.street}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-1/5 flex flex-col gap-1">
            <span>Número *</span>
            <input
              type="text"
              onChange={(e) => {
                // setName(e.target.value);
                setInfo({ ...info, adressNumber: e.target.value });
              }}
              value={info.adressNumber}
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
        </div>
        <div className="w-full bg-[#1753B2] hover:bg-[#2960b9] active:bg-[#0d4cb0] py-3 px-4 font-semibold text-lg rounded-lg">
          <button type="submit" onClick={handleCreateGym} className="w-full  flex items-center justify-center">
            <span className="opacity-90">Cadastrar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

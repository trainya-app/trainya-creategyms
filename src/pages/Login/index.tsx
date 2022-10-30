import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export default function Login() {
  const email = 'trainyadev@gmail.com';
  const pass = 'trainya123';

  const [sendEmail, setSendEmail] = useState('');
  const [sendPass, setSendPass] = useState('');
  const navigate = useNavigate();

  function navigateTo() {
    navigate('/NewGym');
  }

  function verifyLogin() {
    if (sendEmail !== email || sendPass !== pass) {
      return toast.error('Credenciais incorretas !', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setTimeout(navigateTo, 2100);
    return toast.success('Logado !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="w-full max-w-lg flex items-center justify-center flex-col bg-[#05142D] border border-gray-800 rounded-2xl text-white px-12 py-16">
          <h1 className="font-bold text-3xl">Conectar-se</h1>
          <div className="flex flex-row gap-1 text-sm items-center opacity-50 mt-4 mb-6">
            <span className="text-base">
              Login para desenvolvedores da
              {' '}
              <span className="font-semibold">Trainya</span>
            </span>
          </div>
          <div className="flex gap-4 flex-col w-full mb-7">
            <input
              type="text"
              onChange={(e) => {
                setSendEmail(e.target.value);
              }}
              placeholder="Email"
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
            <input
              type="password"
              onChange={(e) => {
                setSendPass(e.target.value);
              }}
              placeholder="Senha"
              className="bg-transparent py-3 px-4 font-semibold w-full outline-0 border-[1px] focus:border-[#2176FF] border-gray-800  rounded-xl"
            />
          </div>
          <div className="w-full bg-[#1753B2] hover:bg-[#2960b9] active:bg-[#0d4cb0] py-3 px-4 font-semibold text-lg rounded-lg">
            <button onClick={verifyLogin} type="submit" className="w-full  flex items-center justify-center" id="submit">
              <span className="opacity-90">Entrar</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} />
    </>
  );
}

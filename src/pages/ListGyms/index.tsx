import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

export default function ListGyms() {
  const [gyms, setGyms] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);
  const config = {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2ODM3Njc3LCJleHAiOjE2Njk0Mjk2Nzd9.kMtMa-SeI-xpovIV9AE10-b0FdD8ECy-6MpU1TQ8OvY',
    },
  };
  const url = 'https://trainya-app-api.herokuapp.com/gyms';

  function changeZipCode(zipCode: string) {
    if (zipCode.toString().length === 7) {
      return `0${zipCode}`;
    }
    if (zipCode.toString().length === 6) {
      return `00${zipCode}`;
    }
    return zipCode;
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url, config);
      setGyms(data.gyms);
      setLoaded(true);
    })();
  }, []);

  return (
    <div className="flex justify-center mt-24">
      <div className="w-full max-w-xl flex items-center justify-center flex-col bg-[#05142D] border border-gray-800 rounded-2xl text-white px-12 py-8">
        <div className="flex w-full items-center border-b-[0.5px] border-gray-800 pb-4 justify-between">
          <h1 className="font-bold text-2xl">Listagem de academias</h1>
          <Link to="/NewGym" className="border-2 p-2 border-gray-500 bg-[#0b1d3d] hover:scale-[1.01] hover:bg-[#13284c] rounded-lg">
            Cadastrar academias
          </Link>
        </div>
        <Swiper
          className="flex mt-8 w-full  flex-col"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          loop
          navigation
          pagination={{
            dynamicBullets: true,
          }}
        >

          {!loaded
          && (
          <div role="status" className="flex items-center justify-center py-24">
            <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
          )}

          {gyms.map((gym) => (
            <SwiperSlide className="w-full py-6 px-10 flex items-center justify-center bg-[#0b1d3d]  rounded-lg">
              <div className="flex items-center flex-col">
                <h1 className="font-bold text-3xl uppercase">{gym.name}</h1>
                <div className="text-lg flex gap-2 flex-col">
                  <div className="flex flex-row gap-2 mt-4">
                    <h1>{gym.street}</h1>
                    <h1>{gym.adress_number}</h1>
                  </div>
                  <div className="flex flex-row">
                    <h1>{gym.city}</h1>
                    <h1>
                      ,
                      {' '}
                      {gym.state}
                    </h1>
                  </div>
                  <h1>
                    CEP:
                    {' '}
                    {changeZipCode(gym.zip_code)}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

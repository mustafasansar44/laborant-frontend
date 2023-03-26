import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteLaborant, getLaborant } from '../stores/laborantSlice';



export default function AllLaborant() {

  const { laborant, loading } = useSelector(state => ({ ...state.laborant }))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLaborant())
  }, [])


  
  if (!laborant) {
    return (
      <div>Yükleniyor</div>
    )
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
            laborant.map(lab => (



              <div key={lab.id}>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{lab.ad}</h1>
                    <h3 className="mb-2 font-bold tracking-tight text-gray-700 dark:text-white">{lab.soyad}</h3>
                    <p className="mb-3 text-gray-400">{lab.hastaneKimlik}</p>
                    <div className="flex mt-6 space-x-3 md:mt-6">
                      <button onClick={() => dispatch(deleteLaborant(lab.id))} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sil</button>
                    </div>
                  </div>
                </div>
              </div>



            ))
          }
        </div>
      </div>
    </>
  )

}



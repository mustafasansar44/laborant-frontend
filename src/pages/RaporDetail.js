import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRaporDetail } from '../stores/raporDetailSlice';

export default function RaporDetail({ id }) {

  const { raporDetail, loading } = useSelector(state => ({ ...state.raporDetail }))
  const dispatch = useDispatch();
  const params = useParams()

  useEffect(() => {
    dispatch(getRaporDetail(params.id))
  }, [])


  if (!loading) {
    return (
      <div>Yükleniyor</div>
    )
  }
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-sky-500/100">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            Hasta: {raporDetail.hastaAd} {raporDetail.hastaSoyad}
          </h4>
          <p className="mt-2 px-2 text-base text-gray-600">
            Hasta TC: {raporDetail.hastaTC}
          </p>
          <p className="mt-2 px-2 text-base text-gray-600">
            Tanı: {raporDetail.taniBasligi}
          </p>
          <p className="mt-2 px-2 text-base text-gray-600">
            Tanı açıklaması: {raporDetail.taniAciklamasi}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Rapor Verilme Tarihi</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {raporDetail.raporVerilmeTarihi}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Rapor Fotoğraf Adı</p>
            <p className="text-xs font-medium text-navy-700 dark:text-white">
              {raporDetail.raporFotografAdi}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Laborant</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {raporDetail.laborantWithoutRaporDto.ad} {raporDetail.laborantWithoutRaporDto.soyad}
            </p>
            <p className="text-xs text-navy-700 dark:text-white">
              id: {raporDetail.laborantWithoutRaporDto.id}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Laborant Kimlik</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
               {raporDetail.laborantWithoutRaporDto.hastaneKimlik}
            </p>
          </div>

        </div>
      </div>
    </div>
  )

}

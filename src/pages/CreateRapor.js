import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MSInput from '../components/form/MSInput'
import MSFile from '../components/form/MSFile'
import { getLaborant } from '../stores/laborantSlice';
import { createRapor, getTani } from '../stores/raporSlice';

export default function CreateRapor() {

    const { tani, error } = useSelector(state => ({ ...state.rapor }))
    const { laborant } = useSelector(state => ({ ...state.laborant }))

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTani())
        dispatch(getLaborant())
        
    }, [])

    return (
        <Formik
            initialValues={{ hastaAd: '', hastaSoyad: '', hastaTC: '', hastaTC: '', tani: '', raporVerilmeTarihi: "2023-10-10", laborant_id: '', raporFotografi: File }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(createRapor(values))
                setSubmitting(false);
            }}>

            {({ values, isSubmitting, handleSubmit
            }) => (

                <form onSubmit={handleSubmit}>
                    <section className="flex justify-center items-center h-screen bg-gray-100">
                        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                            <h1 className="text-black text-2xl title-font font-bold mb-2">Rapor Kaydet</h1>
                            <MSInput label="Hasta Adı" name="hastaAd" />
                            <MSInput label="Hasta Soyadı" name="hastaSoyad" />
                            <MSInput label="Hasta Kimlik No" name="hastaTC" />


                            <label htmlFor="Tanı" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tanı</label>
                            <Field as="select" name="tani" id="tani" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected hidden>Tanı Seçiniz!</option>
                                {tani.map(tan => (
                                    tan ? (<option key={tan.tani} value={tan.tani}>
                                        {tan.taniBasligi}
                                    </option>) : (<p>Yükleniyor!</p>)
                                ))}
                            </Field>

                            <label htmlFor="Laborant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Laborant</label>
                            <Field as="select" name="laborant_id" id="laborant_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected hidden>Laborant Seçiniz!</option>
                                {laborant.map(lab => (
                                    lab ? (<option key={lab.id} value={lab.id}>
                                        {lab.ad + " " + lab.soyad}
                                    </option>) : (<p>Yükleniyor!</p>)
                                ))}
                            </Field>

                            <label>Rapor Tarihi:</label>
                            <input type="date" id="raporVerilmeTarihi" name="raporVerilmeTarihi" min="2016-01-01" max="2025-12-31" />

                            <input type="file" name='raporFotografi' onChange={(event) => {
                                 values.raporFotografi = event.target.files[0]
                            }} />


                            <div className="flex items-center justify-between">
                                <button disabled={isSubmitting} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span className="relative text-black group-hover:text-white">Kaydet</span>
                                </button>
                            </div>
                        </div>
                    </section>


                </form>
            )}
        </Formik>
    )
}

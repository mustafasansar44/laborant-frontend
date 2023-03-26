import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MSInput from '../components/form/MSInput'
import { createLaborant } from '../stores/laborantSlice';



export default function CreateLaborant() {

    const {error} = useSelector(state => ({ ...state.login }))
    const dispatch = useDispatch();
  

    useEffect(() => {

    }, [])


    return (
        <Formik
            initialValues={{ ad: '', soyad: '', hastaneKimlik: '' }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(createLaborant(values))
                setSubmitting(false);
            }}>

            {({ values, isSubmitting, handleSubmit
            }) => (



                <form onSubmit={handleSubmit}>
                    <section className="flex justify-center items-center h-screen bg-gray-100">
                        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                        <h1 className="text-black text-2xl title-font font-bold mb-2">Laborant Kaydet</h1>
                            <MSInput label="Adı" name="ad" />
                            <MSInput label="Soyadı" name="soyad" />
                            <MSInput label="Hastane Kimlik No" name="hastaneKimlik" />

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

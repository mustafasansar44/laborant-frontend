
import { Field, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MSInput from '../components/form/MSInput'
import { login, register } from '../stores/userSlice';

export default function Register() {

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '', role: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(register(values))
                    setSubmitting(false);
                }}>

                {({ values, isSubmitting, handleSubmit
                }) => (



                    <form onSubmit={handleSubmit}>
                        <section className="flex justify-center items-center h-screen bg-gray-100">
                            <div className="max-w-md w-full bg-white rounded p-6 space-y-4">

                                <MSInput label="Kullanıcı Adı" name="username" />
                                <MSInput label="Şifre" name="password" />

                                <Field as="select" name="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected hidden>Rol Seçiniz</option>
                                    <option key="ADMIN" value="ADMIN">
                                        Admin
                                    </option>
                                    <option key="USER" value="USER">
                                        User
                                    </option>
                                </Field>
                                
                                <button disabled={isSubmitting} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span className="relative text-black group-hover:text-white">Kaydol</span>
                                </button>
                            </div>
                        </section>


                    </form>
                )}
        </Formik>
        </div >
    )
}


import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import MSInput from '../components/form/MSInput'
import { login } from '../stores/userSlice';
export default function Login() {

    const {token, error} = useSelector(state => ({ ...state.login }))
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    


    return (
        <div>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(login(values))
                        setSubmitting(false);
                    }}>

                    {({ values, isSubmitting, handleSubmit
                    }) => (



                    <form onSubmit={handleSubmit}>
                        <section className="flex justify-center items-center h-screen bg-gray-100">
                            <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                                {error ? "Böyle bir kullanıcı yok":null}
                                <MSInput label="Kullanıcı Adı" name="username" />
                                <MSInput label="Şifre" name="password" />

                                <div className="flex items-center justify-between">
                                    <button disabled={isSubmitting} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                        <span className="relative text-black group-hover:text-white">Giriş Yap</span>
                                    </button>
                                    <button disabled={isSubmitting} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                        <span className="relative text-black group-hover:text-white">Kaydol</span>
                                    </button>
                                </div>
                            </div>
                        </section>


                    </form>
                    )}
                </Formik>
        </div>
    )
}

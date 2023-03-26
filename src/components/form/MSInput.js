import { ErrorMessage, useField } from 'formik'
import React from 'react'

export default function Input({ label, ...props }) {

    const [field, meta, helpers] = useField(props)

    return (
        <label className='block w-full'>
            <div className='text-sm text-gray-600'>{label}</div>
            <input className='w-full h-10 border-b outline-none focus:border-black' {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className='text-xs block mt-2 text-red-600' />
        </label>
    )
}

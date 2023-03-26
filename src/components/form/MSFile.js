import { useField } from 'formik'
import React from 'react'

export default function File({ label, ...props }) {

    const [field, meta, helpers] = useField(props)
    const changeHandle = e => {
        helpers.setValue(e.target.files[0])
    }

    return (
        <label className='block w-full'>
            <div className='text-sm text-gray-600'>{label}</div>
            <input className='p-2 rounded' type="file" onChange={changeHandle} {...props} />
        </label>
    )
}

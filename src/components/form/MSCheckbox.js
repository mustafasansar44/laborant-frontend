import { useField } from 'formik'
import React from 'react'


export default function Checkbox({ label, ...props }) {

    const [field, meta, helpers] = useField(props)

    return (
        <label>
            <div>{label}</div>
            <input type="checkbox" {...field} {...props} />
        </label>
    )
}

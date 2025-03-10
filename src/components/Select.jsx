import React, { forwardRef, useId } from 'react'

function Select({
    options, label, className, ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {
            label && <label htmlFor={id} className=''>
            </label>
        }
        <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {options?.map((option) => (
                // In options?.map((option) we use ? cuz if there is no data available in options the app will be crashed so prevent that we can use this optional ? so if data available it will run otherwise not run
                <option key={option} value={option}> {option} </option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)
import React from 'react'
import { toast } from 'react-toastify';

const HandleAPIErrors = (err) => {
    const messages = [];
    const errorData = err?.response?.data;
    console.log('Control Entered')
    console.log(errorData);
    if (errorData && typeof(errorData) === 'object'){
        for (const [field, errors] of Object.entries(errorData)) {
            if (Array.isArray(errors)){
                errors.forEach((error) => {
                    messages.push(`${formattedField(field)}: ${error}`)
                })
            } else {
                messages.push(`${formattedField(field)}: ${errors}`)
            }
        }
        messages.forEach(message => toast.error(message))
    } else{
        toast.error('An unexpected error occurred.')
    }
}

// Formats the field to remove any snake formatting (use of underscore) 
// Capitalize first letter of the words in a field
const formattedField = (field) => {
    console.log('Formatted Field function')
    return field.replace(/\_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
}

export default HandleAPIErrors
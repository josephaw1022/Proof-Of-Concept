




export const placeHolder = (field: string) => `Please enter your ${field}`;


/**
 * 
 * makeField - return props for the TextField component
 * 
 * @param obj - the formik object itself 
 * @param fieldName  - the field name for the formik object 
 * @param label  - the label for formik object 
 * @param placeholder - the placeholder value 
 * @param type  - the type of text input 
 * 
 */

export const Field = (obj: any, fieldName: string, label: string, type: string) => ({
    id: fieldName,
    name: fieldName,
    label: label,
    type: type || "text",
    multiline: false,
    placeholder: placeHolder(label.toLowerCase()),
    onChange: obj?.handleChange,
    value: obj?.values[fieldName],
    error: obj?.touched[fieldName] && Boolean(obj?.errors[fieldName]),
    helperText: obj?.touched[fieldName] && obj?.errors[fieldName],
    fullWidth: true
})


interface SELECT {
    label: string;
    value: string | number | null;
}


export const Selection = (obj: any, fieldName: string, placeholder: string, label: string) => ({
    id: fieldName,
    name: fieldName,  
    label: label,
    onChange: obj?.handleChange,
    value: obj?.values[fieldName],
    placeholder:placeholder , 
    error: obj?.touched[fieldName] && Boolean(obj?.errors[fieldName]),
    helperText: obj?.touched[fieldName] && obj?.errors[fieldName],
    fullWidth:true, 
})
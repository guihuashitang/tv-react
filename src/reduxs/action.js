export const ADDNAME = 'ADDNAME'
export const ADDAGE = 'ADDAGE'

export const addNameCreater = (name) =>({type:ADDNAME,data:name})
export const addAgeCreater = (age) => ({type:ADDAGE,data:age})
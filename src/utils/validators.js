const validators = {
    passwordValidate: (pass1, pass2) => {
        if(pass1 === pass2){
            return true
        }else{
            return false
        }
    },
    phoneValidate: (phone) => {
        const regex = /^[0-9]{11}$/
        const validate = regex.test(phone)
        return validate
    },
    thereAreNoNull: (data) => {
        const dataValues =  Object.values(data)
        dataValues.map(i => {
            if(i === ''){
                return false
            }
        })
        return true

    }

}

export default validators
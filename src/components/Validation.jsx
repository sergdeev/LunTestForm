export const validate = (values, step) => {
    const errors = {};
    switch (step) {
        case 0: {
            if(!values.name){
                errors.name = "Required";
            }

            if(!values.email){
                errors.email = "Required";
            }else if(!values.email.includes("@")) {
                errors.email = "- В адресе должен быть символ @";
            }

            break;
        }
        case 1: {
            if(!values.country){
                errors.country = "Required";
            }
            
            break;
        }
        default:
            break;
    }
return errors;
};

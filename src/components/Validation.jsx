import dog4 from "../images/dog4.jpg";

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
        case 3: {
            if(!values.avatar){
                errors.avatar = "Required";
            }else if(values.avatar === dog4){
                errors.avatar = "Вы выбрали собачку. А надо котика.";
            }
            
            break;
        }
        default:
            break;
    }
return errors;
};

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
            }else if(values.email.match(/^.*@.{1,}\..{2,}$/) == null) {
                if(!values.email.includes("@")){
                    errors.email = 'В адресе должен быть символ «@»';
                }else if(values.email.match(/^.*@.{1,}\.?.{0,1}$/) != null){
                    errors.email = 'Проверьте почтовый домен';
                }
                else{
                    errors.email = 'Введите корректный email';
                }
              }

            break;
        }
        case 1: {
            if(!values.country && values.city != "Страна"){
                errors.country = "Required";
            }
            
            if(!values.city && values.city != "Город"){
                errors.city = "Required";
            }

            break;
        }
        case 2: {
            if(values.fbIsChecked && !values.fbValue){
                errors.fbValue = "Required";
            }
            
            if(values.vkIsChecked && !values.vkValue){
                errors.vkValue = "Required";
            }

            if(values.okIsChecked && !values.okValue){
                errors.okValue = "Required";
            }

            if(values.twitIsChecked && !values.twitValue){
                errors.twitValue = "Required";
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

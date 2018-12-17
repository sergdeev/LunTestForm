import React from "react";


export default function ThirdStep(props){
    const addErrorClass = (error) => (error? 'invalid' : 'valid');

    const { onChangeSocial, values, onChange, errors } = props;
    return(
        <div className="social_container">
            <p>3. Отметьте социальные сети</p>
            <table>
                <tr>
                    <td><input 
                            type="checkbox" 
                            name="fbIsChecked" 
                            id="fbValue"
                            value={values.fbIsChecked} 
                            checked={values.fbIsChecked}
                            onChange={onChangeSocial}
                            /></td>
                    <td>Facebook</td>
                    {values.fbIsChecked? <td><input 
                            type="text" 
                            placeholder="Ваша страница в Facebook"
                            value={values.fbValue}
                            onChange={onChange}
                            name="fbValue"
                            className={`${addErrorClass(errors.fbValue)}`}
                            /></td>: <div></div>}
                </tr>
                <tr>{errors.fbValue ? <td className="error">{errors.fbValue}</td> : null}</tr>

                <tr>
                    <td><input 
                            type="checkbox" 
                            name="vkIsChecked" 
                            id="vkValue"
                            value={values.vkIsChecked} 
                            checked={values.vkIsChecked}
                            onChange={onChangeSocial}
                            /></td>
                    <td>Вконтакте</td>
                    {values.vkIsChecked? <td><input 
                            type="text" 
                            placeholder="Ваша страница в Facebook"
                            value={values.vkValue}
                            onChange={onChange}
                            name="vkValue"
                            className={`${addErrorClass(errors.vkValue)}`}
                            /></td>: <div></div>}
                </tr>
                <tr>{errors.vkValue ? <div className="error">{errors.vkValue}</div> : null}</tr>

                <tr>
                    <td><input 
                            type="checkbox" 
                            name="twitIsChecked" 
                            id="twitValue"
                            value={values.twitIsChecked} 
                            checked={values.twitIsChecked}
                            onChange={onChangeSocial}
                            /></td>
                    <td>Twitter</td>
                    {values.twitIsChecked? <td><input 
                            type="text" 
                            placeholder="Ваша страница в Facebook"
                            value={values.twitValue}
                            onChange={onChange}
                            name="twitValue"
                            className={`${addErrorClass(errors.twitValue)}`}
                            /></td>: <div></div>}
                </tr>
                <tr>{errors.twitValue ? <div className="error">{errors.twitValue}</div> : null}</tr>

                <tr>
                    <td><input 
                            type="checkbox" 
                            name="okIsChecked" 
                            id="okValue"
                            value={values.okIsChecked} 
                            checked={values.okIsChecked}
                            onChange={onChangeSocial}
                            /></td>
                    <td>Одноклассники</td>
                    {values.okIsChecked? <td><input 
                            type="text" 
                            placeholder="Ваша страница в Facebook"
                            value={values.okValue}
                            onChange={onChange}
                            name="okValue"
                            className={`${addErrorClass(errors.okValue)}`}
                            /></td>: <div></div>}
                </tr>
                <tr>{errors.okValue ? <div className="error">{errors.okValue}</div> : null}</tr>
            </table>
        </div>
    );
};


import React from "react";


export default class ThirdStep extends React.Component{
    addErrorClass = (error) => (error? 'invalid' : 'valid');
    render(){
        const { onChangeSocial, values, onChange, errors } = this.props;
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
                                className={`${this.addErrorClass(errors.fbValue)}`}
                                /></td>: <div></div>}
                        <td>{errors.fbValue ? <div className="error">{errors.fbValue}</div> : null}</td>
                    </tr>

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
                                className={`${this.addErrorClass(errors.vkValue)}`}
                                /></td>: <div></div>}
                        <td>{errors.vkValue ? <div className="error">{errors.vkValue}</div> : null}</td>
                    </tr>

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
                                className={`${this.addErrorClass(errors.twitValue)}`}
                                /></td>: <div></div>}
                        <td>{errors.twitValue ? <div className="error">{errors.twitValue}</div> : null}</td>
                    </tr>

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
                                className={`${this.addErrorClass(errors.okValue)}`}
                                /></td>: <div></div>}
                        <td>{errors.okValue ? <div className="error">{errors.okValue}</div> : null}</td>
                    </tr>
                </table>
            </div>
        );
    }
};


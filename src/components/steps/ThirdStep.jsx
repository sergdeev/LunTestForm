import React from "react";


export default function ThirdStep(props){
    const addErrorClass = (error) => (error? 'socialInput invalid' : 'socialInput valid');

    const { onChangeSocial, values, onChange, errors } = props;
    return(
        <div className="social_container">
            <div className="left">
                <div className="checkbox-group">
                    <input 
                        type="checkbox" 
                        name="fbIsChecked" 
                        id="fbValue"
                        value={values.fbIsChecked} 
                        checked={values.fbIsChecked}
                        onChange={onChangeSocial}
                        />
                    <label for="">Facebook</label>
                </div>
                <div className="checkbox-group">
                    <input 
                        type="checkbox" 
                        name="vkIsChecked" 
                        id="vkValue"
                        value={values.vkIsChecked} 
                        checked={values.vkIsChecked}
                        onChange={onChangeSocial}
                        />    
                    <label for="">Вконтакте</label>
                </div>
                <div className="checkbox-group">
                    <input 
                        type="checkbox" 
                        name="twitIsChecked" 
                        id="twitValue"
                        value={values.twitIsChecked} 
                        checked={values.twitIsChecked}
                        onChange={onChangeSocial}
                        />
                    <label for="">Twitter</label>
                </div>
                <div className="checkbox-group">
                    <input 
                        type="checkbox" 
                        name="okIsChecked" 
                        id="okValue"
                        value={values.okIsChecked} 
                        checked={values.okIsChecked}
                        onChange={onChangeSocial}
                        />
                    <label for="">Одноклассники</label>
                </div>
            </div>


            <div className="right">
                <div className="checkbox-group">
                    {values.fbIsChecked? 
                    <input 
                                type="text" 
                                placeholder="Ваша страница в Facebook"
                                value={values.fbValue}
                                onChange={onChange}
                                name="fbValue"
                                className={`${addErrorClass(errors.fbValue)}`}
                                />
                    : 
                    <div></div>}
                    {errors.fbValue ? <div className="error">{errors.fbValue}</div> : null}
                </div>
                <div className="checkbox-group">
                    {values.vkIsChecked? 
                    <input 
                                type="text" 
                                placeholder="Ваша страница во Вконтакте"
                                value={values.vkValue}
                                onChange={onChange}
                                name="vkValue"
                                className={`${addErrorClass(errors.vkValue)}`}
                                />
                    : 
                    <div></div>}
                    {errors.vkValue ? <div className="error">{errors.vkValue}</div> : null}
                </div>
                <div className="checkbox-group">
                    {values.twitIsChecked? 
                    <input 
                                type="text" 
                                placeholder="Ваша страница в Twitter"
                                value={values.twitValue}
                                onChange={onChange}
                                name="twitValue"
                                className={`${addErrorClass(errors.twitValue)}`}
                                />
                    : 
                    <div></div>}
                    {errors.twitValue ? <div className="error">{errors.twitValue}</div> : null}
                </div>
                <div className="checkbox-group">
                    {values.okIsChecked? 
                    <input 
                                type="text" 
                                placeholder="Ваша страница в Одноклассниках"
                                value={values.okValue}
                                onChange={onChange}
                                name="okValue"
                                className={`${addErrorClass(errors.okValue)}`}
                                />
                    : 
                    <div></div>}
                    {errors.okValue ? <div className="error">{errors.okValue}</div> : null}
                </div>
            </div>

        </div>
    );
};


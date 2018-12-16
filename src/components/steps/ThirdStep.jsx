import React from "react";


export default class ThirdStep extends React.Component{
    render(){
        const { onChangeSocial, values, onChange, errors } = this.props;
        return(
            <div>
               <p>3. Отметьте социальные сети</p>
					<table >
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
                                    /></td>: <div></div>}
						</tr>
                        <tr>{errors.fbValue ? <div>{errors.fbValue}</div> : null}</tr>

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
                                    /></td>: <div></div>}
						</tr>
                        <tr>{errors.vkValue ? <div>{errors.vkValue}</div> : null}</tr>

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
                                    /></td>: <div></div>}
						</tr>
                        <tr>{errors.twitValue ? <div>{errors.twitValue}</div> : null}</tr>

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
                                    /></td>: <div></div>}
						</tr>
                        <tr>{errors.okValue ? <div>{errors.okValue}</div> : null}</tr>
					</table>
            </div>
        );
    }
};


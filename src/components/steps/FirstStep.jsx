import React from "react";


export default class FirstStep extends React.Component{
    addErrorClass = (error) => (error? 'invalid' : 'valid');
    render(){
        const {values, onChange, errors} = this.props;
        return(
            <div>
                <p>1. Введите имя и e-mail</p>
                <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    className={`${this.addErrorClass(errors.name)}`}
                />
                    {errors.name ? <span className="error">{errors.name}</span> : null}
                <input
                    type="text"
                    placeholder="Почта"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    className={`${this.addErrorClass(errors.email)}`}
                />
                    {errors.email ? <span className="error">{errors.email}</span> : null}
            </div>
        );
    }
};


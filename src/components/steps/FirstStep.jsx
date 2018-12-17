import React from "react";


export default function FirstStep(props){
    const addErrorClass = (error) => (error? 'invalid' : 'valid');
    const {values, onChange, errors} = props;
    return(
        <div>
            <p>1. Введите имя и e-mail</p>
            <input
                type="text"
                placeholder="Имя"
                name="name"
                value={values.name}
                onChange={onChange}
                className={`${addErrorClass(errors.name)}`}
            />
                {errors.name ? <div className="error">{errors.name}</div> : null}
            <input
                type="text"
                placeholder="Почта"
                name="email"
                value={values.email}
                onChange={onChange}
                className={`${addErrorClass(errors.email)}`}
            />
                {errors.email ? <div className="error">{errors.email}</div> : null}
        </div>
    );
};


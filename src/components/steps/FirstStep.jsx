import React from "react";


export default class FirstStep extends React.Component{
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
                />
                    {errors.name ? <div>{errors.name}</div> : null}
                <input
                    type="email"
                    placeholder="Почта"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
                    {errors.email ? <div>{errors.email}</div> : null}
            </div>
        );
    }
};


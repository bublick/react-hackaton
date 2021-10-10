import React, { useEffect, useState } from "react";
import TextField from "./textField";

function Form() {
    const [data, setData] = useState({ name: "", phone: "" });
    const [errors, setErrors] = useState({});
    const [disable, setDisable] = useState(false);
    const [notification, setNotification] = useState('')
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `${fieldName} обязательно для заполнения`;
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        validate();
    }, [data]);
    const sendData = async () => {
            const rawResponse = await fetch('https://hook.integromat.com/sbp54p0ndkjvt2y6d94ynh8iq66wzavs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const content = await rawResponse;
            return content?.status === 200
    }
    const success = () => {
        setData({ name: "", phone: "" })
        setDisable(false)
        setNotification('Заявка успешно отправлена!')
    }
    const fail = () => {
        setDisable(false)
        setNotification('Возникла ошибка, попробуйте еще раз!')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        setDisable(true)
        sendData() ? success() : fail();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Ваше имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Номер телефона"
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            {<button disabled={!data.name || !data.phone || disable} >Отправить</button>}
            {notification !== '' && <p>{notification}</p>}
        </form>
    );
}

export default Form;

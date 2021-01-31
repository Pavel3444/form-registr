import classes from './FormContainer.module.css'
import FormHeader from "../FormHeader/FormHeader";
import FormContent from "../FormContent/FormContent";
import React from "react";

class FormContainer extends React.Component {

    state = {
        usersChecked: false,
        selectedLang: 'RU',
        totalValidate: false,
        langMap: {
            'RU': {
                selectLang: 'Русский',
                phoneTemplate: '+7 (___) ___-__-__',
                policy: {
                    href: 'https://google.com',
                    checked: false,
                    text: 'Принимаю условия использования',
                    linkText: 'условия',
                    linkIndex: 1,
                    linkLength: 1
                },
                header: {
                    formName: 'Регистрация',
                    text: 'Уже есть аккаунт?',
                    links: [
                        {
                            text: 'Войти',
                            href: 'https://google.com',
                        }
                    ]
                },
                inputs: [
                    {
                        label: 'Имя',
                        placeholder: 'Имя',
                        type: 'text',
                        error: 'Введено не корректное значение',
                        valid: false,
                        touched: false,
                        name: 'name'
                    },
                    {
                        label: 'Email',
                        placeholder: 'Введите ваш email',
                        type: 'email',
                        error: 'Введено не корректное значение',
                        valid: false,
                        touched: false,
                        name: 'email'
                    },
                    {
                        label: 'Номер телефона',
                        placeholder: 'Введите номер телефона',
                        type: 'tel',
                        error: 'Введено не корректное значение',
                        valid: false,
                        touched: false,
                        name: 'phone'
                    },
                ],
                buttons: [
                    {
                        text: 'Зарегистрироваться',
                        disabled: true,
                        type: 'submit'
                    },
                ],
                selects: [
                    {
                        label: 'Язык',
                        diasbledOption: 'Язык',
                        id: 'lang',
                    },
                ]
            },
            'EN': {
                selectLang: 'Английский',
                phoneTemplate: '+44 (____) __-__',
                policy: {
                    href: 'https://google.com',
                    checked: false,
                    text: 'I accept the terms of use',
                    linkText: 'terms of use',
                    linkIndex: 3,
                    linkLength: 3
                },
                header: {
                    formName: 'Registration',
                    text: 'Already have an account?',
                    links: [
                        {
                            text: 'To come in',
                            href: 'https://google.com',
                        }
                    ]
                },
                inputs: [
                    {
                        label: 'Name',
                        placeholder: 'Name',
                        type: 'text',
                        error: 'Incorrect value entered',
                        valid: false,
                        touched: false,
                        name: 'name'
                    },
                    {
                        label: 'Email',
                        placeholder: 'Enter your email',
                        type: 'email',
                        error: 'Incorrect value entered',
                        valid: false,
                        touched: false,
                        name: 'email'
                    },
                    {
                        label: 'Phone number',
                        placeholder: 'Enter your phone number',
                        type: 'tel',
                        error: 'Incorrect value entered',
                        valid: false,
                        touched: false,
                        name: 'phone'
                    },
                ],
                buttons: [
                    {
                        text: 'Register now',
                        disabled: true,
                        type: 'submit'
                    },
                ],
                selects: [
                    {
                        label: 'Language',
                        diasbledOption: 'Language',
                        id: 'lang',
                    },
                ]
            },
        }
    }

    setLangOptions = () => {
        const options = {};
        for (let key in this.state.langMap) {
            options[key] = this.state.langMap[key].selectLang;
        }
        return options;
    }

    changeLocale = (e) => {
        this.setState({
            selectedLang: e.target.getAttribute('data-value')
        })
    }

    checkPrivacy = () => {
        let totalValidate = true;
        this.state.langMap[this.state.selectedLang].inputs.forEach((el) => {
            if (el.valid === false) totalValidate = false;
        })
        totalValidate = !this.state.usersChecked ? totalValidate : false;

        this.setState({
            usersChecked: !this.state.usersChecked,
            totalValidate
        })

    }

    validation = (e) => {
        const langMap = JSON.parse(JSON.stringify(this.state.langMap));
        langMap[this.state.selectedLang].inputs.forEach(el => {
            if (el.name === e.target.getAttribute('name') && e.target.value.length > 0) {
                el.touched = true;

                if (el.name === 'name'){
                    let firstName = e.target.value.split(' ');
                    if (firstName[1]){
                       el.valid =  firstName[0].length>1 && firstName[1].length > 1;
                    }else{
                        el.valid =  firstName[0].length>1;
                    }
                }


                if (el.name === 'phone'){
                   el.valid = e.target.value.length === this.state.langMap[this.state.selectedLang].phoneTemplate.length;
                }


                if (el.name === 'email') {
                    let firstStep, secondStep, domenName;
                    firstStep = e.target.value.split('@') || null;
                    if (firstStep[1] && firstStep[0].length>1) {
                        secondStep = firstStep[1].split('.') || null;
                        if (secondStep[1] && secondStep[0].length>1) {
                            domenName = secondStep[1] || null;
                            el.valid = domenName.length>1;
                        }else  el.valid = false
                    }else  el.valid = false
                }

            }
        })

        let totalValidate = true;
        langMap[this.state.selectedLang].inputs.forEach((el) => {
            if (el.valid === false) totalValidate = false;
        })
        totalValidate = this.state.usersChecked ? totalValidate : false;


        this.setState({
            langMap,
            totalValidate
        })

    }




    render() {

        return (
            <div className={classes.FormContainer}>
                <FormHeader
                    headerCont={this.state.langMap[this.state.selectedLang].header}
                />
                <FormContent
                    formInputs={this.state.langMap[this.state.selectedLang].inputs}
                    formPolicy={this.state.langMap[this.state.selectedLang].policy}
                    formSelects={this.state.langMap[this.state.selectedLang].selects}
                    formButtons={this.state.langMap[this.state.selectedLang].buttons}
                    phoneTemplate={this.state.langMap[this.state.selectedLang].phoneTemplate}
                    totalValidate={this.state.totalValidate}
                    checkPrivacy={this.checkPrivacy}
                    setLangOptions={this.setLangOptions}
                    changeLocale={this.changeLocale}
                    validation={this.validation}
                />
            </div>
        )
    }
}

export default FormContainer;


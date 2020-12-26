import React, {ChangeEvent, FC} from 'react';
import {inputType} from "../../redux/reducers";
import style from './input.module.css';
import Answer from "../answer/Answer";

type callbackType = {
    changeInput: (inputId: string, currentValue: string) => void
    checkCurrentValue: (inputId: string) => void
    clear: (inputId: string) => void
}
type state = {
    state: inputType
}

type props = callbackType & state

const Input: FC<props> = ({state, changeInput, checkCurrentValue, clear}) => {

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeInput(state.id, e.target.value)
    }

    const checkBlock =
        <div className={style.answer}>
            {
                state.check ?
                    <Answer urlPhoto={state.urlPhoto}/>
                    :
                <div className={style.error}>
                    <span>Фууууск.. Ошибка..</span>
                </div>
            }
        </div>

    return <>
        <div className={style.label}><span>Загадка от {state.label}</span></div>
        <input className={style.input} type="text" placeholder={'Введи код!'} value={state.currentValue} onChange={changeInputValue}/>
        <div className={style.btnBlock}>
            <button onClick={() => checkCurrentValue(state.id)}>Проверить код!</button>
            <button onClick={() => clear(state.id)}>Зачистить поле!</button>
        </div>
        {
            !state.touch ? null : checkBlock
        }
    </>
}
export default Input
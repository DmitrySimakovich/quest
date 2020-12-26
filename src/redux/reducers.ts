// https://i.ibb.co/DCnZJxr/home.jpg
//     https://i.ibb.co/6J4Fn8B/mail.jpg
//         https://i.ibb.co/1rxvLrW/revera.jpg
//             https://i.ibb.co/h7Mv5FM/maiik.jpg
//                 https://i.ibb.co/BLc5LKn/moscow.jpg
//                     https://i.ibb.co/XbBVzyJ/china.jpg
//                         https://i.ibb.co/rw7TpWs/winter.jpg
//                             https://i.ibb.co/xD77hhM/beach.jpg
//                                 https://i.ibb.co/s17MXCS/fest.jpg
// https://i.ibb.co/CQpKcBH/suvlak.jpg



export const initialState = {
    inputs: [
        {
            id: 'sherlock',
            label: 'Шерлока Холмса',
            currentValue: '',
            checkCode: '042',
            urlPhoto: 'https://i.ibb.co/rw7TpWs/winter.jpg',
            check: false,
            touch: false
        },
        {
            id: 'watson',
            label: 'д-р Джона Ватсона',
            currentValue: '',
            checkCode: '102',
            urlPhoto: 'https://i.ibb.co/xD77hhM/beach.jpg',
            check: false,
            touch: false
        },
        {
            id: 'hudson',
            label: 'миссис Хадсон',
            currentValue: '',
            checkCode: '129',
            urlPhoto: 'https://i.ibb.co/h7Mv5FM/maiik.jpg',
            check: false,
            touch: false
        },
        {
            id: 'hooper',
            label: 'Молли Хупер',
            currentValue: '',
            checkCode: '930',
            urlPhoto: 'https://i.ibb.co/s17MXCS/fest.jpg',
            check: false,
            touch: false
        },
        {
            id: 'lestrade',
            label: '',
            currentValue: '',
            checkCode: '453',
            urlPhoto: 'https://i.ibb.co/1rxvLrW/revera.jpg',
            check: false,
            touch: false
        },
        {
            id: 'moriarty',
            label: 'Лестрейда',
            currentValue: '',
            checkCode: '571',
            urlPhoto: 'https://i.ibb.co/6J4Fn8B/mail.jpg',
            check: false,
            touch: false
        },
        {
            id: 'adler',
            label: 'Ирен Адлер',
            currentValue: '',
            checkCode: '443',
            urlPhoto: 'https://i.ibb.co/DCnZJxr/home.jpg',
            check: false,
            touch: false
        },
        {
            id: 'mary',
            label: 'Мэри Морстен',
            currentValue: '',
            checkCode: '100',
            urlPhoto: 'https://i.ibb.co/XbBVzyJ/china.jpg',
            check: false,
            touch: false
        },
        {
            id: 'mycroft',
            label: 'Майкрофта Холмса',
            currentValue: '',
            checkCode: '150',
            urlPhoto: 'https://i.ibb.co/CQpKcBH/suvlak.jpg',
            check: false,
            touch: false
        },
        {
            id: 'anderson',
            label: 'Андерсона',
            currentValue: '',
            checkCode: '456',
            urlPhoto: 'https://i.ibb.co/BLc5LKn/moscow.jpg',
            check: false,
            touch: false
        },
    ]
}

type state = {
    inputs: Array<inputType>
}
export type inputType = {
    id: string
    label: string
    currentValue: string
    checkCode: string
    urlPhoto: string
    check: boolean
    touch: boolean
}

export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
type actionsType = ReturnType<PropertiesType<typeof actions>>

export const reducer = (state: state = initialState, action: actionsType) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                inputs: state.inputs.map( i => {
                    if (i.id === action.inputId) {
                        return {...i, currentValue: action.currentValue}
                    }
                    return i
                })
            }
        case "CHECK_VERSION":
            return {
                ...state,
                inputs: state.inputs.map( i => {
                    if (i.id === action.inputId && i.currentValue === i.checkCode) {
                        return {...i, check: true, touch: true}
                    } else if (i.id === action.inputId && i.currentValue !== i.checkCode) {
                        return {...i, check: false, touch: true}
                    }
                    return i
                })
            }
        case "CLEAR":
            return {
                ...state,
                inputs: state.inputs.map( i => {
                    if (i.id === action.inputId) {
                        return {...i, currentValue: '', touch: false, check: false}
                    }
                    return i
                })
            }
        default:
            return state
    }
}

export const actions = {
    changeInput: (inputId: string, currentValue: string) => ({type: 'CHANGE_INPUT', inputId, currentValue} as const),
    checkCurrentValue: (inputId: string) => ({type: 'CHECK_VERSION', inputId} as const),
    clear: (inputId: string) => ({type: 'CLEAR', inputId} as const)
}


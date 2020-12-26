import React, {FC} from 'react';
import style from './answer.module.css';

type propsType = {
    urlPhoto: string
}

const Answer: FC<propsType> = (props) => {
    return <>
        <div className={style.textWrap}>
            <div className={style.text}>Ура!</div>
        </div>
        <img className={style.image} src={props.urlPhoto} />
    </>
}
export default Answer
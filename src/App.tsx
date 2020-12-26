import React from 'react';
import style from'./App.module.css';

import {NavLink} from "react-router-dom";
import {Route} from 'react-router-dom';
import Input from "./components/Input/Input";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "./redux/store";
import {actions} from "./redux/reducers";



function App(props: ConnectedProps<typeof connector>) {
  return <>
    <header>
      <div className={style.header}>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/sherlock'}>Шерлок</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/watson'}>Ватсон</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/hudson'}>Миссис Хадсон</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/hooper'}>Молли Хупер</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/lestrade'}>Лестрейд</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/moriarty'}>Мориарти</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/adler'}>Ирен Адлер</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/mary'}>Мэри</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/mycroft'}>Майкрофт</NavLink></div>
        <div className={style.linkBlock}><NavLink className={style.link} to={'/anderson'}>Андерсон</NavLink></div>
      </div>
    </header>
<div className={style.main}>
    <div className={style.contentWrap}>
      <div className={style.content}>
        <Route path={'/sherlock'} render={() => <Input state={props.sherlock} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/watson'} render={() => <Input state={props.watson} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/hudson'} render={() => <Input state={props.hudson} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/hooper'} render={() => <Input state={props.hooper} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
      <Route path={'/lestrade'} render={() => <Input state={props.lestrade} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
      <Route path={'/moriarty'} render={() => <Input state={props.moriarty} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
      <Route path={'/adler'} render={() => <Input state={props.adler} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/mary'} render={() => <Input state={props.mary} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/mycroft'} render={() => <Input state={props.mycroft} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>

      <div className={style.content}>
        <Route path={'/anderson'} render={() => <Input state={props.anderson} clear={props.clear} changeInput={props.changeInput} checkCurrentValue={props.checkCurrentValue}/>}/>
      </div>
    </div>
</div>
  </>
}
const mapStateToProps = (state: RootStateType) => {
  return {
    sherlock: state.page.inputs[0],
    watson: state.page.inputs[1],
    hudson: state.page.inputs[2],
    hooper: state.page.inputs[3],
    lestrade: state.page.inputs[4],
    moriarty: state.page.inputs[5],
    adler: state.page.inputs[6],
    mary: state.page.inputs[7],
    mycroft: state.page.inputs[8],
    anderson: state.page.inputs[9],
  }
}
const mapDispatchToProps = {
  changeInput: actions.changeInput,
  checkCurrentValue:actions.checkCurrentValue,
  clear: actions.clear
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(App);

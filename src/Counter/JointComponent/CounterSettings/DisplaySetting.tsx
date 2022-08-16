import React, {ChangeEvent} from 'react';
import styles from "../../Counter.module.css";


type DisplaySettingType = {
    MAXCOUNT: number
    MINCOUNT: number
    settingActive: boolean
    changeMAXCOUNT: (value: number)=>void
    changeMINCOUNT: (value: number)=>void
    setSettingActive: (value: boolean)=>void
    error: string | null
}

const DisplaySetting = (props: DisplaySettingType) => {
    const {MAXCOUNT, MINCOUNT, settingActive, changeMAXCOUNT, changeMINCOUNT,setSettingActive, error} = props

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMAXCOUNT(JSON.parse(e.currentTarget.value))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMINCOUNT(JSON.parse(e.currentTarget.value))
    }

    const onFocusHandler = () => {
        setSettingActive(true)
    }

    return (
        <div className={styles.display}>
            <div className={styles.settingValue}>
                <span>MAX</span>
                <input className={MAXCOUNT <= MINCOUNT ? styles.error : ''} onFocus={onFocusHandler} value={MAXCOUNT} onChange={onChangeMaxHandler} type="number"/>
            </div>
            <div className={styles.settingValue}>
                <span>MIN</span>
                <input className={error ? styles.error : ''} onFocus={onFocusHandler} value={MINCOUNT} onChange={onChangeMinHandler} type="number"/>
            </div>
        </div>

    );
};

export default DisplaySetting;
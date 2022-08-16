import React from 'react';
import styles from "../Counter.module.css";
import {FirstDisplay} from "./FirstDisplay";
import {CounterSettings} from "../JointComponent/CounterSettings/CounterSettings";


type CounterOneDisplayType = {
    countValue: number
    MAXCOUNT: number
    MINCOUNT: number
    settingActive: boolean
    error: string | null
    setting: () => void
    resetCountValue: () => void
    incCountValue: () => void
    setSettingActive: (setValue: boolean) => void
    changeMAXCOUNT: (value: number) => void
    changeMINCOUNT: (value: number) => void
}

export const CounterOneDisplay = (props: CounterOneDisplayType) => {

    const {
        countValue,
        MAXCOUNT,
        MINCOUNT,
        settingActive,
        error,
        resetCountValue,
        incCountValue,
        setting,
        setSettingActive,
        changeMAXCOUNT,
        changeMINCOUNT
    } = props
    return (
        <div className={styles.counterOneDisplay}>
            <div className={styles.counter}>
                <h3>Счетчик с одним дисплеем</h3>

                {!settingActive && <FirstDisplay countValue={countValue}
                                                 MAXCOUNT={MAXCOUNT}
                                                 MINCOUNT={MINCOUNT}
                                                 settingActive={settingActive}
                                                 error={error}
                                                 setting={setting}
                                                 resetCountValue={resetCountValue}
                                                 incCountValue={incCountValue}
                                                 setSettingActive={setSettingActive}
                />}
                {settingActive && <CounterSettings MAXCOUNT={MAXCOUNT}
                                                   MINCOUNT={MINCOUNT}
                                                   settingActive={settingActive}
                                                   error={error}
                                                   setting={setting}
                                                   setSettingActive={setSettingActive}
                                                   changeMAXCOUNT={changeMAXCOUNT}
                                                   changeMINCOUNT={changeMINCOUNT}
                />}
            </div>
        </div>
    );
};

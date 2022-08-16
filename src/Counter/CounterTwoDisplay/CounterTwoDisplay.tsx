import React from 'react';
import styles from "../Counter.module.css";
import {CounterSettings} from "../JointComponent/CounterSettings/CounterSettings";
import {SecondDisplayCounter} from "./SecondDisplayCounter/SecondDisplayCounter";

type CounterTwoDisplayType = {
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


export const CounterTwoDisplay = (props: CounterTwoDisplayType) => {
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
        <div className={styles.counterTwoDisplay}>
            <h3>Счетчик с двумя дисплеями</h3>
            <div className={styles.counter}>
                <CounterSettings MAXCOUNT={MAXCOUNT}
                                 MINCOUNT={MINCOUNT}
                                 settingActive={settingActive}
                                 error={error}
                                 setting={setting}
                                 setSettingActive={setSettingActive}
                                 changeMAXCOUNT={changeMAXCOUNT}
                                 changeMINCOUNT={changeMINCOUNT}
                />
            </div>
            <SecondDisplayCounter countValue={countValue}
                                  MAXCOUNT={MAXCOUNT}
                                  MINCOUNT={MINCOUNT}
                                  settingActive={settingActive}
                                  error={error}
                                  resetCountValue={resetCountValue}
                                  incCountValue={incCountValue}
            />
        </div>

    );
};

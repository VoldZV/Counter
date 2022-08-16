import React, {useState} from 'react';
import styles from '../../Counter.module.css'
import {DisplayCounter} from "./DisplayCounter";
import {ButtonBlock} from "./ButtonBlock";


type CounterType = {
    countValue: number
    MAXCOUNT: number
    MINCOUNT: number
    resetCountValue: ()=>void
    incCountValue: ()=>void
    settingActive: boolean
    error: string | null
}

export const SecondDisplayCounter = (props: CounterType) => {
    const {countValue, MAXCOUNT, MINCOUNT, resetCountValue,incCountValue, settingActive, error} = props
    return (
        <div className={styles.counter}>

            <DisplayCounter countValue={countValue}
                            MAXCOUNT={MAXCOUNT}
                            MINCOUNT={MINCOUNT}
                            settingActive={settingActive}
                            error={error}
            />
            <ButtonBlock countValue={countValue}
                         MINCOUNT={MINCOUNT}
                         MAXCOUNT={MAXCOUNT}
                         resetCountValue={resetCountValue}
                         incCountValue={incCountValue}
                         settingActive={settingActive}
            />
        </div>
    );
};

import React from 'react';
import styles from '../../Counter.module.css'
import {Button} from "../../JointComponent/Button/Button";

type ButtonBlockType = {
    countValue: number
    MINCOUNT: number
    MAXCOUNT: number
    settingActive: boolean
    incCountValue: ()=>void
    resetCountValue: ()=>void
}

export const ButtonBlock = (props: ButtonBlockType) => {
    const {countValue, MINCOUNT, MAXCOUNT, settingActive, incCountValue, resetCountValue} = props

    return (
        <div className={styles.buttonBlock}>
            <Button disabled={MAXCOUNT === countValue || settingActive} title={'INC'} callback={incCountValue}/>
            <Button disabled={MINCOUNT === countValue || settingActive} title={'RESET'} callback={resetCountValue}/>
        </div>
    );
};

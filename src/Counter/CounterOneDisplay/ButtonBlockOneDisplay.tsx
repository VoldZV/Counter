import React from 'react';
import styles from "../Counter.module.css";
import {Button} from "../JointComponent/Button/Button";


type ButtonBlockOneDisplayType = {
    countValue: number
    MINCOUNT: number
    MAXCOUNT: number
    settingActive: boolean
    error: string | null
    setting: () => void
    incCountValue: () => void
    resetCountValue: () => void
    setSettingActive: (setValue: boolean) => void
}

export const ButtonBlockOneDisplay = (props: ButtonBlockOneDisplayType) => {
    const {countValue, MINCOUNT, MAXCOUNT, settingActive, error, setting, incCountValue, resetCountValue, setSettingActive} = props

    const moveToSetting = () => {
        setSettingActive(true)
    }

    return (
        <div className={styles.buttonBlock}>
            <Button disabled={MAXCOUNT === countValue || settingActive}
                    title={'INC'}
                    callback={incCountValue}
            />
            <Button disabled={MINCOUNT === countValue || settingActive}
                    title={'RESET'}
                    callback={resetCountValue}
            />
            <Button disabled={false}
                    title={'SET'}
                    callback={moveToSetting}
            />
        </div>
    );
};

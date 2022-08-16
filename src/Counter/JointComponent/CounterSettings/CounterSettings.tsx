import React from 'react';
import DisplaySetting from "./DisplaySetting";
import styles from '../../Counter.module.css'
import {Button} from "../Button/Button";


type CounterSettingsType = {
    MAXCOUNT: number
    MINCOUNT: number
    settingActive: boolean
    error: string | null
    setting: () => void
    changeMAXCOUNT: (value: number) => void
    changeMINCOUNT: (value: number) => void
    setSettingActive: (value: boolean) => void
}

export const CounterSettings = (props: CounterSettingsType) => {
    const {MAXCOUNT, MINCOUNT, settingActive, error, setting, changeMAXCOUNT, changeMINCOUNT, setSettingActive} = props


    return (
        <div>
            <DisplaySetting MAXCOUNT={MAXCOUNT}
                            MINCOUNT={MINCOUNT}
                            settingActive={settingActive}
                            changeMAXCOUNT={changeMAXCOUNT}
                            changeMINCOUNT={changeMINCOUNT}
                            setSettingActive={setSettingActive}
                            error={error}
            />
            <div className={styles.buttonBlock}>
                <Button disabled={!settingActive || !!error}
                        title={'SET'}
                        callback={setting}
                />
            </div>
        </div>
    );
};

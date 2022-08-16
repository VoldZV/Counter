import React from 'react';
import {DisplayCounter} from "../CounterTwoDisplay/SecondDisplayCounter/DisplayCounter";
import {ButtonBlockOneDisplay} from "./ButtonBlockOneDisplay";
import styles from "../Counter.module.css";

type FirstDisplayType = {
    countValue: number
    MAXCOUNT: number
    MINCOUNT: number
    settingActive: boolean
    error: string | null
    setting: () => void
    resetCountValue: () => void
    incCountValue: () => void
    setSettingActive: (setValue: boolean) => void
}

export const FirstDisplay = (props: FirstDisplayType) => {
    const {countValue, MINCOUNT, MAXCOUNT, settingActive, error, setting, resetCountValue, incCountValue, setSettingActive} = props

    return (
        <div>
            <DisplayCounter countValue={countValue}
                            MAXCOUNT={MAXCOUNT}
                            MINCOUNT={MINCOUNT}
                            error={error}
                            settingActive={settingActive}
            />
            <ButtonBlockOneDisplay countValue={countValue}
                                   MAXCOUNT={MAXCOUNT}
                                   MINCOUNT={MINCOUNT}
                                   settingActive={settingActive}
                                   error={error}
                                   setting={setting}
                                   resetCountValue={resetCountValue}
                                   incCountValue={incCountValue}
                                   setSettingActive={setSettingActive}
            />
        </div>
    );
};

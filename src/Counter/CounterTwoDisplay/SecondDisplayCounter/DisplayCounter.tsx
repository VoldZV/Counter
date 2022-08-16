import React from 'react';
import styles from '../../Counter.module.css'

type DisplayCounterType = {
    MAXCOUNT: number
    MINCOUNT: number
    countValue: number
    settingActive: boolean
    error: string | null
}

export const DisplayCounter = (props: DisplayCounterType) => {
    const {MAXCOUNT, MINCOUNT, countValue, settingActive, error} = props

    return (
        <div className={styles.display}>
            {!error ? settingActive && <p className={styles.settingMessage}>ENTER VALUE AND PRESS SET</p> :
                <p className={styles.errorMessage}>{error}</p>}
            {(!settingActive && <div className={countValue === MAXCOUNT ? styles.maxCount : ''}>
                <div className={styles.info}>
                    <div>MAX {MAXCOUNT}</div>
                    <div>MIN {MINCOUNT}</div>
                </div>
                {countValue}
            </div>)}
        </div>
    );
};

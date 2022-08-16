import React, {useEffect, useState} from 'react';
import './App.css'
import {CounterOneDisplay} from "./Counter/CounterOneDisplay/CounterOneDisplay";
import {CounterTwoDisplay} from "./Counter/CounterTwoDisplay/CounterTwoDisplay";

function App() {

    const [MAXCOUNT, setMAXCOUNT] = useState(6)
    const [MINCOUNT, setMINCOUNT] = useState(0)
    const [countValue, setCountValue] = useState<number>(MINCOUNT)
    const [settingActive, setSettingActive] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const newMaxCount = localStorage.getItem('MAXCOUNT')
        const newMinCount = localStorage.getItem('MINCOUNT')
        if (newMaxCount) setMAXCOUNT(JSON.parse(newMaxCount))
        if (newMinCount) {
            setMINCOUNT(JSON.parse(newMinCount))
            setCountValue(JSON.parse(newMinCount))
        }
    }, [])

    // ЕСЛИ ТАК ПРОПИСАТЬБ ТО В LOCAL STORAGE ОБНОВЛЯЮТСЯ ДАННЫЕ БЕЗ НАЖАТИЯ НА КНОПКУ 'SET'
    // useEffect(() => {
    //     if(MINCOUNT < MAXCOUNT && MINCOUNT >= 0) localStorage.setItem('MINCOUNT', JSON.stringify(MINCOUNT))
    // }, [MINCOUNT])
    //
    // useEffect(() => {
    //     if(MINCOUNT < MAXCOUNT) localStorage.setItem('MAXCOUNT', JSON.stringify(MAXCOUNT))
    // }, [MAXCOUNT])

    const incCountValue = () => {
        setCountValue(countValue + 1)
    }

    const resetCountValue = () => {
        setCountValue(MINCOUNT)
    }

    const setting = () => {
        setSettingActive(false)
        setCountValue(MINCOUNT)
        localStorage.setItem('MINCOUNT', JSON.stringify(MINCOUNT))
        localStorage.setItem('MAXCOUNT', JSON.stringify(MAXCOUNT))
    }

    const changeMAXCOUNT = (value: number) => {
        if (value <= MINCOUNT) {
            setError('INVALID VALUES')
        } else {
            setError(null)
        }
        setMAXCOUNT(value)
    }

    const changeMINCOUNT = (value: number) => {
        if (value >= MAXCOUNT || value < 0) {
            setError('INVALID VALUES')
        } else {
            setError(null)
        }
        setMINCOUNT(value)
    }


    return (
        <div>
            <CounterTwoDisplay countValue={countValue}
                               MAXCOUNT={MAXCOUNT}
                               MINCOUNT={MINCOUNT}
                               settingActive={settingActive}
                               error={error}
                               setting={setting}
                               resetCountValue={resetCountValue}
                               incCountValue={incCountValue}
                               setSettingActive={setSettingActive}
                               changeMAXCOUNT={changeMAXCOUNT}
                               changeMINCOUNT={changeMINCOUNT}

            />

            <CounterOneDisplay countValue={countValue}
                               MAXCOUNT={MAXCOUNT}
                               MINCOUNT={MINCOUNT}
                               settingActive={settingActive}
                               error={error}
                               setting={setting}
                               resetCountValue={resetCountValue}
                               incCountValue={incCountValue}
                               setSettingActive={setSettingActive}
                               changeMAXCOUNT={changeMAXCOUNT}
                               changeMINCOUNT={changeMINCOUNT}
            />
        </div>
    );
}

export default App;

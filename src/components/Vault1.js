import { useNavigate } from "react-router-dom";
import styles from '../Vault1.module.css'
import { useState, useEffect, useRef } from "react";

let inputtedPassWd = [];

export default function Vault1(props) {

  const navigate = useNavigate();
  const targetRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    console.log('styles.vaultLog:', styles.vaultLog); // 클래스 이름 확인
    console.log('target:', target); // target 값 확인
    if (target) {
      console.log('요소확인')
    } else {
      console.error('요소를 찾을 수 없습니다.');
    }
  }, []);

  const reset = () => {
    const target = targetRef.current;
    inputtedPassWd = [];
    if (target) {
      target.textContent = '';
    } else {
      console.error('요소를 찾을 수 없습니다.');
    }
  }

  const open = async () => {
    const target = targetRef.current;
    inputtedPassWd = [];
    target.textContent = 'Open';
    setIsDisabled(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    target.textContent = '';
    setIsDisabled(false);
  }

  const passWdError = async () => {
    const target = targetRef.current;
    inputtedPassWd = [];
    target.textContent = 'Error';
    setIsDisabled(true);  // isDisabled를 true로 설정
    await new Promise(resolve => setTimeout(resolve, 1500));  // 1500밀리초 기다림
    target.textContent = '';
    setIsDisabled(false);
  }

  const addText = () => {
    const target = targetRef.current;
    if (target) {
        const targetText = document.createTextNode('*');
        target.appendChild(targetText);
    } else {
      console.error('요소를 찾을 수 없습니다.');
    }
  };
  const inputPassWd = (num) => {
    addText();
    inputtedPassWd.push(num);
  }

  return (
    <div>
      <div id={styles.vault} className="vault">
        <div className="vault" id={styles.closeVault} onClick={() => {
          navigate('/')
          inputtedPassWd = [];
        }}>
          <h3 id={styles.x_Btn}>X</h3>
        </div>
        <div id={styles.logpad} className="vault">
          <h1 id={styles.vaultLog} className="vault" ref={targetRef}>
          </h1>
        </div>
        <div id={styles.keypad} className="vault" >
          <button id={styles.btn1} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(1);
            } else {
              return undefined;
            }
          }}>1</button>
          <button id={styles.btn2} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(2);
            } else {
              return undefined;
            }
          }}>2</button>
          <button id={styles.btn3} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(3);
            } else {
              return undefined;
            }
          }}>3</button>
          <button id={styles.btn4} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(4);
            } else {
              return undefined;
            }
          }}>4</button>
          <button id={styles.btn5} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(5);
            } else {
              return undefined;
            }
          }}>5</button>
          <button id={styles.btn6} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(6);
            } else {
              return undefined;
            }
          }}>6</button>
          <button id={styles.btn7} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(7);
            } else {
              return undefined;
            }
          }}>7</button>
          <button id={styles.btn8} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(8);
            } else {
              return undefined;
            }
          }}>8</button>
          <button id={styles.btn9} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(9);
            } else {
              return undefined;
            }
          }}>9</button>
          <button id={styles.btn0} className="vault btns" disabled={isDisabled} onClick={() => {
            if (inputtedPassWd.length < 4) {
              inputPassWd(0);
            } else {
              return undefined;
            }
          }}>0</button>
        </div>
        <button id={styles.checkPasswd} className="vault" onClick={() => {
          if (JSON.stringify([props.first, props.second, props.third, props.fourth]) === JSON.stringify(inputtedPassWd)) {
            alert('비밀번호가 맞습니다');
            open();
          } else {
            alert('비밀번호가 틀립니다');
            passWdError();
          }
        }
        }>비밀번호 확인</button>
        <button id={styles.reset} onClick={reset}>재입력</button>
      </div>
    </div>
  )
};
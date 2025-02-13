import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import styles from '../Vault3.module.css'

export default function Vault3() {

    const navigate = useNavigate();
    let variable13 = '0';
    let variable23 = '0';
    let variable33 = '0';
    let variable43 = '0';
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);
    
    return (
        <div id={styles.vault} className={styles.vault}>
            <div className={styles.vault} id={styles.closeVault} onClick={ () =>{
                navigate('/');
                variable13 = '0';
                variable23 = '0';
                variable33 = '0';
                variable43 = '0';}}>
        <h3 id={styles.x_Btn}>X</h3>
        </div>
        <div id={styles.firstLine}></div>
        <div id={styles.secondLine}></div>
        <div id={styles.thirdLine}></div>
        <div id={styles.fourthLine}></div>

        <div id={styles.firstBtn} ref={targetRef1} onClick={ () => {
        switch(variable13) {
            case '0': targetRef1.current.style.bottom = '125px';
                    variable13 = '1';
                    break;
            case '1': targetRef1.current.style.bottom = '250px'; 
                    variable13 ='2';
                    break;
            case '2': targetRef1.current.style.bottom = '350px'; 
                    variable13 ='3'
                    break;
            case '3': targetRef1.current.style.bottom = '25px'; 
                    variable13 ='0'
                    break;
        }    if (variable13+variable23+variable33+variable43  ==='0123') {
            setTimeout(function () {alert('확인되었습니다.');}, 250);
        }}}></div>
        <div id={styles.secondBtn} ref={targetRef2} onClick={ () => {
        switch(variable23) {
            case '0': targetRef2.current.style.bottom = '125px';
                    variable23 = '1';
                    break;
            case '1': targetRef2.current.style.bottom = '250px'; 
                    variable23 ='2';
                    break;
            case '2': targetRef2.current.style.bottom = '350px'; 
                    variable23 ='3'
                    break;
            case '3': targetRef2.current.style.bottom = '25px'; 
                    variable23 ='0'
                    break;
        }    if (variable13+variable23+variable33+variable43 ==='0123') {
            setTimeout(function () {alert('확인되었습니다.');}, 250);
        }}}></div>
        <div id={styles.thirdBtn} ref={targetRef3} onClick={ () => {
        switch(variable33) {
            case '0': targetRef3.current.style.bottom = '125px';
                    variable33 = '1';
                    break;
            case '1': targetRef3.current.style.bottom = '250px'; 
                    variable33 ='2';
                    break;
            case '2': targetRef3.current.style.bottom = '350px'; 
                    variable33 ='3'
                    break;
            case '3': targetRef3.current.style.bottom = '25px'; 
                    variable33 ='0'
                    break;
        }    if (variable13+variable23+variable33+variable43 ==='0123') {
            setTimeout(function () {alert('확인되었습니다.');}, 250);
    }}}></div>
        <div id={styles.fourthBtn} ref={targetRef4} onClick={ () => {
        switch(variable43) {
            case '0': targetRef4.current.style.bottom = '125px';
                    variable43 = '1';
                    break;
            case '1': targetRef4.current.style.bottom = '250px'; 
                    variable43 ='2';
                    break;
            case '2': targetRef4.current.style.bottom = '350px'; 
                    variable43 ='3'
                    break;
            case '3': targetRef4.current.style.bottom = '25px'; 
                    variable43 ='0'
                    break;
        }    if (variable13+variable23+variable33+variable43 ==='0123') {
            setTimeout(function () {alert('확인되었습니다.');}, 250);
        }}}></div>
    </div>
    );
};
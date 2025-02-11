import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Vault2.module.css'

export default function Vault2 (props) {

    let variable12 = '0';
    let variable22 = '0';
    let variable32 = '0';
    const navigate = useNavigate();
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);

    return(
    <div id={styles.vault} className={styles.vault}>
        <div className={styles.vault} id={styles.closeVault} onClick={ () =>{
            navigate('/');
            variable12 = '0';
            variable22 = '0';
            variable32 = '0';}}>
    <h3 id={styles.x_Btn}>X</h3>
    </div>
    <div id={styles.button1} onClick={ () => {
    switch(variable12) {
        case '0' : 
        variable12 = '1';
        targetRef1.current.textContent = '1'
        break;
        case '1' : 
        variable12 = '2';
        targetRef1.current.textContent = '2'
        break;
        case '2' : 
        variable12 = '3';
        targetRef1.current.textContent = '3'
        break;
        case '3' : 
        variable12 = '4';
        targetRef1.current.textContent = '4'
        break;
        case '4' : 
        variable12 = '5';
        targetRef1.current.textContent = '5'
        break;
        case '5' : 
        variable12 = '6';
        targetRef1.current.textContent = '6'
        break;
        case '6' : 
        variable12 = '7';
        targetRef1.current.textContent = '7'
        break;
        case '7' : 
        variable12 = '8';
        targetRef1.current.textContent = '8'
        break;
        case '8' : 
        variable12 = '9';
        targetRef1.current.textContent = '9'
        break;
        case '9' : 
        variable12 = '0';
        targetRef1.current.textContent = '0'
        break;
        default :
        variable12 = '0';
        targetRef1.current.textContent = '0'
        break;
    } if(variable12+variable22+variable32 === props.passWd) {
        setTimeout(function () {alert('금고 해제중....');}, 250);
}}}>
    <h1 id={styles.vault1} ref={targetRef1} className={styles.targets}>0</h1>
</div>        
    <div id={styles.button2} onClick={ () => {
    switch(variable22) {
        case '0' : 
        variable22 = '1';
        targetRef2.current.textContent = '1'
        break;
        case '1' : 
        variable22 = '2';
        targetRef2.current.textContent = '2'
        break;
        case '2' : 
        variable22 = '3';
        targetRef2.current.textContent = '3'
        break;
        case '3' : 
        variable22 = '4';
        targetRef2.current.textContent = '4'
        break;
        case '4' : 
        variable22 = '5';
        targetRef2.current.textContent = '5'
        break;
        case '5' : 
        variable22 = '6';
        targetRef2.current.textContent = '6'
        break;
        case '6' : 
        variable22 = '7';
        targetRef2.current.textContent = '7'
        break;
        case '7' : 
        variable22 = '8';
        targetRef2.current.textContent = '8'
        break;
        case '8' : 
        variable22 = '9';
        targetRef2.current.textContent = '9'
        break;
        case '9' : 
        variable22 = '0';
        targetRef2.current.textContent = '0'
        break;
        default : 
        variable22 = '0';
        targetRef2.current.textContent = '0'
        break;
    } if(variable12+variable22+variable32 === props.passWd) {
        setTimeout(function () {alert('금고 해제중....');}, 250);
        }}}>
    <h1 id={styles.vault2} ref={targetRef2} className={styles.targets}>0</h1>
    </div>
    <div id={styles.button3} onClick={ () => {
    switch(variable32) {
        case '0' : 
        variable32 = '1';
        targetRef3.current.textContent = '1'
        break;
        case '1' : 
        variable32 = '2';
        targetRef3.current.textContent = '2'
        break;
        case '2' : 
        variable32 = '3';
        targetRef3.current.textContent = '3'
        break;
        case '3' : 
        variable32 = '4';
        targetRef3.current.textContent = '4'
        break;
        case '4' : 
        variable32 = '5';
        targetRef3.current.textContent = '5'
        break;
        case '5' : 
        variable32 = '6';
        targetRef3.current.textContent = '6'
        break;
        case '6' : 
        variable32 = '7';
        targetRef3.current.textContent = '7'
        break;
        case '7' : 
        variable32 = '8';
        targetRef3.current.textContent = '8'
        break;
        case '8' : 
        variable32 = '9';
        targetRef3.current.textContent = '9'
        break;
        case '9' : 
        variable32 = '0';
        targetRef3.current.textContent = '0'
        break;
        default :
        variable32 = '0';
        targetRef3.current.textContent = '0'
        break;
    } if(variable12+variable22+variable32 === props.passWd) {
           setTimeout(function () {alert('금고 해제중....');}, 250);
        }}}>
    <h1 id={styles.vault3} ref={targetRef3} className={styles.targets}>0</h1>
    </div>
</div> );
}
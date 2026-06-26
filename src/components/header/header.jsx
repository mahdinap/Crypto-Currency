import styles from "./header.module.css"
export default function Header(){
    return(
        <>
        <div className={styles.container} >
        <a href=""><img src="/src/assets/5341451.png" alt="logo" className={styles.logo}/></a>

        <div>
            <ul className={styles.list}>
                <li><a href="">Api</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Licenses</a></li>
                <li><a href="">About us</a></li>
            </ul>
        </div>
        <div className={styles.btn}>
            <button className={styles.btn1}>btn1</button>
            <button className={styles.btn2}>btn2</button>
        </div>
        
        </div>
        </>
    )
}
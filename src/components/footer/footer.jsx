import styles from "./footer.module.css"
export default function Footer(){
    return(
        <>
        
        <div className={styles.container}>
        <div>
            <h4>Products</h4>
            <ul>
                <li><a href="">What's New</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Collaboration</a></li>
                <li><a href="">Protyping</a></li>
                <li><a href="">Developer handoff</a></li>
                <li><a href="">All Features</a></li>
            </ul>
        </div>
        <div>
            <h4>Products</h4>
            <ul>
                <li><a href="">What's New</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Collaboration</a></li>
                <li><a href="">Protyping</a></li>
                <li><a href="">Developer handoff</a></li>
                <li><a href="">All Features</a></li>
            </ul>
        </div>
        <div>
            <h4>Products</h4>
            <ul>
                <li><a href="">What's New</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Collaboration</a></li>
                <li><a href="">Protyping</a></li>
                <li><a href="">Developer handoff</a></li>
                <li><a href="">All Features</a></li>
            </ul>
        </div>
        <div>
            <h4>Products</h4>
            <ul>
                <li><a href="">What's New</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Collaboration</a></li>
                <li><a href="">Protyping</a></li>
                <li><a href="">Developer handoff</a></li>
                <li><a href="">All Features</a></li>
            </ul>
        </div>
        </div>
        <hr />
        <div className={styles.downfooter}>

        <div className={styles.footerNote}>
            <h3>Never miss on News</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur quisquam cumque consequuntur fugit fugiat magnam omnis eveniet provident eos rerum autem, nihil recusandae quas sapiente. Similique, sed asperiores cumque a reprehenderit sit consectetur ipsam.</p>
        </div>

        <div className={styles.emailBox}>
            <input className={styles.emailInput} type="text" placeholder="example@gmail.com" />
            <button>Join</button>
            <div className={styles.checkBox}>
                <input type="checkbox"/>
                <span>I agree to receive E-mail</span>
            </div>
        </div>
        </div>
        </>
    )
}
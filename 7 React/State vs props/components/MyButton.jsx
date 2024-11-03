import styles from "../style_temp_button.module.css"


export default MyButtonTemp = ({ children }) => {
    console.log(styles);
    return (
        <>
            <button className={styles.button}>{children}</button>
            {/* <div className={`${styles['text-cyan-400']} bg-black font-bold p-2 text-xl`}>HELLO</div> */}
            <div className={[styles['text-cyan-400'], "bg-black font-bold p-2 text-xl"].join(" ")}>HELLO</div>
        </>
    );
}
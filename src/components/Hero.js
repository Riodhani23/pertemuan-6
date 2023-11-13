import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Loki</h2>
                    <h3 className={styles.hero__genre}>Genre: Drama, Sci-fi & Fantasy</h3>
                    <p className={styles.hero__descrption}>Penjahat lincah Loki melanjutkan perannya sebagai Dewa Mischief setelah peristiwa "Avengers: Endgame".

Michael Waldron</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image} src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/N1hWzVPpZ8lIQvQskgdQogxdsc.jpg" alt="placeholder"/>
                </div>
            </section>
        </div>
    );
}

export default Hero;
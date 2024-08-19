import Header from "./components/Header";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import SearchButton from "./components/Search";
import AboutHome from "./components/About";

export default function Home() {
  return (
    <div>
      <Header />
      <nav></nav>
      <main className={styles.main}>
        <SearchButton />
        <AboutHome />
      </main>
      <Footer />
    </div>
  );
}

import Header from "./components/Header";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Residence from "./components/Residence";
import SearchButton from "./components/Search";
import AboutHome from "./components/About";
import Newsletter from "./components/Newsletter";

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

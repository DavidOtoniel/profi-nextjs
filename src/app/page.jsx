import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/component/Header/Header";
import Services from "@/component/services/Services";
import Testimonial from "@/component/Testimonial/Testimonial";
import Faqs from "@/component/Fasqs/Faqs";

export default function Home() {
  return (
    <main >
      <Header></Header>
      <Services></Services>
      <Testimonial></Testimonial>
      <Faqs></Faqs>
    </main>
  );
}

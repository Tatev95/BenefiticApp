import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Team from "./team";
import Packages from "./packages";


export default function Home() {
  //   useEffect(() => {
  //     alert('aaaa')
  // },[])
  return (
    <div style={{backgroundColor: '#FFF'}}>
      <Team />
      <Packages/>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import Header from '../components/Header';
import Template from '../components/Template';
import Layout from '../layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Card />
        <Template />
      </Layout>
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import H1 from '../components/Heading'
import Body from '../components/Body'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Demo = styled.div`
background-color: red;
width: 200px;
height: 150px;
`;

export default function Home() {
  return (
    <Body>
      <Header>Header</Header>
      <Main>
      Main
      <H1>H1</H1>
      </Main>
      <Footer>Footer</Footer>
    </Body>
  );
}

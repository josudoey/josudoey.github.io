import type {ReactNode} from 'react';
import  {useEffect} from 'react';
import Layout from '@theme/Layout';


export default function Home(): ReactNode {
  useEffect(()=>{
    window.location.href="about"
  })
  return (
    <Layout></Layout>
  );
}

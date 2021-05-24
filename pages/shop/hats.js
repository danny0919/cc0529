import Layout from '../../components/layout/Layout'
import HatContainer from '../../components/shop/hat/Hatcontainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop/hats')
  const hat = await response.json()

  return{
    props:{
      hat
    }
  }
}


export default function Home({hat}) {
  return (
    <Layout>      
        <HatContainer  hat={hat} />      
    </Layout>
  )
}

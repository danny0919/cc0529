import Layout from '../../components/layout/Layout'
import SneakerContainer from '../../components/shop/sneaker/SneakerContainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop/sneakers')
  const sneaker = await response.json()

  return{
    props:{
        sneaker
    }
  }
}


export default function Home({sneaker}) {
  return (
    <Layout>      
        <SneakerContainer  sneaker={sneaker} />      
    </Layout>
  )
}

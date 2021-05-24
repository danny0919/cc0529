import Layout from '../../components/layout/Layout'
import  MenContainer from '../../components/shop/men/MenContainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop/mens')
  const men = await response.json()

  return{
    props:{
        men
    }
  }
}


export default function Home({men}) {
  return (
    <Layout>      
        <MenContainer  men={men} />      
    </Layout>
  )
}

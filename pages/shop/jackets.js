import Layout from '../../components/layout/Layout'
import JacketContainer from '../../components/shop/jacket/JacketContainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop/jackets')
  const jacket = await response.json()

  return{
    props:{
        jacket
    }
  }
}


export default function Home({jacket}) {
  return (
    <Layout>      
        <JacketContainer  jacket={jacket} />      
    </Layout>
  )
}

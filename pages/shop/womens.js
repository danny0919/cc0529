import Layout from '../../components/layout/Layout'
import WomenContainer from '../../components/shop/women/WomenContainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop/womens')
  const women = await response.json()

  return{
    props:{
        women
    }
  }
}


export default function Home({women}) {
  return (
    <Layout>      
        <WomenContainer  women={women} />      
    </Layout>
  )
}

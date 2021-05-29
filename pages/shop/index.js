import Layout from '../../components/layout/Layout'
import ShopContainer from '../../components/shop/ShopContainer'

export async function getServerSideProps(){
  const response= await fetch('https://dry-wave-60207.herokuapp.com/api/shop')
  const shop = await response.json()

  return{
    props:{
      shop
    }
  }
}


export default function Home({shop}) {
  return (
    <Layout>        
        <ShopContainer key={shop[0].cid} shop={shop} />
    </Layout>
  )
}

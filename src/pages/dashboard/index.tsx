import { GetServerSideProps } from "next"
import Head from "next/head"

import {getSession} from 'next-auth/react'

function Dashboard() {
  return (
    <div>
        <Head>
            <title>Meu painel de Tarefas</title>
        </Head>
        <h1>Pagina painel</h1>
    </div>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async({req}) => {
  const session = await getSession({req})
  // console.log(session)

  if(!session?.user){
    //Se nao tem o usuario, vamos redirecionar para home
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
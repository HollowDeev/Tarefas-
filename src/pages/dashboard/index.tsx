import { GetServerSideProps } from "next"
import Head from "next/head"
import {getSession} from 'next-auth/react'
import {FiShare2} from 'react-icons/fi'
import {FaTrash} from 'react-icons/fa'

import TextArea from "@/components/textarea"
import { ChangeEvent, FormEvent, useState } from "react"

import { db } from "../../services/firebaseConnection";


import { addDoc, collection } from "firebase/firestore";

interface HomeProps {
  user: {
    email: string
  }
}

function Dashboard({user}: HomeProps) {

  const [input, setInput] = useState('')
  const [publicTask, setPublicTesk] = useState(false)

  const handleChangePublic = (e:ChangeEvent<HTMLInputElement>) => {
    setPublicTesk(e.target.checked)
  }

  const handleRegisterTask = async(e: FormEvent) => {
    e.preventDefault()
    if(input === '') return
    
    try{
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: user?.email,
        public: publicTask,
      });

      setInput('')
      setPublicTesk(false)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="w-full">
        <Head>
            <title>Meu painel de Tarefas</title>
        </Head>
        <main>
          <section className="w-full bg-dark-gray flex justify-center items-center">
            <div className="max-w-5xl w-full px-4 pb-8 mt-10">
              <h1 className="text-white">Qual sua tarefa?</h1>
              <form onSubmit={handleRegisterTask}>
                <TextArea 
                placeholder="Digite a sua tarefa" 
                value={input} 
                onChange={(e:ChangeEvent<HTMLTextAreaElement>) =>     setInput(e.target.value)}
                />
                <div className="flex items-center">
                  <input 
                  type="checkbox" 
                  id="tornarpublico" 
                  className="w-4 h-4 cursor-pointer"
                  checked={publicTask}
                  onChange={handleChangePublic}
                  />
                  <label htmlFor="tornarpublico" className="ml-2 text-white">Deixar tarefa pública?</label>
                </div>
                <button type="submit" className="w-full text-white bg-purple-800 rounded-full py-2 mt-8 hover:bg-transparent hover:outline hover:outline-1 hover:outline-purple-800 hover:text-purple-600">Registrar</button>
              </form>
            </div>
          </section>
          <section className="mt-8 mx-auto w-full max-w-5xl px-4 pb-8 flex flex-col gap-6">
            <h1 className="text-center text-3xl font-bold mb-3">
              Minhas Tarefas</h1>
            <article className="flex bg-purple-200 rounded-xl  flex-col items-start p-4">
              <div className="flex items-center justify-center mb-2">
                <label className="px-2 py-1 bg-purple-700 rounded-2xl text-white">PUBLICA</label>
                <button className="mx-2 rounded-full hover:bg-white p-2 transition-all">
                  <FiShare2 
                    size={22}
                    color='#6b21a8'
                  />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="whitespace-pre-wrap">Minha primeira tarefa de exemplo. Top dms!</p>
                <button className="mx-2 rounded-full bg-red-700 p-[10px] transition-all hover:translate-x-[-5px]">
                  <FaTrash size={19} color='#fff'/>
                </button>
              </div>
            </article>

          </section>
        </main>
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
    props: {
      user: {
        email: session?.user?.email
      }
    }
  }
}
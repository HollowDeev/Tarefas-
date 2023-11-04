import Link from "next/link"
import {useSession, signIn, signOut} from 'next-auth/react'

const Header = () => {
    const {data: session, status} = useSession()

  return (
    <header className="w-full h-16 bg-dark-gray flex justify-center items-center">
        <section className="w-full px-4 max-w-5xl flex items-center justify-between">
            <nav className="flex items-center">
                <Link href='/' >
                    <h1 className="text-white text-2xl font-bold ">
                        Tarefas
                        <span className="text-purple-600">+</span>
                    </h1>
                </Link>
                {session?.user &&
                    <Link href='/dashboard' className="bg-gray-300 text-dark-gray py-1 px-4 rounded-md mx-4">
                        Meu Painel
                    </Link>
                }
            </nav>
            {status === 'loading' ? (
                <>
                </>
            ) : session ?(
                <button className="bg-transparent px-8 py-2 border-solid border-white text-white border rounded-full hover:bg-white hover:text-black transition-all" onClick={() => signOut()}>Olá {session?.user?.name}</button>
            ) : (
                <button className="bg-transparent px-8 py-2 border-solid border-white text-white border rounded-full hover:bg-white hover:text-black transition-all" onClick={() => signIn("google")}>Acessar</button>
            )}
        </section>
    </header>
  )
}

export default Header
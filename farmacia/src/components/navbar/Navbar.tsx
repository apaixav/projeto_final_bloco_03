
import { Link, } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className='w-full bg-pink-800 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/Home' className='text-2xl font-bold'>Farmácia</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/Categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
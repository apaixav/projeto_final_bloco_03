
import { Link, } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className='w-full bg-pink-800 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                <Link to='' className='text-2xl font-bold'>Farmácia</Link>

                    <div className='flex gap-4'>
                        <Link to='/Produto' className='hover:underline'>Produto</Link>
                        <Link to='/Categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
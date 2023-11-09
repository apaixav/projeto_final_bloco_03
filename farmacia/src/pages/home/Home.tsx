
function Home() {
    return (
        <>
            <div className="bg-pink-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem Vindos a Farmácia!
                        </h2>
                        <p className='text-xl'>
                            Compre aqui seus medicamentos
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-[48rem]">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2300/2300438.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
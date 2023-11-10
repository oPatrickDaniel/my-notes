
export default function HeaderCmp() {
    return (
        <>
            <header className="bg-gray-700 p-4">
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center flex-wrap text-white">
                        <div className="logo text-white text-xl font-bold">Minha Anotações</div>
                        <div className="hidden md:flex flex-grow justify-end items-center space-x-4">
                            <a href="./" >Lógica</a>
                            <a href="./htmlPage">Html</a>
                            <a href="./cssPage">Css</a>
                            <a href="./javascriptPage">Javascript</a>
                            <a href="./jqueryPage">Jquery</a>
                            <a href="./reactPage">React</a>
                            <a href="./typescriptPage">Typescript</a>
                        </div>
                        <div className="flex md:hidden">
                            <button className="text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
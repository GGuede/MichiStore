import img1 from '../Image/LogoIzq.png';

function Navbar () {
    return(
        <header id="header" class="header">
            <nav class="navHead ">
                <h1>MichiStore</h1>
                <div class="divNavHead">
                    <div class="divLogo">
                        <img src={img1} alt="" class="logo"/>
                    </div>
                    <div class="divCategorias">
                        <ul class="categorias">
                            <li class="liCategorias"><p class="textNavbar">Alimentos</p></li>
                            <li class="liCategorias"><p class="textNavbar">Entretenimiento</p></li>
                            <li class="liCategorias"><p class="textNavbar">Limpieza</p></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
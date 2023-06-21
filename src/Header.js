import './styles/App.css'

const Header = () => {

    console.log('Header is rendering.');

    return (
        <header>
            <div class="wrapper">
                <h1>Cuisine-based recipes!</h1>
                {/* <h1><span class="headerSpan">Cuisine-based recipes!</span></h1> */}
            </div>
        </header>
    )
}

export default Header;
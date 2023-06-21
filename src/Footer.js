import './styles/App.css';


const Footer = () => {

    console.log('Footer is rendering.');

    return (
        <footer>
            <div class="wrapper">
                {/* Adding link to Juno's page - to be opened in a new tab */}
                <a href="https://www.junocollege.com" target="_blank" rel="noreferrer"><p>Created at Juno College</p></a>
            </div>
        </footer>
    )
}

export default Footer;
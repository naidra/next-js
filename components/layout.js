import Link from "next/link";

export default ({ children, title }) => (
    <div className="app-container">
        <header>
            <div className="inner-wrapp">
                <div className="above-nav">
                    <Link href="/">
                        <a><img className="app-logo" src="/static/logo.jpg" /></a>
                    </Link>
                    <h2>{ title }</h2>
                </div>
                <nav>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                </nav>
            </div>
        </header>
        <main className="main-content">
            <div className="inner-wrapp">
                { children }
            </div>
        </main>
        <footer>
            <div className="inner-wrapp">
                <p>&copy; { new Date().getFullYear() }</p>
            </div>
        </footer>
        <style>{`
            * {
                margin:0;
                padding:0;
                box-sizing:border-box;
            }
        `}</style>
        <style jsx>{`
            .app-logo {
                width:100%;
                max-width:200px;
                max-height:200px;
                object-fit:cover;
            }
            .app-container {
                display:flex;
                flex-direction:column;
                min-height:100vh;
            }
            .main-content {
                flex:1;
            }
            .above-nav {
                display:flex;
                align-items:flex-end;
            }
            .above-nav h2 {
                padding-left:1em;
            }
            nav {
                padding:2em 0 1em;
            }
            nav a {
                padding:.5em;
                border-radius:4px;
                margin-right:1em;
                background:#ffffff;
                color:#000;
                text-decoration:none;
            }
            header, main, footer {
                padding:0 1em 0 1em;
            }
            header .inner-wrapp,
            main .inner-wrapp,
            footer .inner-wrapp {
                width:100%;
                max-width:1400px;
                margin:auto;
            }
            header {
                padding-top:2em;
                background:#3b5998;
                color:#ffffff;
            }
            footer {
                background:#0747a6;
                padding:1em;
            }
            footer .inner-wrapp {
                color:#ffffff;
                font-size:14px;
                font-weight:500;
            }
        `}</style>
    </div>
);
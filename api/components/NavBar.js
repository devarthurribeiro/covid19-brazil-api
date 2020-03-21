const NavBar = () => (
  <div>
    <nav>
      <div className="item">
        <h1 className="title">
          <a href="./">COVID-19 Brazil API</a>
        </h1>
        <img src="/logo.svg" width="40px" className="logo" />
      </div>
      <div className="item">
        <a href="https://github.com/devarthurribeiro/covid19-brazil-api/">Docs</a>
      </div>
    </nav>

    <style jsx>{`

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #202124;
        height: 64px;
        padding: 0 20px;
      }

      nav .item {
        display: flex;
        align-items: center;
      }

      .title {
        
      }

      .logo {
        margin: 16px;
        //animation: rotation 20s infinite linear;
      }

      @keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
      }
    `}</style>
  </div>
)

export default NavBar;
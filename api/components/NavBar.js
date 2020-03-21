const NavBar = () => (
  <div>
    <div className="flex-center">
      <h1 className="title">
        COVID-19 Brazil API
      </h1>
      <img src="/logo.svg" width="100px" className="logo" />
    </div>
    <p className="description">
      Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil.
    </p>
    <style jsx>{`
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        font-size: 1.5rem;
        color: #818181;
      }
      .logo {
        margin: 16px;
        animation: rotation 20s infinite linear;
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
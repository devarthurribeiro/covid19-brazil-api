function Layout (props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
      html,
      body {
        background-color: #000;
        color: #e5e5e5;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      main {
        max-width: 90%;
        margin: 0 auto;
      }

      .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1rem;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      
      @media (max-width: 600px) {
        .flex {
          width: 100%;
          flex-direction: column;
        }
        .grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
    </div>
  )
}

export default Layout
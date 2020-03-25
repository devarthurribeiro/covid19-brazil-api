/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';

function goBottom() {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: document.body.scrollHeight,
  });
}

const SideNav = () => (
  <aside className="sidenav">
    <nav className="menu">
      <ReactTooltip place="right" type="dark" effect="solid" backgroundColor="#000" />
      <Link href="/">
        <a data-tip="Home">
          <i className="material-icons">home</i>
        </a>
      </Link>
      <Link href="/status">
        <a data-tip="Acompanhe">
          <i className="material-icons">insert_chart</i>
        </a>
      </Link>
      <Link href="https://covid19-brazil-api-docs.now.sh/">
        <a data-tip="Docs">
          <i className="material-icons">book</i>
        </a>
      </Link>
      <Link href="/logs">
        <a data-tip="Logs da API">
          <i className="material-icons">dashboard</i>
        </a>
      </Link>
      <Link href="/">
        <a
          onClick={() => { goBottom(); }}
          data-tip="Sobre"
        >
          <i className="material-icons">info</i>
        </a>
      </Link>
    </nav>

    <style jsx>
      {`
      .sidenav {
        z-index: 1;
        height: 100vh;
        padding: 0 8px;
        transition: all .2s ease-in-out;
        display: flex;
        order: 1;
        flex-flow: column;
        position: sticky;
        top: 0;
        align-self: flex-start;
        background-color: rgba(0, 0, 0, 0.2);
      }

      nav {
        display: flex;
        flex-flow: column nowrap;
      }

      nav a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 14px;
        border-radius: 50%;
        background-color: hsla(0, 0%, 100%, 0.2);
        color: hsla(0, 0%, 100%, 0.5);
        fill: hsla(0, 0%, 100%, 0.5);
        margin: 8px 0;
        height: 52px;
      }

      .menu {
        display: flex;
        flex-flow: column nowrap;
      }

      .menu .item {
        width: 56px;
        height: 56px;
        background-color: #202124;
      }

      @media (max-width: 768px) {
        .sidenav {
          position: fixed;
          top: auto;
          bottom: 0;
          height: auto;
          padding: 0;
          width: 100%;
          background-color: #202124;
          box-shadow: 0 2px 6px 0 rgba(0,0,0,.45);
        }
        .menu {
          flex-flow: row nowrap;
          overflow: auto;
          justify-content: space-between;
          background-color: rgba(0,0,0,.1);
        }
        nav a {
          background-color: transparent;
        }
      }

      @media (max-width: 600px) {
        footer {
          flex-direction: column;
        }
      }
    `}
    </style>
  </aside>
);

export default SideNav;

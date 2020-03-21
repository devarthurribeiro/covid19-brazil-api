const Footer = () => (
  <footer>
    <a
      href="https://github.com/devarthurribeiro"
      target="_blank"
      rel="noopener noreferrer"
    >
      Feito com 💚
    </a>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: .2em;
      }
    `}</style>
  </footer>
)

export default Footer;
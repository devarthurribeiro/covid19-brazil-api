const Footer = () => (
  <footer>
    <div className="item">
      <a
        href="https://github.com/devarthurribeiro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Feito com
        {' '}
        <span role="img" aria-label="Heart">💚</span>
      </a>
    </div>
    <div className="item">
      Copyright © Arthur Ribeiro.
    </div>
    <div className="item">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="PWCXMS2YKHJ7A" />
        <input type="hidden" name="currency_code" value="BRL" />
        <button type="submit">
          Donate
          {' '}
          <span role="img" aria-label="money">💰</span>
        </button>
        <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
    <style jsx>
      {`
      footer {
        width: 100%;
        min-height: 78px;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #202124;
        padding: 0 20px;
      }

      footer .item {
        margin: 16px 0;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: .1.5em;
      }

      button {
        background: #4ffa7b;
        color: #202124;
        border: none;
        cursor: pointer;
        font-size: 1em;
        border-radius: 4px;
        font-weight: 600;
      }

      @media (max-width: 600px) {
        footer {
          flex-direction: column;
        }
      }
    `}
    </style>
  </footer>
);

export default Footer;

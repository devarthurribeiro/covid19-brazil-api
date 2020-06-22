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
    <div className="item vercel">
      Powered By
      {' '}
      <a href="https://vercel.com/">
        <svg role="img" aria-label="Vercel Inc." height="20" viewBox="0 0 283 64" fill="#e5e5e5"><path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z" /></svg>
      </a>
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

      footer .vercel {
        display: flex;
        align-items: center;
        justify-content: center;
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

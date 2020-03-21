function Card({
  title, link, description, children,
}) {
  return (
    <div className="card">
      <div>
        <a href={link}>
          <h3>{title}</h3>
        </a>
        {description ? (
          <p>{description}</p>
        ) : (
          <div>{children}</div>
        )}
      </div>
      <style jsx>
        {`
        .card {
          width: 100%;
          background-color: #0a0a0a;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #818181;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #4ffa7b;
          border-color: #4ffa7b;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}
      </style>
    </div>
  );
}

export default Card;

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
          background-color: rgba(0, 0, 0, 0.2);
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .card:hover,
        .card:focus,
        .card:active {
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

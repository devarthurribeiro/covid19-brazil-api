import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share';

import Card from './Card';

const Person = ({ person }) => (
  <Card className="person">
    <div className="person">
      <a href="https://github.com/devarthurribeiro">
        <img src={person.img} width="160" height="160"  alt="Arthur Ribeiro" />
      </a>
      <h3>{person.name}</h3>
      <span>{person.role}</span>
      <p>
        {person.description}
      </p>
      <div className="flex-center">
        <a href={`https://wa.me/${person.whatsapp}`}>
          <WhatsappIcon
            size={40}
            round
          />
        </a>
        <a href={`https://fb.com/${person.facebook}`}>
          <FacebookIcon size={40} round />
        </a>
        <a href={`https://twitter.com/${person.twitter}`}>
          <TwitterIcon size={40} round />
        </a>
      </div>
    </div>
    <style jsx>
      {`
      .person h3, p {
        margin: 8px
      }

      .person span {
        margin-bottom: 6px;
        color: #818181;
      }

      .person img {
        width: 160px;
        heigth: auto;
        border-radius: 50%;
      }

      .person {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  `}
    </style>
  </Card>
);

export default Person;

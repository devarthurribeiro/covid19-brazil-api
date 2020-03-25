import {
  WhatsappIcon,
} from 'react-share';
import team from '../data/team.json';

import Card from './Card';
import Person from './Person';

function Team() {
  return (
    <div className="grid team">
      {team.map((person) => (<Person person={person} />))}
      <Card>
        <div className="flex-center">
          <div>
            <h3>Junte-se ao time</h3>
            <span>Faça parte desse projeto</span>
            <p>
              Grupo no whatsapp
            </p>
            <div className="flex-center">
              <a href="https://chat.whatsapp.com/L7AY3Bpv12Y7JzjNTjbdBX">
                <WhatsappIcon
                  size={40}
                  round
                />
              </a>
            </div>
          </div>
        </div>
      </Card>
      <style jsx>
        {`
        .team {
          grid-template-columns: 1fr 1fr 1fr;
        }
        h3, p {
          margin: 8px
        }
        span {
          margin-bottom: 6px;
          color: #818181;
        }
      `}
      </style>
    </div>
  );
}

export default Team;

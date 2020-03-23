import CountryCard from './CountryCard';
import BrazilCard from './BrazilCard';

const Countries = () => (
  <div className="grid">
    <BrazilCard />
    <div className="grid">
      <CountryCard
        country="brazil"
      />
      <CountryCard
        country="china"
      />
      <CountryCard
        country="italy"
      />
      <CountryCard
        country="us"
      />
    </div>
    <br />
  </div>
);

export default Countries;

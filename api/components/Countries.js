import CountryCard from './CountryCard';

const Countries = () => (
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
    <br />
  </div>
)

export default Countries;
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

const CountryDetails = ({countries})=> {

  const { alpha3Code } = useParams();

  const country = countries.find((element) => element.alpha3Code === alpha3Code);

  return (
    <div className="col-7">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${country.name.common}`} />
      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => (
                  <li key={border}>
                    <a href={`/countries/${border}`}>{border}</a>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

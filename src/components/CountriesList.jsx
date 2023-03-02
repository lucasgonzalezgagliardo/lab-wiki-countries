import { Link } from "react-router-dom";
// src/index.js
import "bootstrap/dist/css/bootstrap.css";

const CountriesList = ({countries}) => {
    return (
        <div className="col-2">
            {countries.map((element) => (
                   <Link to={`/${element.alpha3Code}`}key={element.alpha3Code}>
                   <img src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${element.name.common}`} />
                   <p>{element.name.common}</p>
                   </Link>
            ))}
        </div>
    );
}
export default CountriesList

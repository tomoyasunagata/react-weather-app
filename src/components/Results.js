
const Results = ({ results }) => {
    const {country, cityName, temperature, conditionText, icon} = results;
    return (
        <div>
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temperature && <div>{temperature}<span>℃</span></div>}
            {conditionText && <div><img src={icon} alt="icon" /><span>{conditionText}</span></div>}
            
        </div>
    );
}

export default Results;

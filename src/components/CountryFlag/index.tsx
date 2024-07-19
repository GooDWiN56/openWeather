import React from "react";
import ReactCountryFlag from "react-country-flag";
interface ICountryFlag {
  country: string;
}
const CountryFlag = ({ country }: ICountryFlag) => {
  // вывод флага страны
  return (
    <ReactCountryFlag
      countryCode={country}
      style={{
        width: "auto",
        height: 12,
        marginTop: -3,
        marginRight: 5,
      }}
      svg
    />
  );
};

export default CountryFlag;

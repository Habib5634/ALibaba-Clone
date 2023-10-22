import React from 'react'
import { useCountries } from "use-react-countries";
const Dropdown = () => {
    const { countries } = useCountries();
  return (
    <div className="w-full">
      <select
        className="bg-white border border-gray-300 p-2  w-full"
      >
        <option disabled value="">
          Select Country
        </option>
        {countries.map(({ name, flags }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
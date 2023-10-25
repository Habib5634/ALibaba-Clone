import React from 'react'

const Dropdown = () => {
  const Couuntries = [
    { value: 'PK', label: 'Pakistan' },
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];
  return (
    <div>
        <label htmlFor="language_select" className="text-gray-500">
          Countries
        </label>
        <select
          id="language_select"
          className="block mb-4 py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border border-gray-500 appearance-none dark:text-gray-500 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
        >
          {Couuntries.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
  )
}

export default Dropdown
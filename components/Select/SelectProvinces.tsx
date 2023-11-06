import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SelectProvinces({label, placeholder, value, onChange}) {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
            .then(response => setProvinces(response.data))
            .catch(err => console.log(err)
            )
    }, [])
    
  return (
    <>
        <label
          htmlFor="province"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {label}
        </label>
        <select 
        name="province" 
        id="province"
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">{placeholder}</option>
          {provinces.map((province: any) => <option key={province.Id} value={province.Name} >{province.Name}</option>)}
        </select>
    </>
  )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SelectDistricts({label, placeholder, value, onChange, provinceName}) {
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
            .then(response => {
              const province = response.data.find(province => province.Name=== provinceName);
              setDistricts(province.Districts);
            })
            .catch(err => console.log(err)
            )
    }, [provinceName])
    
  return (
    <>
        <label
          htmlFor="district"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {label}
        </label>
        <select 
        name="district" 
        id="district"
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">{placeholder}</option>
          {districts.map((district: any) => <option key={district.Id} value={district.Name} >{district.Name}</option>)}
        </select>
    </>
  )
}

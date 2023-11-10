import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SelectWards({ label, value, onChange, provinceName, districtName }) {
  const [districts, setDistricts] = useState([]);

  const [wards, setWards] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
      .then(response => {
        const province = response.data.find((province) => province.Name === provinceName);
        if (province) {
          const district = province.Districts.find((d) => d.Name === districtName);
          if (district) {
            setWards(district.Wards);
          }
        }
      })
      .catch(err => console.log(err)
      )

  }, [provinceName, districtName])

  return (
    <>
      <label
        htmlFor="wards"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id="wards"
        name="wards"

        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="">Chọn xã/phường</option>
        {wards.map((wards: any) => 
        <option key={wards.Id} value={wards.Name}>
          {wards.Name}
          </option>
          )}
      </select>
    </>
  )
}

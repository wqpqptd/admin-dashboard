'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import { useSearchParams } from "next/navigation";


const UpdateLicense = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [packageItem, setPackageItem] = useState({})
  const searchParams = useSearchParams()
  const licenseId = Number(searchParams.get('id'));
  const [driverLicenseClass, setDriverLicenseClass] = useState([])
  const [driverLicenseDuration, setDriverLicenseDuration] = useState([])


  useEffect(() => {
    axios.get(`${URL_SERVER}/driverlicense/${licenseId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        setPackageItem(response.data);
      })
      .catch(err => console.log(err))
    axios.get(`${URL_SERVER}/driverlicenseclass`)
      .then(response => {
        setDriverLicenseClass(response.data)
      })
      .catch(err => console.log(err))


    axios.get(`${URL_SERVER}/driverlicenseduration`)
      .then(response => {
        setDriverLicenseDuration(response.data)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh giấy phép lái xe" />
      {/* <!-- ====== Update License Section Start ====== --> */}
      <div key={packageItem?.id} className="flex flex-col gap-9" >
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/license"}>
              <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
              <br />
            </Link>
            <h3 className="font-medium text-black dark:text-white">
              Số thứ tự:
              <h5 className="font-medium text-black dark:text-white">
                {packageItem?.id}
              </h5>
            </h3>
          </div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Ngày tạo giấy phép lái xe:
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.licenseDate}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('licenseDate', { required: true })}
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Hạng giấy phép lái xe:
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={packageItem?.driverLicenseClassId?.id}
                                        {...register('driverlicenseclass')}
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    >
                                        <option value="">Chọn hạng giấy phép lái xe</option>
                                        {driverLicenseClass.map(driverLicenseClass => <option key={driverLicenseClass.id} value={driverLicenseClass.id}>{driverLicenseClass.driverLicenseClassName}</option>)}
                                    </select>
                                </div>
              </div>
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Thời hạn giấy phép lái xe:
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={packageItem?.driverLicenseDurationId?.id}
                                        {...register('driverlicenseduration')}
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    >
                                        <option value="">Chọn thời hạng giấy phép lái xe</option>
                                        {driverLicenseDuration.map(driverLicenseDuration => <option key={driverLicenseDuration.id} value={driverLicenseDuration.id}>{driverLicenseDuration.driverLicenseDurationName}</option>)}
                                    </select>
                                </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Cập nhật
                  </button>
                </div>
                <div className="w-full xl:w-1/2">
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- ====== Update License Section End ====== --> */}
    </>
  );
};

export default UpdateLicense;
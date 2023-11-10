'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react'



const UpdateExaminationDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
const [packageItem, setPackageItem] = useState({})
const searchParams = useSearchParams()
const examinationId = Number(searchParams.get('id'));


useEffect(() => {
    axios.get(`${URL_SERVER}/examinationdetail/${examinationId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => {
            setPackageItem(response.data);
        })
        .catch(err => console.log(err))
}, [])

  // console.log(params)

  // async function getExamination() {
  //   try {
  //     const response = await axios.get(`${URL_SERVER}/examination/${params}`);
  //     return response.data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const packageItem = await getExamination();

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh đợt sát hạch" />
      {/* <!-- ====== Update ExaminationDetail Section Start ====== --> */}
      <div key={packageItem?.id} className="flex flex-col gap-9" >
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/examinationdetail"}>
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
                  Tên đợt sát hạch: <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.examinationsName}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsName', { required: true })}
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Ngày tạo sát hạch: <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.examinationsDate}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsDate', { required: true })}
                />
              </div>
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nội dung đợt sát hạch:<span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder={packageItem?.examinationsDescription}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsDescription', { required: true })}
                ></textarea>
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
      {/* <!-- ====== Update ExaminationDetail Section End ====== --> */}
    </>
  );
};

export default UpdateExaminationDetail;

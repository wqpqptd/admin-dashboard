'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const UpdateExamination = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [packageItem, setPackageItem] = useState({})
  const searchParams = useSearchParams()
  const examinationId = Number(searchParams.get('id'));


  useEffect(() => {
    axios.get(`${URL_SERVER}/examination/${examinationId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        setPackageItem(response.data);
      })
      .catch(err => console.log(err))
  }, [])
  const onSubmit = (data) => {
    console.log(data)
    axios.patch(`${URL_SERVER}/examination/${examinationId}`, data, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        toast.success('Cập nhật thông tin thành công!')
        router.push('/examination')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh đợt sát hạch" />
      {/* <!-- ====== Update Examination Section Start ====== --> */}
      <div key={packageItem?.id} className="flex flex-col gap-9" >
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/examination"}>
              <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
              <br />
            </Link>
            {/* <h3 className="font-medium text-black dark:text-white">
              Số thứ tự:
              <h5 className="font-medium text-black dark:text-white">
                {packageItem?.id}
              </h5>
            </h3> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tên đợt sát hạch: <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.examinationsName}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsName')}
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
                  {...register('examinationsDate')}
                />
              </div>
              {/* <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Giới hạn số lượng người tham gia: <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.examinationsQuantity}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsQuantity')}
                />
              </div> */}
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nội dung đợt sát hạch:<span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder={packageItem?.examinationsDescription}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('examinationsDescription')}
                ></textarea>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Cập nhật
                  </button>
                </div>
                <div className="w-full xl:w-1/2">
                  <Link href={"/examination"}>
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                      Hủy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- ====== Update Examination Section End ====== --> */}
      <Toaster />
    </>
  );
};

export default UpdateExamination;

'use client'
import Link from "next/link";

const tabs = [{
  link: '/licenseManager/license',
  title: 'Giấy phép lái xe'
}, {
  link: '/licenseManager/licenseClass',
  title: 'Hạng giấy phép lái xe'
}, {
    link: '/licenseManager/licenseDuration',
    title: 'Thời hạn giấy phép lái xe'
  }
]

const LicenseManagerPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>
      <ul className="flex hover:text-primary items-center gap-x-4 py-2">
          {tabs.map((tab, index) => (
            <li key={index} className=" border-r-2 border-black-300">
              <Link key={index} className="p-4 text-black hover:text-primary cursor-pointer " href={tab.link}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default LicenseManagerPage;
'use client'
import Link from "next/link";

const tabs = [{
  link: '/examinationManager/examination',
  title: 'Đợt sát hạch'
}, {
  link: '/examinationManager/examinationDetail',
  title: 'Chi tiết đợt sát hạch'
}
]

const ExaminationsManagerPage = ({
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

export default ExaminationsManagerPage;
import React from "react";

type Props = {
  desc: ICompanyProject[] | IDescription;
};

export type IDescription = {
  texts: string[];
  techStack: string[];
};
export type ICompanyProject = {
  projectName: string;
  duration: string;
  description: IDescription;
};

const CompanyProjectDescription = ({ desc }: Props) => {
  return (
    <>
      {Array.isArray(desc) ? (
        <section>
          {desc.map((prj, index) => (
            <article key={index} className="mt-4">
              <p>
                🚀 {prj.projectName}{" "}
                <span className=" text-slate-500">({prj.duration})</span>
              </p>
              <Description desc={prj.description} />
            </article>
          ))}
        </section>
      ) : (
        <section>My role</section>
      )}
    </>
  );
};

export default CompanyProjectDescription;

const Description = ({ desc }: { desc: IDescription }) => {
  return (
    <>
      {desc.texts.map((t) => (
        <p className=" list-item">{t}</p>
      ))}
      <article className="flex gap-2 mt-2">
        {desc.techStack.map((tech) => (
          <span className=" bg-gray-500 rounded-2xl py-1 px-2 break-keep">
            {tech}
          </span>
        ))}
      </article>
    </>
  );
};

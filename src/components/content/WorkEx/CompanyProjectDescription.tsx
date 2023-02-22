import { ICompanyProject, IDescription } from "../../../types/workEx";
import Pill from "../../shared/pills";

type Props = {
  desc: ICompanyProject[] | IDescription;
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
        <section>
          <Description desc={desc} />
        </section>
      )}
    </>
  );
};

export default CompanyProjectDescription;

const Description = ({ desc }: { desc: IDescription }) => {
  return (
    <>
      {desc.texts.map((t, index) => (
        <p key={index} className=" list-item font-extralight">
          {t}
        </p>
      ))}
      <article className="flex gap-2 mt-2">
        {desc.techStack.map((tech, index) => (
          <Pill text={tech} key={index} />
        ))}
      </article>
    </>
  );
};

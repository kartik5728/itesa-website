import { teamGroups } from "./team";
import TeamDirectory from "./TeamDirectory";

// Server component: static heading + hands data to the interactive client directory.
export default function TeamSection() {
  return (
    <section id="team" className="relative px-[18px] pb-[72px] pt-[58px] sm:px-[clamp(20px,5vw,72px)] sm:pb-24 sm:pt-[clamp(58px,6vw,88px)]">
      <div className="mx-auto mb-10 max-w-[720px] text-center sm:mb-12">
        <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-.045em] sm:text-[clamp(38px,5vw,58px)]">
          TEAM{" "}
          <span className="bg-gradient-to-r from-[#82d8ff] to-[#1687ff] bg-clip-text text-transparent">ITESA</span>
        </h2>
      </div>
      <TeamDirectory groups={teamGroups} />
    </section>
  );
}

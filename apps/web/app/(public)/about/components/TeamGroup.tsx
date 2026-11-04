import type { Ref } from "react";
import type { TeamGroup as TeamGroupType, TeamMember } from "./team";
import Reveal from "./Reveal";
import MemberCard from "./MemberCard";

type Props = {
  group: TeamGroupType;
  activeId?: string;
  onSelect: (member: TeamMember, trigger: HTMLElement) => void;
  innerRef?: Ref<HTMLDivElement>;
};

export default function TeamGroup({ group, activeId, onSelect, innerRef }: Props) {
  const headingId = `${group.id}-heading`;
  return (
    <div ref={innerRef}>
      <Reveal>
        <section aria-labelledby={headingId} className="border-b border-[#3e96ef]/20 pb-[34px] text-center last:border-b-0 last:pb-0">
          <h3
            id={headingId}
            className="mb-[22px] flex items-center justify-center gap-2.5 font-display text-[10px] font-semibold tracking-[.12em] text-[#56d4ff] before:h-px before:max-w-[260px] before:flex-1 before:bg-gradient-to-r before:from-transparent before:to-[#3096ff]/50 after:h-px after:max-w-[260px] after:flex-1 after:bg-gradient-to-l after:from-transparent after:to-[#3096ff]/50 sm:gap-[18px] sm:text-xs sm:tracking-[.17em]"
          >
            {group.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-[18px]">
            {group.members.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} selected={m.id === activeId} onSelect={onSelect} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}

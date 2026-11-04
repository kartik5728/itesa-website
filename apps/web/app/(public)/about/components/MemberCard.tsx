import type { TeamMember } from "./team";
import { getInitials } from "./about";
import Reveal from "./Reveal";



type Props = {
  member: TeamMember;
  index: number;
  selected?: boolean;
  onSelect: (member: TeamMember, trigger: HTMLElement) => void;
};

export default function MemberCard({ member, index, selected, onSelect }: Props) {
  return (
    <Reveal delay={index * 75} className="w-[calc(50%-6px)] max-[390px]:w-full max-[390px]:max-w-[280px] sm:w-[248px]">
      <button
        type="button"
        onClick={(e) => onSelect(member, e.currentTarget)}
        aria-haspopup="dialog"
        className={`group relative flex w-full flex-col overflow-hidden rounded-[9px] border bg-gradient-to-br from-[#051c35]/95 to-[#010812]/95 p-2 text-left shadow-[inset_0_0_24px_rgba(0,100,255,.055)] backdrop-blur-[5px] transition duration-300 hover:-translate-y-1.5 hover:scale-[1.025] hover:border-[#36bdff] hover:shadow-[0_0_30px_rgba(0,120,255,.23)] focus-visible:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#82dcff] sm:p-2.5 ${
          selected ? "-translate-y-1.5 scale-[1.025] border-[#36bdff]" : "border-[#2893ff]/45"
        }`}
      >
        <span className="relative mb-[10px] grid h-[clamp(145px,44vw,205px)] w-full place-items-center overflow-hidden rounded-[5px] border border-[#258eff]/45 bg-[radial-gradient(ellipse_at_50%_38%,rgba(0,113,255,.28),transparent_47%),linear-gradient(180deg,rgba(4,26,49,.65),rgba(1,7,16,.96))] shadow-[inset_0_0_32px_rgba(0,103,255,.12)] sm:mb-[13px] sm:h-[226px]">
          <span aria-hidden className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_7px,rgba(45,155,255,.12)_8px_9px)]" />
          <span className="relative z-10 font-display text-[clamp(25px,7vw,36px)] font-bold text-[#bde9ff] text-glow sm:text-[42px]">
            {getInitials(member.name)}
          </span>
        </span>
        <span className="block min-h-[52px] pb-2 pl-[3px] pr-6 sm:min-h-[60px] sm:pl-[5px] sm:pr-[30px]">
          <b className="mb-[5px] block truncate text-xs leading-[1.4] text-[#f4f9ff] sm:text-sm">{member.name}</b>
          <small className="block truncate text-[10px] leading-[1.5] text-[#a9c3df] sm:text-[11px]">{member.role}</small>
        </span>
        <span aria-hidden className="absolute bottom-4 right-2.5 grid h-[22px] w-[22px] place-items-center rounded-full border border-[#29a1ff]/50 bg-[#00152b]/80 text-[#67d9ff] transition group-hover:bg-[#0077ff]/20 sm:bottom-[22px] sm:right-3.5 sm:h-[26px] sm:w-[26px]">↗</span>
      </button>
    </Reveal>
  );
}

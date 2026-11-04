"use client";

import { useCallback, useRef, useState } from "react";
import type { TeamGroup as TeamGroupType, TeamMember } from "./team";
import TeamGroup from "./TeamGroup";
import MemberModal from "./MemberModal";
import SocialRail from "./SocialRail";

export default function TeamDirectory({ groups }: { groups: TeamGroupType[] }) {
  const [active, setActive] = useState<TeamMember | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const lastGroupRef = useRef<HTMLDivElement>(null);

  const open = (member: TeamMember, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setActive(member);
  };

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <div className="mx-auto flex max-w-[1120px] flex-col gap-[27px] sm:gap-[34px]">
        {groups.map((group, i) => (
          <TeamGroup
            key={group.id}
            group={group}
            activeId={active?.id}
            onSelect={open}
            innerRef={i === 0 ? firstGroupRef : i === groups.length - 1 ? lastGroupRef : undefined}
          />
        ))}
      </div>

      <SocialRail startRef={firstGroupRef} endRef={lastGroupRef} />
      <MemberModal member={active} onClose={close} />
    </>
  );
}

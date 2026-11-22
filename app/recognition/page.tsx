import type { Metadata } from "next";
import { awards, press } from "@/content/recognition";
import { Block, PageHead } from "@/components/ui";
import AwardBoard from "@/components/AwardBoard";
import PressBoard from "@/components/PressBoard";
import PublicationList from "@/components/PublicationList";
import { publications } from "@/content/publications";

export const metadata: Metadata = { title: "Recognition" };

export default function Recognition() {
  return (
    <>
      <PageHead title="Press and recognition" standfirst="Coverage of my work, my papers and talks, and the awards it has earned." />

      <Block title="Press">
        <PressBoard items={press} />
      </Block>

      <Block title="Publications and presentations" aside={`${publications.length} entries`}>
        <PublicationList items={publications} />
      </Block>

      <Block title="Awards">
        <AwardBoard groups={awards} />
      </Block>
    </>
  );
}

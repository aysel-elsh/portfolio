import { PageHead, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHead title="Page not found" standfirst="This address doesn't match any page on the site." />
      <p className="mt-8 text-[15px]">
        Go to the <TextLink href="/">index</TextLink> or the <TextLink href="/work/">work index</TextLink>.
      </p>
    </>
  );
}

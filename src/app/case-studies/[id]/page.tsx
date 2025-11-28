import { caseStudies } from "@/data/site-content";
import { notFound } from "next/navigation";
import { CaseStudyClient } from "./case-study-client";

type CaseStudyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const study = caseStudies.find((c) => c.id === id);
  if (!study) {
    notFound();
  }

  return <CaseStudyClient study={study} />;
}

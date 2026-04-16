import { Metadata } from "next";
import ProjectPage from "./ProjectClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | NeoScratch",
    };
  }

  return {
    title: `${project.title} | Case Study | NeoScratch`,
    description: project.description,
    keywords: [...project.techStack, project.category, "NeoScratch case study", "software development Rwanda"],
    alternates: {
      canonical: `https://neoscratch.com/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} | NeoScratch Case Study`,
      description: project.description,
      url: `https://neoscratch.com/projects/${id}`,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | NeoScratch Case Study`,
      description: project.description,
      images: [project.image],
    },
  };

}

export default function Page({ params }: Props) {
  return <ProjectPage params={params} />;
}

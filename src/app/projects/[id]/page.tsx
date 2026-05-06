import { Metadata } from "next";
import ProjectPage from "./ProjectClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const project = projects.find((p) => p.id === decodedId || p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study | NeoScratch`,
    description: project.seoDescription,
    keywords: [...project.seoKeywords, ...project.techStack, project.category, "NeoScratch case study", "software development Rwanda"],
    alternates: {
      canonical: `https://neoscratch.com/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} | NeoScratch Case Study`,
      description: project.seoDescription,
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
      description: project.seoDescription,
      images: [project.image],
    },
  };


}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const project = projects.find((p) => p.id === decodedId || p.id === id);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.seoDescription,
    image: project.image,
    url: `https://neoscratch.com/projects/${id}`,
    author: {
      '@type': 'Organization',
      name: 'NeoScratch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeoScratch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neoscratch.com/logo.png',
      },
    },
    datePublished: project.year,
    keywords: project.seoKeywords.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectPage params={params} />
    </>
  );
}

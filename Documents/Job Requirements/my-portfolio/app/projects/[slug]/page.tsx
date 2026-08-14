import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Projects } from "@/lib/types";

function getProject(slug: string) {
  return Projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return Projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/3"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Open live site
          </a>
        ) : null}
      </div>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
            Project case study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {project.overview}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Problem
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.problem}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Solution
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-white/3 p-4 shadow-[0_24px_80px_-30px_rgba(2,6,23,0.8)] backdrop-blur-xl">
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-white/8 bg-slate-900/60">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-4xl border border-white/10 bg-white/3 p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Features
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-slate-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-4xl border border-white/10 bg-white/3 p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Technologies
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-4xl border border-white/10 bg-white/3 p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Screenshots
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Visual preview
            </h2>
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/3"
            >
              Open project
            </a>
          ) : null}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {project.screenshots.map((screenshot) => (
            <div
              key={screenshot.alt}
              className="relative aspect-16/10 overflow-hidden rounded-3xl border border-white/8 bg-slate-900/60"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import {
  Certifications,
  Education,
  Experiences,
  NavLinks,
  Projects,
  SkillsByCategory,
  SocialLinks,
} from "@/lib/types";

const resumeHref = "/resume.pdf";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ExternalButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${className}`}
    >
      {children}
    </a>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-4xl border border-white/10 bg-white/3 shadow-[0_24px_80px_-30px_rgba(2,6,23,0.8)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function IconLink({
  href,
  label,
  icon,
  className = "",
}: {
  href: string;
  label: string;
  icon: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-2 py-1 text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 ${className}`}
    >
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        width={120}
        height={20}
        unoptimized
        className="h-5 w-auto"
      />
    </a>
  );
}

function NavMenu() {
  return (
    <details className="relative md:hidden">
      <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-white/10">
        <span className="sr-only">Open navigation menu</span>
        <span className="space-y-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </summary>
      <div className="absolute right-0 top-full z-50 mt-3 w-[min(85vw,18rem)] rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <nav className="grid gap-1">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ExternalButton
            href="#projects"
            className="mt-2 w-full bg-cyan-300/10 text-cyan-100"
          >
            View Projects
          </ExternalButton>
        </nav>
      </div>
    </details>
  );
}

function ProjectCard({ project }: { project: (typeof Projects)[number] }) {
  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
      <div className="relative aspect-16/10 overflow-hidden border-b border-white/8 bg-slate-900/60">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
            Featured project
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            View case study
          </Link>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/8"
            >
              Live site
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function CertificateCard({
  certificate,
}: {
  certificate: (typeof Certifications)[number];
}) {
  return (
    <Card className="group p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
          <Image
            src="https://img.shields.io/badge/PDF-CB2B2B?style=flat-square&logo=adobeacrobatreader&logoColor=white"
            alt="PDF"
            width={110}
            height={20}
            unoptimized
            className="h-5 w-auto"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {certificate.name}
          </h3>
          <p className="mt-1 text-sm text-slate-300">{certificate.issuedBy}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
            {certificate.date}
          </p>
        </div>
      </div>
      <div className="mt-5 flex gap-3">
        <a
          href={certificate.pdfFile}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          View PDF
        </a>
      </div>
    </Card>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: (typeof SkillsByCategory)[number]["items"];
}) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-3"
          >
            {item.icon ? (
              <Image
                src={item.icon}
                alt={item.name}
                width={160}
                height={28}
                unoptimized
                className="h-7 w-auto shrink-0"
              />
            ) : (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/8 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                {item.name.slice(0, 2)}
              </span>
            )}
            <span className="text-sm font-medium text-slate-200">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ContactDetail({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-4 py-4 transition hover:border-cyan-300/30 hover:bg-white/5"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-white group-hover:text-cyan-100">
          {value}
        </p>
      </div>
      <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-cyan-200">
        ↗
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative isolate flex-1 overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-168 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),transparent_28%)]"
      />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="#home" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl font-bold border border-cyan-300/20 bg-cyan-300/10 text-sm text-cyan-100 transition group-hover:-translate-y-0.5">
              RM
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-white">
                Rainier Marasigan
              </p>
              <p className="text-xs text-slate-400">Software Developer</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-2 md:flex">
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ExternalButton
              href="#projects"
              className="border-cyan-300/20 bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200"
            >
              View Projects
            </ExternalButton>
          </div>

          <NavMenu />
        </div>
      </header>

      <section
        id="home"
        className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 text-center lg:px-8 lg:pb-28 lg:pt-20"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
            BS Information Technology
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Rainier Marasigan
          </h1>
          <p className="mt-5 text-lg font-medium text-cyan-100 sm:text-xl lg:text-2xl">
            Software Developer | Data Analyst | Full-Stack Web Developer
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            I build modern web applications and software solutions using modern
            technologies, with a focus on clean interfaces, reliable systems,
            and practical solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ExternalButton
              href="#projects"
              className="border-cyan-300/20 bg-cyan-300 px-6 py-3.5 text-slate-950 hover:bg-cyan-200"
            >
              View Projects
            </ExternalButton>
            <ExternalButton
              href="https://github.com/rainierm1826"
              className="px-6 py-3.5"
            >
              GitHub
            </ExternalButton>
            <ExternalButton href={resumeHref} className="px-6 py-3.5">
              View Resume
            </ExternalButton>
            <ExternalButton href="#contact" className="px-6 py-3.5">
              Contact Me
            </ExternalButton>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-slate-400">
            {[
              "Frontend interfaces",
              "Backend systems",
              "Databases and deployment",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-white/3 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="About"
          title="Professional introduction"
          description="A concise overview of Rainier's background, focus, and the kind of work he is prepared to contribute to in a software development role."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            "Bachelor of Science in Information Technology graduate from Batangas State University.",
            "Focused on software development and full-stack web development, with experience building real applications for academic and practical use.",
            "Comfortable working across frontend, backend, databases, deployment, and continuous learning.",
          ].map((item) => (
            <Card key={item} className="p-6">
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="A clean, categorized view of the technologies and tools used across Rainier's web, software, and data-focused work."
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {SkillsByCategory.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Selected projects that show product thinking, interface quality, and the ability to build useful software across customer-facing and administrative workflows."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {Projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Relevant training and OJT"
          description="Professional and project experience that supports Rainier's software development profile without overstating scope."
        />
        <div className="mt-10 grid gap-5">
          {Experiences.map((experience) => (
            <Card
              key={`${experience.company}-${experience.title}`}
              className="p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 border-b border-white/8 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
                    {experience.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {experience.company}
                  </h3>
                </div>
                <p className="text-sm text-slate-400">{experience.duration}</p>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Simple, recruiter-friendly education information that supports the overall portfolio narrative."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {Education.map((item) => (
            <Card key={item.school} className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                {item.year}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.school}</p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="certificates"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Certificates"
          title="Verified learning"
          description="A curated set of certificates displayed as clean document cards with direct access to the original PDFs stored in the public assets folder."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Certifications.map((certificate) => (
            <CertificateCard
              key={certificate.pdfFile}
              certificate={certificate}
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="A simple contact section for recruiters, clients, and collaborators who want to reach Rainier quickly."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalButton
                href="mailto:marasiganrainier2@gmail.com"
                className="border-cyan-300/20 bg-cyan-300 px-6 py-3.5 text-slate-950 hover:bg-cyan-200"
              >
                Email Me
              </ExternalButton>
              <ExternalButton href={resumeHref} className="px-6 py-3.5">
                View Resume
              </ExternalButton>
            </div>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="grid gap-4">
              <ContactDetail
                href="mailto:marasiganrainier2@gmail.com"
                label="Email"
                value="marasiganrainier2@gmail.com"
              />
              <ContactDetail
                href="https://github.com/rainierm1826"
                label="GitHub"
                value="github.com/rainierm1826"
              />
              <ContactDetail
                href="https://www.linkedin.com/in/rainier-marasigan-5354662a6"
                label="LinkedIn"
                value="Rainier Marasigan"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {SocialLinks.map((link) => (
                <IconLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-slate-950/40">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              Rainier Marasigan
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Software Developer | Full-Stack Web Developer
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/5"
              >
                <Image
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  width={120}
                  height={20}
                  unoptimized
                  className="h-4 w-auto"
                />
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            © 2025 Rainier Marasigan. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

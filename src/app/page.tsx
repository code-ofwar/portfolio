import Image from "next/image";
import Link from "next/link";
import {
  FaDraftingCompass,
  FaNewspaper,
  FaShoppingBag,
  FaUserTie,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import {
  FaPuzzlePiece,
  FaMagnifyingGlassChart,
  FaDiagramProject,
  FaCodeBranch,
  FaCube,
  FaCode,
  FaBug,
  FaRepeat,
  FaServer,
  FaDatabase,
  FaCheckDouble,
  FaShieldHalved,
  FaCodeCommit,
} from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";

const HomePage = () => {
  const skills = [
    { icon: <FaPuzzlePiece />, skill: "Problem Solving" },
    { icon: <FaMagnifyingGlassChart />, skill: "Analytical Thinking" },
    { icon: <FaDiagramProject />, skill: "Data Structures" },
    { icon: <FaCodeBranch />, skill: "Algorithms" },
    { icon: <FaCube />, skill: "Object-Oriented Programming" },
    { icon: <FaDraftingCompass />, skill: "Software Design" },
    { icon: <FaCode />, skill: "Clean Code" },
    { icon: <FaBug />, skill: "Debugging" },
    { icon: <MdErrorOutline />, skill: "Error Handling" },
    { icon: <FaRepeat />, skill: "Code Reusability" },
    { icon: <FaServer />, skill: "API Development" },
    { icon: <FaDatabase />, skill: "Database Design" },
    { icon: <FaCheckDouble />, skill: "Data Validation" },
    { icon: <FaShieldHalved />, skill: "Authentication & Authorization" },
    { icon: <FaCodeCommit />, skill: "Version Control" },
  ];
  const projects = [
    {
      image: "/images/projects/My-Ecommerce-Project.webp",
      name: "KSP Shop — Full-Stack E-commerce",
      type: "Fullstack",
      description:
        "A full-stack e-commerce platform built with Next.js, Prisma, and PostgreSQL.\nFeatures secure authentication, product and category management, customer reviews, a shopping cart, checkout, and order tracking.\nIncludes an admin dashboard for managing products, categories, and orders, with role-based authorization, Zod validation, secure password hashing, JWT authentication, and transaction-based order processing.",
      url: "https://nextjs-ecommerce-phi-pearl.vercel.app/",
    },
  ];

  const technologies = [
    { src: "/images/technologies/html5-darklogo.svg", alt: "html5-darklogo" },

    {
      src: "/images/technologies/javascript-darklogo.svg",
      alt: "javascript-darklogo",
    },
    {
      src: "/images/technologies/typescript-darklogo.svg",
      alt: "typescript-darklogo",
    },
    {
      src: "/images/technologies/tailwindCss-darklogo.svg",
      alt: "tailwindCss-darklogo",
    },
    { src: "/images/technologies/react-darklogo.svg", alt: "react-darklogo" },
    {
      src: "/images/technologies/next-js-darklogo.jpg",
      alt: "next-js-darklogo",
    },
    { src: "/images/technologies/prisma-darklogo.svg", alt: "prisma-darklogo" },
    {
      src: "/images/technologies/postgreSQL-darklogo.svg",
      alt: "postgreSQL-darklogo",
    },
    { src: "/images/technologies/git-darklogo.svg", alt: "git-darklogo" },
    { src: "/images/technologies/github-darklogo.svg", alt: "github-darklogo" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-7 sm:px-5 sm:py-7">
      <section className="mx-auto mt-5 flex max-w-6xl items-center gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-x-2">
            <h1 className="text-4xl font-bold text-blue-700 sm:text-6xl">My</h1>
            <span className="border-b border-r text-4xl font-normal text-blue-900 sm:text-6xl">
              Portfolio
            </span>
          </div>

          <div className="my-5 w-full md:hidden">
            <Image
              src="/images/portfolio.jpg"
              alt="Full-Stack Developer"
              width={1000}
              height={562}
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>

          <h2 className="mt-6 text-2xl font-medium text-foreground sm:text-3xl">
            Fullstack Developer
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted">
            I'm a Computer Engineering student and Full-Stack Developer focused
            on building modern web applications with React and Next.js. I enjoy
            solving technical problems and turning ideas into functional,
            reliable projects. I'm eager to begin my professional journey,
            collaborate with a team, and contribute to real-world projects while
            continuing to grow as a developer.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="https://github.com/code-ofwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="inline-flex items-center justify-center rounded-full border border-border p-3 transition duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
            >
              <Image
                src="/images/technologies/github-darklogo.svg"
                alt="GitHub"
                width={28}
                height={28}
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
              />
            </Link>
          </div>
        </div>

        <div className="hidden w-[45%] shrink-0 md:block">
          <Image
            src="/images/portfolio.jpg"
            alt="Full-Stack Developer"
            width={1000}
            height={562}
            className="h-auto w-full rounded-lg object-contain"
          />
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto mt-24 max-w-6xl sm:mt-32 lg:mt-40"
      >
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Skills
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            {technologies.map((item) => (
              <div key={item.src} className="shrink-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain sm:h-9 sm:w-9"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((item) => (
            <div
              key={item.skill}
              className="rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:shadow-lg sm:p-5"
            >
              <div className="mb-4 flex items-center justify-center rounded-2xl bg-primary/10 p-5 text-primary sm:p-6">
                {<span className="text-3xl">{item.icon}</span>}
              </div>

              <h3 className="text-base font-bold text-foreground sm:text-lg">
                {item.skill}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto mt-24 max-w-6xl sm:mt-32 lg:mt-40"
      >
        <div className="mb-8 flex flex-wrap items-center gap-4 sm:gap-8">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Projects
          </h2>

          <div className="flex flex-col items-center gap-1">
            <FaShoppingBag className="text-3xl text-primary sm:text-4xl" />
            <span className="text-sm font-medium text-muted">E-commerce</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaNewspaper className="text-3xl text-primary sm:text-4xl" />
            <span className="text-sm font-medium text-muted">Blog</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <MdDashboard className="text-3xl text-primary" />
            <span className="text-sm font-medium text-muted">Dashboard</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaUserTie className="text-3xl text-primary sm:text-4xl" />
            <span className="text-sm font-medium text-muted">Portfolio</span>
          </div>
        </div>
        {projects.map((item) => (
          <div
            key={item.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-video bg-primary/10">
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {item.name}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Fullstack
                </span>
              </div>

              <p className="whitespace-pre-line mt-3 text-base leading-7 text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;

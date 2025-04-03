import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      {projects.length > 0 ? 
        <div>
          <h1 className="mb-8 text-2xl font-medium">Projects</h1>
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">{project.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
       : 
        <div className="flex items-center justify-center p-2">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            🚀 Still working on some awesome projects! Stay tuned! 🛠️
          </p>
        </div>
      }
    </section>
  );
}

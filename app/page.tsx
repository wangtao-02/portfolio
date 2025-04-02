// import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { MyLinks } from "@/components/my-links";

export default function Home() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <p className="text-xs">Hey there! I am</p>
          <div className="text-5xl font-bold">
            Tao
            <br />
            Wang
          </div>
          <div className="max-w-xs pt-4 py-6 text-muted-foreground">
            Full Stack Developer
          </div>
        </div>
        <div className="relative">
          <Image
            src="/spongebob.jpg"
            alt="Profile photo"
            unoptimized
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
        <MyLinks></MyLinks>

      <br></br>

      <h2 className="text-2xl font-semibold">About me</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        I&apos;m a passionate web developer with hands-on experience in building
        dynamic and scalable web applications. Skilled in both front-end and
        back-end development, I thrive in collaborative environments and excel
        at problem-solving.
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        I specialize in creating seamless user experiences with Vue.js and
        developing robust backend solutions using C#. My expertise primarily
        revolves around JavaScript, enabling me to craft efficient,
        high-performance applications.
      </p>

      <br></br>

      <h2 className="text-2xl font-semibold">Experience</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium w-full flex justify-between items-center">
            <span className="w-full">
              Più Sviluppo
              <p className="text-muted-foreground text-sm">Software Engineer</p>
            </span>
            <span className="text-muted-foreground text-sm pt-1.5 whitespace-nowrap">
              Sep 2024 - Present
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <h3 className="font-semibold">Cost Estimation Tool</h3>
                <p>
                  <span className="font-medium">Front-end:</span> Developed Vue
                  2 (Vuetify 2) components.
                  <br />
                  <span className="font-medium">Back-end:</span> Developed API
                  endpoints in C#.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">IT Systems Engineer</h3>
                <p>
                  <span className="font-medium">
                    Network Configuration on Energy Meters:
                  </span>{" "}
                  Configured energy monitoring meters&apos; networks (Shelly PRO
                  3EM, Seneca MID S504C).
                  <br />
                  <span className="font-medium">Linux System Setup:</span>{" "}
                  Configured Linux-based server boxes with a Debian-based custom
                  distro.
                </p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

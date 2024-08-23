import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Home, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";

const cardData = [
  {
    icon: <Home />,
    title: "Cybersecurity",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Machine Learning",
    description:
      "Building on the basics, this course delves into Advanced Cryptography, In-Depth Network Security, Database and OS Security, Cyber Forensics, and Security in Emerging Technologies like IoT and Blockchain.",
  },
  {
    icon: <Bot />,
    title: "Artificial Intelligence",
    description:
      "Tailored for experienced professionals, this course explores Advanced Threat Detection, Penetration Testing, Incident Handling, Cloud and IoT Security, Cybersecurity Compliance, and Ethical Hacking. It also prepares learners for industry certifications.",
  },
  // {
  //   icon: <Home />,
  //   title: "Marketing",
  //   description:
  //     "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  // },
  {icon: <Home />,
    title: "Data Science",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Deep Learning",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures..",
  },
  {
    icon: <Bot />,
    title: "Web3",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
];

const Cards = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-purple-600 text-lg font-semibold">
              OUR PROGRAMS
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2 ">
              WHAT STYLE OF PROGRAMS
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2  mb-12">DO WE OFFER ?</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {cardData?.map((item, index) => (
                <Card
                  key={index}
                  className={cn(
                    "max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg  hover:cursor-pointer",
                    {
                      "mt-6": index % 2 !== 0,
                      "bg-[#807AF9] text-white": index === 0,
                    }
                  )}
                >
                  <CardHeader>
                    <div className="flex items-centre justify-start mb-4">
                      <span
                        className={cn(
                          "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500",
                          { "bg-white": index === 0 }
                        )}
                      >
                        {item?.icon}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-left">
                      {item?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-left">{item?.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cards;

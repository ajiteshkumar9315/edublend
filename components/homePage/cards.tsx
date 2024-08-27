import React from "react";
import Image from "next/image"; // Import Image from next/image
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot,Star, Home, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import Card1 from "../sub_cards/Card1";
import CardImage from "@/public/images/product1.png"; // Import the image correctly
import { Item } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

const cardData = [
  {
    icon: <Image src={CardImage} alt="Card Image"/>, 
    title: "Cybersecurity",
    ratings: 4.1,
    popularity: 10000,
    duration: "8 weeks",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Machine Learning",
    description:
      "Building on the basics, this course delves into Advanced Cryptography, In-Depth Network Security, Database and OS Security, Cyber Forensics, and Security in Emerging Technologies like IoT and Blockchain.",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Artificial Intelligence",
    description:
      "Tailored for experienced professionals, this course explores Advanced Threat Detection, Penetration Testing, Incident Handling, Cloud and IoT Security, Cybersecurity Compliance, and Ethical Hacking. It also prepares learners for industry certifications.",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Marketing",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Data Science",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "4 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Deep Learning",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures..",
  },
  {
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "4 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Web3",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
];

const Cards = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="text-center">
          <Reveal >
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
          </div>
          {/* <Reveal>
            <div>
              <div className="flex m-2 ">
                {cardData?.map((item,index) => (
                  <Card key = {index} className="ml-2 max-w-lg">
                    <div>
                      {item?.icon}
                    </div>


                    <div className="ml-4">
                      <div className="text-base font-light text-grey-400">
                        {item?.duration}
                      </div>
                      <div className="font-bold my-4">
                        {item?.title}
                      </div>
                      <div className="flex justify-between my-4">
                        <div className="flex">
                          <Star className="text-yellow-400 fill-yellow-400" />
                          {item.ratings}
                        </div>
                        <div>
                          {item.popularity}
                        </div>
                      </div>
                      <div className="my-4">
                        <a href="">Know More</a>
                      </div>
                    </div>

                  </Card>
                ))}
              </div>
            </div>
          </Reveal> */}

          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {cardData?.map((item, index) => (
                <Card
                  key={index}
                  className={
                    "max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg hover:cursor-pointer"
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-start mb-4">
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
                  <div className="flex ml-5 relative bottom-0.2"><Button className="hover:text-gray-300  text-muted-foreground text-white "> know more </Button></div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Card1 />
    </div>
  );
};

export default Cards;

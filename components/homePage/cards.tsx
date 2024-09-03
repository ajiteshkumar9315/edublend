"use client"
import Image from "next/image"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import CardImage from "@/public/images/product1.png"; 
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'; 

interface DataItem {
    id: number;
    icon: React.JSX.Element;
    title: string;
    ratings: number;
    popularity: number;
    duration: string;
    description: string;
}

const cardData: DataItem[] = [
  {
    id: 1, 
    icon: <Image src={CardImage} alt="Card Image"/>, 
    title: "Cybersecurity",
    ratings: 4.1,
    popularity: 10000,
    duration: "8 weeks",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    id: 2,
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Machine Learning",
    description:
      "Building on the basics, this course delves into Advanced Cryptography, In-Depth Network Security, Database and OS Security, Cyber Forensics, and Security in Emerging Technologies like IoT and Blockchain.",
  },
  {
    id: 3,
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Artificial Intelligence",
    description:
      "Tailored for experienced professionals, this course explores Advanced Threat Detection, Penetration Testing, Incident Handling, Cloud and IoT Security, Cybersecurity Compliance, and Ethical Hacking. It also prepares learners for industry certifications.",
  },
  {
    id: 4,
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Marketing",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    id: 5,
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "8 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Data Science",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    id: 6,
    icon: <Image src={CardImage} alt="Card Image"/>,
    duration: "4 weeks",
    ratings: 4.1,
    popularity: 10000,
    title: "Deep Learning",
    description:
      "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics. Ideal for those new to the field, it covers essential principles and basic security measures.",
  },
  {
    id: 7,
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
    const router = useRouter();

    const handleCardClick = (item: DataItem) => {
        router.push(`/details/${item.id}`);
    };

    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto ">
                    <div className="text-center">
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
                            <h1 className="text-4xl font-black mt-2 mb-12">DO WE OFFER ?</h1>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="flex flex-wrap justify-center gap-6">
                            {cardData.map((item) => (
                                <Card
                                    onClick={() => handleCardClick(item)}
                                    key={item.id}
                                    className={
                                        "max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg hover:cursor-pointer"
                                    }
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-start mb-4">
                                            <span
                                                className={cn(
                                                    "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500"
                                                )}
                                            >
                                                {item.icon}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl font-bold text-left">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-left">{item.description}</p>
                                    </CardContent>
                                    <div className="flex ml-5 relative bottom-0.2">
                                        <Button className="hover:text-gray-300 text-muted-foreground text-white">know more</Button>
                                    </div>
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

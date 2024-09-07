"use client";
import Image from "next/image"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import CardImage from "@/public/images/product1.png"; 
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'; 

// Interface for the card data structure
export interface DataItem {
    id: number;
    icon: string; // The icon is a string (image path)
    title: string;
    ratings: number;
    popularity: number;
    duration: string;
    category: string;
    description: string;
}

// Array containing the card data
const cardData: DataItem[] = [
    {
        id: 1,
        icon: CardImage.src, 
        title: "Cybersecurity",
        ratings: 4.1,
        popularity: 10000,
        duration: "8 weeks",
        category: "Security",
        description:
          "This course lays the groundwork with modules on Cybersecurity Fundamentals, Cryptography, Network Security, System Security, and Digital Forensics.",
      },
      {
        id: 2,
        icon: CardImage.src,
        title: "Machine Learning",
        ratings: 4.1,
        popularity: 10000,
        duration: "8 weeks",
        category: "AI",
        description:
          "Building on the basics, this course delves into Advanced Cryptography, In-Depth Network Security, Database and OS Security, Cyber Forensics.",
      },
      {
        id: 3,
        icon: CardImage.src,
        title: "Artificial Intelligence",
        ratings: 4.1,
        popularity: 10000,
        duration: "8 weeks",
        category: "AI",
        description:
          "Tailored for experienced professionals, this course explores Advanced Threat Detection, Penetration Testing, Incident Handling, Cloud and IoT Security.",
      },
      {
        id: 4,
        icon: CardImage.src,
        title: "Marketing",
        ratings: 4.1,
        popularity: 10000,
        duration: "8 weeks",
        category: "Business",
        description:
          "This course covers digital marketing techniques, market research, branding strategies, and social media management.",
      },
      {
        id: 5,
        icon: CardImage.src,
        title: "Data Science",
        ratings: 4.1,
        popularity: 10000,
        duration: "8 weeks",
        category: "Data",
        description:
          "Learn data analysis, statistics, machine learning techniques, and data visualization for effective decision-making.",
      },
      {
        id: 6,
        icon: CardImage.src,
        title: "Deep Learning",
        ratings: 4.1,
        popularity: 10000,
        duration: "4 weeks",
        category: "AI",
        description:
          "Understand neural networks, deep learning algorithms, and their applications in computer vision and natural language processing.",
      },
      {
        id: 7,
        icon: CardImage.src,
        title: "Web3",
        ratings: 4.1,
        popularity: 10000,
        duration: "4 weeks",
        category: "Blockchain",
        description:
          "An introduction to decentralized applications (DApps), blockchain technology, smart contracts, and Web3 infrastructure.",
      },
  // Add other course objects...
];

// Cards component to render the card data
const Cards = () => {
    const router = useRouter();

    const handleCardClick = (item: DataItem) => {
        // Navigate to course details page, passing the id and category as query params
        router.push(`/details/${item.id}?category=${item.category}`);
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
                                                <Image src={item.icon} alt={item.title} width={50} height={50} />
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
                                        <Button className="hover:text-gray-300 text-muted-foreground text-white">
                                            Know more
                                        </Button>
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
export { cardData };  // Ensure cardData is exported

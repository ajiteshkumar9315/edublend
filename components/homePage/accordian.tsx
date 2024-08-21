"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const data = [
  {
    question: "Question1",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos maiores, neque minus doloremque quae, repellat numquam sequi ipsum reiciendis repudiandae nulla vero, aut eius accusantium explicabo? A architecto laborum perferendis?",
  },
  {
    question: "Question2",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae harum praesentium earum quis ut quibusdam neque! Asperiores magnam iure soluta impedit exercitationem praesentium facilis minus nisi fugiat? Totam, numquam impedit.",
  },
  {
    question: "Question3",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum vitae fugiat delectus iusto officiis quasi excepturi aliquid enim repellendus blanditiis? Tempore culpa inventore, eveniet perspiciatis repellendus reiciendis earum illo nobis?",
  },
];

const Accordian = () => {
  return (
    <section className="w-full mt-2 mb-4 h-[400px]">
      <div className="min-w-fit qna   h-full bg-no-repeat bg-center bg-cover flex items-center justify-end overflow-hidden overflow-y-auto">
        <div className="bg-black p-4 w-[50%] max-h-[400px] text-white mr-16 rounded-lg overflow-hidden overflow-y-auto scrollbar-thin">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MessageCircleQuestion size={24} />
            FAQ&apos;s
          </h2>
          <Accordion
            type="single"
            collapsible
            className="rounded-md bg-white text-black p-6 "
          >
            {data?.map((item, index) => (
              <AccordionItem key={index} value={item?.question}>
                <AccordionTrigger>{item?.question}</AccordionTrigger>
                <AccordionContent className="text-left font-normal break-words max-w-[800px]   overflow-hidden  overflow-y-auto">
                  {item?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Accordian;

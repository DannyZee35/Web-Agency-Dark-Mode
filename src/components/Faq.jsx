import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Faq = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-lg mb-10 text-white">Frequently Asked Questions</h1>
      <div className="max-w-[800px] m-auto flex flex-col gap-5 p-10 sm:p-0">
    
 
      <Accordion type="single" collapsible className="bg-gradientDiagonal border border-[#2B2B2B] text-white rounded-xl px-8 p-2">
  <AccordionItem value="item-3">
    <AccordionTrigger>How do you ensure the security of developed applications?</AccordionTrigger>
    <AccordionContent>
      Security is a top priority for us. We employ industry-standard practices such as encryption, secure authentication mechanisms, and regular security audits to safeguard your applications and data.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      <Accordion type="single" collapsible className="bg-gradientDiagonal border border-[#2B2B2B] text-white rounded-xl px-8 p-2">
        <AccordionItem value="item-2">
          <AccordionTrigger>What platforms do you develop for?</AccordionTrigger>
          <AccordionContent>
            We develop for a wide range of platforms including mobile (iOS and Android), web, and desktop applications. Our team is proficient in creating solutions tailored to your specific platform needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="bg-gradientDiagonal border border-[#2B2B2B] text-white rounded-xl px-8 p-2">
        <AccordionItem value="item-3">
          <AccordionTrigger>How do you ensure the security of developed applications?</AccordionTrigger>
          <AccordionContent>
            Security is a top priority for us. We employ industry-standard practices such as encryption, secure authentication mechanisms, and regular security audits to safeguard your applications and data.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="bg-gradientDiagonal border border-[#2B2B2B] text-white rounded-xl px-8 p-2">
        <AccordionItem value="item-4">
          <AccordionTrigger>Can you customize applications according to specific business requirements?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We understand that every business is unique, and we offer custom solutions tailored to your specific needs. Our team works closely with you to understand your requirements and deliver solutions that align with your business goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="bg-gradientDiagonal border border-[#2B2B2B] text-white rounded-xl px-8 p-2">
        <AccordionItem value="item-5">
          <AccordionTrigger>What is your approach to user experience (UX) design?</AccordionTrigger>
          <AccordionContent>
            We prioritize user experience in all our projects. Our UX designers conduct thorough research and usability testing to create intuitive and user-friendly interfaces that enhance user satisfaction and engagement.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      </div>
    </div>
  );
};

export default Faq;

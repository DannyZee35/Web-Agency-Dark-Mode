import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlobeDemo } from "./globe";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-10 justify-center sm:justify-between max-w-[1200px] m-auto">
      <div className="w-full">
        <GlobeDemo />
      </div>
      <div className="w-full p-10 sm:p-0">
        <div className="grid    items-center gap-1.5  mb-10">
          <Label htmlFor="email" className="font-bold">
            Email
          </Label>
          <Input type="email"  className="border border-[#2B2B2B]  " id="email" placeholder="Email" />
        </div>
        <div className="grid     items-center gap-1.5 mb-10">
          <Label htmlFor="name">Name</Label>
          <Input type="text" className="border border-[#2B2B2B]" id="email" placeholder="Name" />
        </div>
        <div className="grid   gap-1.5 mb-10">
          <Label htmlFor="message">Your message</Label>
          <Textarea className="border border-[#2B2B2B]" placeholder="Type your message here." id="message" />
        </div>
        <div className="grid   gap-1.5 mb-10">
          <Button className="bg-blue transition-all duration-300 hover:bg-white hover:text-black   " size="lg">Get In Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

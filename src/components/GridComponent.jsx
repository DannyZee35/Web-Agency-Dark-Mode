import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { icons } from "lucide-react";

const GridComponent = () => {
  const items = [
    {
      icon:'/desktop.png',

      title: "Desktop Application Development",
      description: "Designing robust desktop applications that empower businesses with enhanced productivity and performance.",
     
    },
    {
      icon:'/mobile.png',

      title: "Mobile Development",
      description: "Building sleek and scalable mobile applications for iOS and Android platforms, tailored to meet your specific business needs and target audience."
    },
    {     icon:'/ai.png',

      title: "Artificial Intelligence",
      description: "Harnessing the power of AI to develop intelligent solutions that automate processes, analyze data, and provide personalized experiences, revolutionizing the way businesses operate."
    },
    {
      icon:'/word.png',

      title: "WordPress Development",
      description: "Creating dynamic and feature-rich WordPress websites, leveraging the versatility of the platform to deliver engaging content management solutions that drive growth and engagement.",

         image: "/wordpress.jpg",
        hasImage:true,
        verticalFlex:true
    },
    {
      icon:'/web.png',
       title: "Web Development",
       description: "Crafting captivating websites that seamlessly blend creativity with functionality, ensuring a delightful user experience across all devices and platforms.",
       image: "/webdev.jpg",
      hasImage:true
      },
   
    {
      icon:'/ui.png',

      title: "UI/UX Design",
      description: "Crafting visually stunning and intuitive user interfaces, combined with seamless user experiences, to enhance brand perception and maximize user engagement.",

    
    },
   
  ];
  return (
<div>
  <h1 className="max-w-[1200px] m-auto font-bold text-lg text-white text-center sm:text-left mb-10">What We Do</h1>
      <BentoGrid className="max-w-[1200px] mx-auto sm:p-0 p-5">
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            hasImage={item.hasImage}
            verticalFlex={item.verticalFlex}
            className={`${
              index === 3 ? "row-span-1 sm:row-span-2" : ""} ${
              index === 4 ? "col-span-1 sm:col-span-2" : ""}`
            }
                      />
        ))}
      </BentoGrid>
    </div>
  );
};

export default GridComponent;

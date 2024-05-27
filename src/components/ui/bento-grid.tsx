import { cn } from "@/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-4 gap-5 ", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    image,
    hasImage,
    verticalFlex,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    image?:React.ReactNode;
    hasImage?:Boolean;
    verticalFlex?:Boolean;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200  shadow-input dark:shadow-none p-4   bg-gradientDiagonal border border-[#2B2B2B] justify-between flex flex-col space-y-4",
                className
            )}
        >
          
            <div className="group-hover/bento:translate-x-2 transition duration-200">
            <Image className="rounded-xl bg-[#000000] p-3 mb-2" src={icon} height={50} width={50}/>
                <div className={`flex flex-col sm:flex-row   ${verticalFlex ? "sm:flex-col gap-5 sm:gap-24" : "flex-row gap-5"} items-center justify-center`}>
                    <div>
                        <div className="font-sans font-bold text-neutral-600 text-white dark:text-neutral-200 mb-2 mt-2">
                            {title}
                        </div>
                        <div className="font-sans font-normal text-primary text-neutral-600 text-xs dark:text-neutral-300">
                            {description}
                        </div>
                    </div>
                    {hasImage ? <Image className="rounded-xl" src={image} height={300} width={300}/> :
                    "" }
                    
                </div>

            </div>
        </div>
    );
};

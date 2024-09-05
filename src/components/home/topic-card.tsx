'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link';

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const TopicCard = ({title, description, image, link}: TopicCardProps) => {
  return (
    <div className="w-full md:w-[624px] border border-[#E2E5E8] rounded-[20px] md:p-10 px-5 py-4 ">
      <h3 className="text-black-1 text-[20px] font-bold ">{title}</h3>
      <p className="text-[#767D84] text-lg font-normal leading-8   mb-5">{description}</p>
      <div className="">
        <Button 
          variant="outline" 
          className="w-full border-black-1 h-[60px] text-[20px] font-normal text-black-1 hover:border-none hover:bg-[#E2E5E8]"
          asChild
        >
           <Link href={link}>Join tutorial</Link>
        </Button>
      </div>
      <div className="w-full h-[300px] md:h-[362px] relative mt-8">
        <Image 
          src={image}
          alt= "frontend"
          fill
        />
      </div>
    </div>
  )
}

export default TopicCard
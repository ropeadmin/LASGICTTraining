'use client'

import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import Link from "next/link";

interface LocationCardProps {
  location: string;
  address: string;
  onClick: () => void;
}

const LocationCard = ( { address, location, onClick }:  LocationCardProps) => {
  return (
    <div className="border border-[#E2E5E8] w-[379px] px-6 py-6 rounded-[8px]">
      <div className="">
        <h3 className="text-black-1 text-lg font-medium leading-none">{location}</h3>
        <p className="text-[#767D84] text-sm font-normal mt-2 mb-5">{address}</p>
        <div className="flex items-center space-x-3">
        <Link 
          className={`
            ${buttonVariants({ variant: "outline"})} 
            w-[182px] rounded-[50px] text-sm text-black-1 font-normal border  space-x-6 border-black-1 hover:border-none hover:bg-[#F2F3F5]
          `}
          href={"/"}
          target="_blank"
        >
          Join meeting link
          <Image
            src={"/icons/meet.svg"}
            alt="google meet"
            height={16}
            width={20}
            className='ml-2'
          />
        </Link>
        <Button className="w-[129px] bg-[#EAEBEB] px-4  hover:border-none hover:bg-[#F2F3F5]" asChild>
          <Link href="/recordings">View</Link>
        </Button>
        </div>
       
      </div>
    </div>
  )
}

export default LocationCard
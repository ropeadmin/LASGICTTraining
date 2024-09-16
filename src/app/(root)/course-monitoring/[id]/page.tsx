'use client'

import Link from 'next/link'
import LocationCard from '@/components/home/location-card'
import { courses, location } from '@/contants'
import { AlarmClock, Calendar, Minus, MoveLeft } from 'lucide-react'

const CourseMonitoring = ({ params }: { params: { id: string } }) => {

  const course = courses.find((cors) => cors.id.toString() === params.id);


  return (
    <section className='pt-28 md:pt-8'>
      <Link href={"/"} className='flex items-center space-x-2 mb-8'>
        <MoveLeft size={20} />
        <p className='text-black-1 font-normal text-[20px]'>back</p>
      </Link>

      <div className='h-full w-full border border-[#E2E5E8] p-10 rounded-[16px]'>
        <p className="text-[#A0AEC0] text-base font-medium leading-none">COURSE</p>
        <h1 className='text-3xl md:text-[50px] pt-4 md:pt-0 text-black-1 md:leading-[70px] font-medium md:tracking-[-4%]'>{course?.name}</h1>
        <p className='text-lg text-normal text-[#767D84]'>{course?.description}</p>

        <div className='w-fit mt-8 flex items-center space-x-3 border-[0.5px] border-[#1164FA] rounded-[30px] h-[48px] px-[20px] bg-[rgb(238,247,255)]'>
          <span className='text-[20px] text-base font-normal text-[#1164FA]'>Ongoing tutorial:</span>
          <div className="flex items-center ml-3">
            <div className="flex items-center  space-x-1">
              <Calendar className='text-[#1164FA]' size={15}/>
              <p className='text-[#1164FA] text-base font-medium'>Day 3</p>
            </div>
            <Minus className='rotate-90 text-[#1164FA]'/>
            <div className="flex items-center space-x-1">
              <AlarmClock className='text-[#1164FA]' size={15}/>
              <p className='text-[#1164FA] text-base font-medium py-2'>10 - 12 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' w-full border border-[#E2E5E8] p-10 rounded-[16px] mt-8'>
        <p className="text-[#A0AEC0] text-base font-medium mb-5 leading-none">PHYSICAL LOCATION</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full flex-wrap gap-8">
          {
            location.map((item, index) => (
              <LocationCard
                id={item.id}
                key={index}
                location={item.location}
                address={item.address}
                onClick={() => null}
              />
            ))
          }
        </div>
      </div>

      {/* <div className=' w-full border border-[#E2E5E8] p-10 rounded-[16px] mt-8'>
        <p className="text-black-1 text-[20px] font-normal mb-5">Course Recordings</p>
        <div className='flex flex-col space-y-5'>
         {
            recordings.map((record, index) => (
              <Recordings k day={record.day} title={record.title} />
            ))
          }
        </div>
      </div> */}
    </section>
  )
}

export default CourseMonitoring
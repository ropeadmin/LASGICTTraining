import Link from 'next/link'
import { recordings } from '@/contants'
import { AlarmClock, Calendar, Minus, MoveLeft } from 'lucide-react'
import Recordings from '@/components/home/recordings'

const RecordingsPage = () => {
  return (
    <section className='pt-8'>
      <Link href={"/course-monitoring"} className='flex items-center space-x-2 mb-8'>
        <MoveLeft size={20} />
        <p className='text-black-1 font-normal text-[20px]'>back</p>
      </Link>

      <div className='h-full w-full border border-[#E2E5E8] p-10 rounded-[16px]'>
        <p className="text-[#A0AEC0] text-base font-medium">COURSE</p>
        <h1 className='text-[50px] text-black-1 leading-[70px] font-medium tracking-[-4%]'>MACTAY HEADQUARTERS</h1>
        <p className='text-lg text-normal text-[#767D84]'>5, Prince Adelowo Adedeji St, Peninsula, Lekki Phase 1, Lagos.</p>
      </div>

      <div className=' w-full border border-[#E2E5E8] p-10 rounded-[16px] mt-8'>
        <p className="text-black-1 text-[20px] font-normal mb-5">Course Recordings</p>
        <div className='flex flex-col space-y-5'>
        {
            recordings.map((record, index) => (
              <Recordings key={index} day={record.day} title={record.title} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RecordingsPage
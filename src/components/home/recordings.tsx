import { Button } from '../ui/button'
import { Play } from 'lucide-react'

interface RecordingsProps {
  day: string
  title: string
}

const Recordings = ({ day, title }: RecordingsProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div className=" w-7 h-7 bg-[#F2F3F5] rounded-full flex items-center justify-center">
        <span className="text-base text-[#767D84] font-medium">{day}</span>
      </div>

      <div className="flex items-center space-x-3">
        <p className='text-base text-black-1 font-normal'>{title}</p>
        <Button variant={"outline"} className='h-7 border-[0.5px] border-black-1'> 
          <Play className='text-black-1' size={16}/>
          <span className='text-sm text-black-1 font-normal ml-1'>Playback</span>
        </Button>
      </div>
  </div>
  )
}

export default Recordings
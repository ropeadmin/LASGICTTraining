'use client'

import TopicCard from "@/components/home/topic-card";
import { courses } from "@/contants";

export default function Home() {
  return (
    <main className="pt-28 md:pt-8">
      <h1 className="text-3xl md:text-[50px] md:mx-auto text-black-1 md:leading-[70px] font-light md:text-center max-w-[85%] md:tracking-[-4%]">
        Learn and thrive in the digital world today by mastering tech skills that drive innovation.
      </h1>
      <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-5 md:gap-y-0 mt-10 w-full md:w-fit mx-auto">
        {
          courses.map(course => (
            <TopicCard
            title={course.name}
            description={course.description}
            image={course.image}
            link={`/course-monitoring/${course.id}`}
            />
          ))
        }
      </div>
    </main>
  );
}


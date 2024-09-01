'use client'

import TopicCard from "@/components/home/topic-card";

export default function Home() {
  return (
    <main className="pt-8">
      <h1 className="text-[50px] mx-auto text-black-1 leading-[70px] font-light text-center max-w-[85%] tracking-[-4%]">
        Learn and thrive in the digital world today by mastering tech skills that drive innovation.
      </h1>
      <div className="grid grid-cols-2 gap-x-8 mt-10 w-fit mx-auto">
        <TopicCard
          title="FRONT END ENGINEERING"
          description="Learn HTML, CSS, JavaScript."
          image="/images/frontend.svg"
          link={"/course-monitoring"}
        />

        <TopicCard
          title="DATA ANALTYICS"
          description="Learn data analytics."
          image="/images/data.svg"
          link={"/course-monitoring"}
        />
      </div>
    </main>
  );
}


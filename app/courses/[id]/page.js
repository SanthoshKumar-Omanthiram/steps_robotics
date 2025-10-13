import CourseNews from '@/app/component/CourseNews'
import CourseWorks from '@/app/component/CourseWorks'
import FeedbackCourse from '@/app/component/FeedbackCourse'
import HeroicCourse from '@/app/component/HeroicCourse'
import StemCourse from '@/app/component/StemCourse'
import React from 'react'

export default function page() {
  return (
    <>
   <HeroicCourse />
   <StemCourse />
   <CourseWorks />
   <FeedbackCourse />
   <CourseNews />
    </>
  )
}

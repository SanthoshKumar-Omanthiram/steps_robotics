import FeedbackCourse from '@/app/component/FeedbackCourse'
import HeroicCourse from '@/app/component/HeroicCourse'
import StemList from '@/app/component/StemList'
import React from 'react'
import Faq from '../component/Faq'
import CourseWorks from '../component/CourseWorks'
import Nap from '../component/Nap'

export default function page() {
  return (
    <>
   <HeroicCourse />
   <StemList />
 <Nap />
   <FeedbackCourse />
   <Faq />
    </>
  )
}

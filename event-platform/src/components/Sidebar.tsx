import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Lessons } from './Lessons'

const GET_lESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_DESC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}


`


interface GetLessonsQueryResponse{
  lessons:{
id:string;
title:string;
slug:string;
availableAt:string;
lessonType:'live' | 'class'
  }[]
}


export  function Sidebar() {

const {data} = useQuery<GetLessonsQueryResponse>(GET_lESSONS_QUERY)
console.log(data)

  return (
    <div>
      <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
        <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
          Cronograma de Aulas
        </span>
        
      </aside>
    <div className='flex flex-col gap-8  bg-gray-700 min-h-screen '>

    {data?.lessons.map(lesson=>{
      return(
        <Lessons
        key={lesson.id}
        title={lesson.title}
        slug={lesson.slug}
        availableAt={new Date(lesson.availableAt)}
  type={lesson.lessonType}
        />
      )
    })}
      

    </div>


    </div>
  )
}

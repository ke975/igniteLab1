import { CheckCircle,Lock} from 'phosphor-react'
import {isPast , format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import {Link, useParams} from 'react-router-dom'
import classNames from 'classnames'


interface LessonsProps{
title:string;
slug:string;
availableAt:Date;
type: 'live' | 'class';
}




export function Lessons(props:LessonsProps) {

  const {slug} = useParams<{slug:string}>()

const isLessonsAvailable=isPast(props.availableAt)
const availableDateFormated=format(props.availableAt,"EEEE  ' 'd' 'MMM' 'k'h 'mm", {
locale:ptBR,
})



const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lessons/${props.slug}`} className="ml-3 group">
      <span className="text-gray-300">{availableDateFormated}</span>

      <div className={classNames(`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500`,{
          'bg-green-500':isActiveLesson,
          
      })}>
        <header className="flex items-center justify-between">
         {
            isLessonsAvailable?(
                <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2',{
                  'text-white':isActiveLesson,
                  'text-blue-500': !isActiveLesson
                })}>
                <CheckCircle size={20}/>
                Conteudo liberado</span>
            ):(
                <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
                <Lock size={20}/>
                Embreve</span>
            )



         }
          <span className={classNames('text-xs rounded py-[0-125rem] px-2 text-white border border-green-300 font-bold',{
            'border-white': isActiveLesson,
            ' border-green-300' :!isActiveLesson
          })}>{props.type==='live'? 'Ao vivo' :'Aula Prática'}</span>
        </header>
        <strong className={classNames('text-gray-200 mt-5 block',{
          'text-white':isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>{props.title}</strong>
      </div>
    </Link>
  );
}

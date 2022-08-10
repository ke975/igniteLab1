import { CheckCircle,Lock} from 'phosphor-react'
import {isPast , format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'




interface LessonsProps{
title:string;
slug:string;
availableAt:Date;
type: 'live' | 'class';
}




export function Lessons(props:LessonsProps) {

const isLessonsAvailable=isPast(props.availableAt)
const availableDateFormated=format(props.availableAt,"EEEE  ' 'd' 'MMM' 'k'h 'mm", {
locale:ptBR,
})

  return (
    <a href="#" className="ml-3">
      <span className="text-gray-300">{availableDateFormated}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
         {
            isLessonsAvailable?(
                <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                <CheckCircle size={20}/>
                Conteudo liberado</span>
            ):(
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20}/>
                Embreve</span>
            )



         }
          <span className="text-xs rounded py-[0-125rem] px-2 text-white border border-green-300 font-bold">{props.type==='live'? 'Ao vivo' :'Aula Prática'}</span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}

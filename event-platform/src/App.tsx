import {gql,useQuery} from"@apollo/client"

 

const GET_lESSONS_QUERY=gql`
query{
  lessons{
    id
    title

    teacher{
      name
    }
  }
}
`

interface Lesson{
  id:string;
  title:string;
}

function App() {

const {data }= useQuery<{lessons:Lesson[]}>(GET_lESSONS_QUERY)



  return (
    <div >
        <ul>

          {data?.lessons.map(lesson=>{
            return <li key={lesson.id}>{lesson.title}</li>
          })}
        </ul>
    </div>
  );
}

export default App;

import useSWR, {mutate} from 'swr'
import axios from 'axios'
const fetcher = url => axios.get(url).then(res => res.data) 
import Navbar from '../components/navbar'
 
const URL = `http://localhost/select`
 
const Result = () => {
   const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false })
   if (error) return <div>failed to load</div>
   if (!data) return <div>loading...</div>
   console.log('Home: ', data)
 
   const printSubjects = (subject) => {
    console.log('subject:', subject)
        if (subject && subject.length)
            return (subject.map((subject, index) =>
            (<li key={index}>
                {(subject) ? subject.subjectID : '-'} : {(subject) ? subject.subjectName : '-'} : {(subject) ? subject.departure : '-'} : {(subject) ? subject.weight : '-'}
                <button onClick={() => deleteSubject(subject.id)}> Withdraw </button>
            </li>)
        ))
        else {
            return (<h2>No subject</h2>)
        }
    }
    const deleteSubject = async (id) => {
    const result = await axios.delete(`${URL}/${id}`)
    console.log(result.data)
    mutate(URL)
    }
 
   return <div>
        <Navbar />
       <title>Registeration Result</title>
       <ul>{printSubjects(data)}</ul>


   </div>
}
 
export default Result
import React, { useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import Navbar from '../components/navbar'
 
const URL = `http://localhost/subjects`
const URL2 = `http://localhost/select`
const fetcher = url => axios.get(url).then(res => res.data)
const SWR1 = () => {
const [id, setId] = useState('')
 
   const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
   
   
 
   const printSubjects = (subjects) => {
       console.log('subjects:', subjects)
       if (subjects && subjects.length)
           return (subjects.map((subject, index) =>
           (<li key={index}>
               {(subject) ? subject.subjectID : '-'} : {(subject) ? subject.subjectName : '-'} : {(subject) ? subject.weight : '-'}
               
           </li>)
           ))
       else {
           return (<h2>No Subjects</h2>)
       }
   }

    const addsubject = async (id) =>{
        console.log(id)
        const result = await axios.get(`${URL}/${id}`)
        mutate(URL)
        const result1 = await axios.post(`${URL2}/${id}`)
        mutate(URL2)
    }
    return <div>
        <Navbar />
        <title>Register</title>
        Selected subject:
        <h2>Search Subject</h2>
        Subject ID: <input type="text" onChange={(e) => setId(e.target.value)}/>
        <button onClick={() => addsubject(id)}>Select</button>
        <ul>{printSubjects(data)}</ul>
        </div>
}
 
export default SWR1
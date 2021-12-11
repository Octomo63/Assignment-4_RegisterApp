import React, { useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
 
const URL = `http://localhost/select`

const fetcher = url => axios.get(url).then(res => res.data)
const SWR1 = () => {

   const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
   
   
 
   const printSubjects = (subject) => {
       console.log('subject:', subject)
       if (subject && subject.length)
           return (subject.map((subject, index) =>
           (<li key={index}>
               {(subject) ? subject.subjectID : '-'} : {(subject) ? subject.subjectName : '-'} : {(subject) ? subject.departure : '-'} : {(subject) ? subject.weight : '-'}
               {/* <button onClick={() => getSubject(subject.id)}>Select</button> */}
               {/* <button onClick={() => updateSubject(subject.id)}>Update</button> */}
               <button onClick={() => deleteSubject(subject.id)}> Withdraw </button>
           </li>)
           ))
       else {
           return (<h2>No subject</h2>)
       }
   }
 
  //  const getSubject = async (id) => {
  //      const result = await axios.get(`${URL}/${id}`)
  //      console.log('subject id: ', result.data)
  //      setSubject(result.data)
  //  }
 
   const addSubject = async (subjectID, subjectName,departure,weight) => {
       const result = await axios.post(URL, { subjectID, subjectName,departure,weight })
       console.log(result.data)
       mutate(URL)
   }
 
   const deleteSubject = async (id) => {
       const result = await axios.delete(`${URL}/${id}`)
       console.log(result.data)
       mutate(URL)
   }
  //   const updateSubject = async (id) => {
  //      const result = await axios.put(`${URL}/${id}`,{
  //          name,
  //          surname,
  //          major,
  //          GPA
  //      })
  //      console.log('Subject id update: ', result.data)
  //      mutate(URL)
  //  }
 
   return (<div>
       <h1> Subject </h1>
       <ul>{printSubjects(data)}</ul>
       
       selected subject :
       <h2>Add subject</h2>
          Name:<input type="text" onChange={(e) => setName(e.target.value)} /><br/>
          Surname:<input type="text" onChange={(e) => setSurname(e.target.value)}/> <br />
          Major:<input type="text" onChange={(e) => setMajor(e.target.value)}/> <br />
          GPA:<input type="number" onChange={(e) => setGPA(e.target.value)}/> <br />
       <button onClick={() => addSubject(name, surname,major,GPA)}>Add new subject</button>
 
   </div>)
}
 
export default SWR1
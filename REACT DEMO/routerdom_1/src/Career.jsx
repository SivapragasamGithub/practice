import React from 'react'
import Card from './Card'

function Career() {
  const jobs = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/08/Careers-in-Data-Science.webp",
      name: "Top 10 Data Science Job Profiles (Careers in Data Science)",
      language1: "Tamil",
      language2: "English"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/08/Data-Science-vs-Software-Engineering.webp",
      name: "Data Science vs Software Engineering: Comparing Skill Sets and Careers",
      language1: "Tamil",
      language2: "hindhi"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      name: "Best Full-Stack Development Project Ideas in 2024",
      language1: "telugu",
      language2: "-"
    }

  ]
  return (
    <div className='container' > 
    <div className='row'>
      {
        jobs.map((job)=>{
return<Card name={job.name} language1={job.language1} language2={job.language2} image={job.image}/>
        })
      }
      </div>
      </div>
  )
}

export default Career
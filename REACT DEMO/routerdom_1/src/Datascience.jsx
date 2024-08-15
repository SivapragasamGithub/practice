import React from 'react'
import Card from './Card'

function Datascience() {
  const Ds = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      language1: "Tamil",
      language2: "English"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      name: "12 Real-World Data Science Examples: Power Of Data Science",
      language1: "Tamil",
      language2: "hindhi"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      name: "Roles and Responsibilities of a Data Scientist",
      language1: "telugu",
      language2: "English"
    }

  ]
  return (
    <div className='container' >
      <div className='row' >
        {
          Ds.map((course) => {
            return <Card name={course.name} language1={course.language1} language2={course.language2} image={course.image} />
          })
        }
      </div>
    </div>
  )
}

export default Datascience
import React from 'react'
import Card from './Card'

function Fullstackdevelopment() {

  const Fsd = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      name: "Best Full-Stack Development Project Ideas in 2024",
      language1: "Tamil",
      language2: "English"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      name: "How Long Would It Take to Be a Full Stack Developer?",
      language1: "Tamil",
      language2: "hindhi"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png",
      name: "10 Best React Project Ideas for Developers [with Source Code]",
      language1: "telugu",
      language2: "English"
    }

  ]


  return (
    <div className='container' >
      <div className='row' >
        {
          Fsd.map((course) => {
            return <Card name={course.name} language1={course.language1} language2={course.language2} image={course.image} />
          })
        }
      </div>

    </div>
  )
}

export default Fullstackdevelopment
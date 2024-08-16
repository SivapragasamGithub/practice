import React from 'react'
import Card from './Card'

function Cybersecurity() {
  const Cyb = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      language1: "Tamil",
      language2: "English"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      name: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      language1: "Tamil",
      language2: "english"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      name: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      language1: "",
      language2: "English"
    }

  ]

  return (
    <div className='container' >
      <div className='row' >
        {
          Cyb.map((course) => {
            return <Card name={course.name} language1={course.language1} language2={course.language2} image={course.image} />
          })
        }
      </div>
    </div>

  )
}

export default Cybersecurity
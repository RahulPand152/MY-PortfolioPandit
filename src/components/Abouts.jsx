import React from 'react'

function Abouts() 
{

  return (
        
      

        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p className='text-lg'>
        <span className='font-bold'> Hello, I'm Rahul! </span>
        I'm a passionate web developer with a keen interest in building modern and visually appealing websites. I enjoy working with the  
        <span className="font-bold"> MERN stack </span>  
            and constantly strive to create impactful digital solutions



              Apart from coding, I love playing  
                         <span className="font-bold"> cricket </span>  
              and  
              <span className="font-bold"> chess</span>,  
              which help me stay focused and strategic.  
              Currently, I'm pursuing my  
              <span className="font-bold"> BSc CSIT </span>  
              at  
              <span className="font-bold"> Patan Multiple Campus</span>,  
              where I'm expanding my knowledge in computer science and technology.  
            </p>

        
        <br />
        
        <h1 className='text-green-500 font-semibold text-xl'>Skills & Eperties</h1>
        <section className="text-lg">
       
        <ul>
          <li><strong>Frontend</strong>: React.js, Tailwind CSS, HTML, CSS, JavaScript(ES6+)</li>
          <li><strong>Backend</strong>: Node.js, Express.js, REST APIs</li>
          <li><strong>Database</strong>: MongoDB, Appwrite</li>
          <li><strong>Tools & Others</strong>: Git, GitHub, Postman</li>
        </ul>
      </section>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Professional Experience</h1>
        <section>
        
      
        <h3 className=' font-bold'>E-commerce Website</h3>
          <ul>
            <li>Developed a full-stack book-selling platform using Node.js, Express.js, and MongoDB.</li>
            <li>Built RESTful APIs for user authentication, book listing, orders, and payments.</li>
            <li>Implemented secure authentication with JWT and bcrypt.</li>
            <li>Optimized database queries, reducing response times by 40%.</li>
            <li>Designed a responsive UI with React.js and Tailwind CSS, improving user experience.</li>
          </ul>
    
      </section>

    
        <br />
        <h1 className='text-green-500 font-semibold text-lg'>Mission Statement</h1>
        <p>
             My mission is to leaverage my skills and creativity to deliver innovative Web development solutiion that exceed client 
             expectations and contribute positively to the digital  landscap. I am committed to contionous learning and growth, always 

              seeking new challenges and  opportunities to expand my horizons.
        </p>

      </div>
    
    
  )
}

export default Abouts

import React from 'react'

export default function Hero() {
  return (
    <div>
       <main className='hero'>
        <div className='hero-content'>
            <h1>You Feet Deserve The Best</h1>
            <p>Nike By You — a modernized platform of NikeiD that allows for sneaker 
                customization — now pivots its focus towards the ever-classic Blazer family.
                 </p>
            <div className='hero-btn'> 
             <button>Shop Now</button>
             <button>Category</button>
            </div>  
        </div>
        <div className='hero-image'>
            <img src="OIP2.jpeg" alt='hero-jpg'/>
        </div>
       </main>
    </div>
  )
}

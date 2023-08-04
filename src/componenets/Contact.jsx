import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
        
            <h1>Only for business</h1>
            <div>
            <form>
                
            <div>
                <label > Name</label>
                <input type="text" required placeholder='Enter a name'/>
            </div>
            <div>
                <label > Email</label>
                <input type="email" required placeholder='xyz@gmail.com'/>
            </div>

            <div>
                <label > Message</label>
                <input type="text" required placeholder='Your message here'/>
            </div>
            <button type='submit' > Send</button>
            
            </form>
            </div>
        </main>
    </div>
  )
}

export default Contact
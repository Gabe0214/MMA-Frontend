import React, { useState } from 'react'

const EmailSubscribe = () => {
    const [email, setEmail] = useState('')
    return(
        <div className='email-container'>
            <div className='text-container'>
                <h3 className='subtitle'>Subscribe</h3>
                <p>Sign up for the latest news, new drops, upcoming sale
                notices and more.
                </p>
            </div>
            <form>
                <h4>Email</h4>
                <input name='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                <button className='sign-up'>Sign Up</button>
            </form>
        </div>
    )
}

export default EmailSubscribe
/* SignIn.js */
import React, {useState} from 'react'
import './index.css'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)

  const handleSignIn = e => {
    e.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      alert('Sign in successful!')
      // Redirect or do other actions as needed
    } else {
      alert('Invalid email or password')
    }
  }

  const handleForgotPassword = () => {
    setForgotPassword(true)
  }

  const handleResetPassword = e => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // Store new password in localStorage or send to server
    localStorage.setItem('password', newPassword)
    alert('Password reset successful!')
    // Redirect or do other actions as needed
    setForgotPassword(false)
  }

  const handleGoBack = () => {
    setForgotPassword(false)
  }

  return (
    <div className="centered-container">
      <h2>{forgotPassword ? 'Reset Password' : 'Sign In'}</h2>
      {forgotPassword ? (
        <>
          <form onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          <button className="back-btn" onClick={handleGoBack}>
            &#8592; Back to Sign In
          </button>
        </>
      ) : (
        <>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <button className="forgotPassword" onClick={handleForgotPassword}>
            Forgot Password
          </button>
        </>
      )}
    </div>
  )
}

export default SignIn

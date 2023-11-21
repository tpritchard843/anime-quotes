import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';

export default function AuthContainer(authProps) {
  if (authProps.isLoginClicked) {
    return (
      <div className='auth-container'>
        <Header text='Log In' />
        <Form className='login-form'>
          <Form.Group className="mb-3" controlId="loginForm.ControlUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.ControlPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" />
          </Form.Group>
          <Button>Log In</Button>
        </Form>
      </div>
    );
  }
  if (authProps.isSignupClicked) {
    return (
      <div className='auth-container'>
        <Header text='Sign Up' />
        <Form className='signup-form'>
          <Form.Group className="mb-3" controlId="signupForm.ControlUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupForm.ControlPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" />
          </Form.Group>
          <Button>Sign Up</Button>
        </Form>
      </div>
    );
  }
  return (
    <div className='auth-container'>
      <Button onClick={authProps.renderLoginForm}>Log In</Button>
      <Button onClick={authProps.renderSignupForm}>Sign Up</Button>
    </div>
  );
}

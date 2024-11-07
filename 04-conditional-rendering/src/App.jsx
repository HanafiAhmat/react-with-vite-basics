import { useState } from 'react';

function HomePage() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <h1>Login Page!</h1>
    </>
  );
}

function App() {
  // useState() is a react's shortcut function to maintain a state within the page/component
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }


  // conditional rendering by assigning value to variable outside of the "return" section
  let content;
  if (isLoggedIn) {
    content = <HomePage />;
  } else {
    content = <LoginPage />;
  }

  return (
    <div>

      {/* conditional rendering directly in "return" section */}
      {isLoggedIn ?
        (
          <>
            <HomePage />
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <LoginPage />
            <button onClick={login}>Log In</button>
          </>
        )}


        {/* print variable value in "return" section */}
        {content}

    </div>
  );
}

export default App;

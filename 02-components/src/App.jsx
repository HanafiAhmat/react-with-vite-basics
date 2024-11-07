import ClsComp from "./components/ClsComp";                         // Import first before use it
import FunComp from "./components/FunComp";                         // Can't have aliase name Ex: FunComp as fc or FunComp fc                      

// React app - collection of components
// Components - A piece of UI (user interface) 
//            - has its own logic and appearance. 
//            - Single tag or multiple tags such as Header, a button, or an entire page.
//            - JavaScript functions that return markup:


// Markup syntax inside the function is called JSX
// JSX is stricter than HTML. Must close the tags properly 
// Wrap multiple tags into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

function ClickMeButton() {
  return (
    <button>Click Me!</button>                        // Single tag with out wrapper                      
  );
}


function AboutMe() {
  return (                                            // Multiple tags with React fragment - <>...</>
    <>                               
      <h1>About Me</h1>
      <p>Hello there.<br />
        I am Alice here. <br/>
        How do you do?</p>
    </>
  );
}


function App() {
  return (
    <div> 
      <h1>Welcome to React component world running on Vite!</h1>
        <ClickMeButton></ClickMeButton>               {/*Add function as a tag to render HTML */}

        <AboutMe></AboutMe>                           {/* Nested components within the file(js) or other file (js)*/}

        <ClsComp />                                   {/* Self closing tag is a best practice & clean */}
        <FunComp />                          
    </div> 
  );
}

export default App;

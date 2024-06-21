import Test from './test'

function App() {
  // decalring a variable
  const username = "rohit garg";

  return (
    // <h1>Hello ROHIT | garg</h1>
    // if we try to return both the above h1 tag and the <Test /> function
    // it will give an error , since we can only return one element from here

    // hence to pass multiple things from here , we can  wrap all these things in a div tag or a <> tag.

    //  this won't give any error -->
    <>
    <h1>Hello ROHIT | garg ---- {username}</h1>
    <Test />
    </>

    // ************* NOTE - (Important for interviews) **********
    /*
    {username} is the evaluated expression
    we only write final outcome inside curly braces
    all the condition checks and operation needs to be done somewhere else
    we wont write all that inside these curly braces
    we will just write the final ans inside these curly braces

    REASON - Since we cannot write if , else ,etc. inside objects
  (after all , all these things would be first inserted into an object , that would give a result)
    */  
    
  )
}

export default App

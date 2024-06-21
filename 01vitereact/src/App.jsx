import Test from './test'

function App() {
  
  return (
    // <h1>Hello ROHIT | garg</h1>
    // if we try to return both the above h1 tag and the <Test /> function
    // it will give an error , since we can only return one element from here

    // hence to pass multiple things from here , we can use wrap all these things in a div tag or a <> tag.

    //  this won't give any error -->
    <>
    <h1>Hello ROHIT | garg</h1>
    <Test />
    </>
    
  )
}

export default App

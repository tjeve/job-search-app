// Job Search App
import React from "react"
import './Jobs.css'

const Jobs = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Jobs in Atlanta</h1>
                    <p className="App-subtitle">Click to explore Jobs</p>
                </header>
            </div>
            <div className="Jobs">Loading...</div>
        </div>
    )
}

// class App extends React.component {

//     render() {
//         return(
//             <HeaderBar />
//         )
//     }
// }

// "Jobs" is the main default export from this file and therefore if imported
// it will be the main thing that comes out of it if you import the file.
export default Jobs

/* you can also export something like this:

export { Jobs }

--> where Jobs is a function or variable that you want exported.
Another way to export all variables or functions is by doing something like this:

export * _____________ (I think, and when importing you can import similarly like

import * from "./Jobs.js" (something like this)
--> but it will import into the new document as an object and then you can call on the 
functions or variables in that file as keys to the new object you defined that contains
all of the functions or variables in that file.

*/
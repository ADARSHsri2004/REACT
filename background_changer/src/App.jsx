import { useState } from 'react'
import './App.css'
function App() {
  const [bgColor, setBgColor] = useState("white");

  // Function to change background color
  const changeBackground = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div style={{
        backgroundColor: bgColor,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }} >

        <div className="row flex gap-10 m-10 bg-orange-100 h-10 w-auto align-middle justify-center rounded-lg" >
          <button onClick={() => {
            setBgColor("red")
          }
          } className='bg-red-600 w-20 rounded-lg  transition-transform duration-300 transform hover:scale-110 shadow '>RED</button>
          <button onClick={() => {
            setBgColor("green")
          }
          } className='bg-green-600 w-20  transition-transform duration-300 transform hover:scale-110 rounded-lg shadow '>GREEN</button>
          <button onClick={() => {
            setBgColor("blue")
          }
          } className='bg-blue-300 w-20  transition-transform duration-300 transform hover:scale-110 rounded-lg shadow '>BLUE</button>
          <button onClick={() => {
            setBgColor("yellow")
          }
          } className='bg-yellow-500 w-20  transition-transform duration-300 transform hover:scale-110 rounded-lg shadow '>YELLOW</button>
          <button onClick={() => {
            setBgColor('#0C1116')
          }
          } className='bg-black text-white w-20  transition-transform duration-300 transform hover:scale-110 rounded-lg shadow '>BLACK</button>

        </div>
      </div >

    </>
  )
}

export default App

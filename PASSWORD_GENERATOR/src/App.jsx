import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  const passwordgenrater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*-/()_+:[]{}`~"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }
    , [length, numAllowed, charAllowed, setpassword])

  const copyPass = useCallback(
    () => {
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
    },
    [password],
  )

  useEffect(() => {
    passwordgenrater()
  }, [length, numAllowed, charAllowed, passwordgenrater])



  return (
    <>
      <div className='flex items-center justify-center h-[100vh] bg-gray-100'>

        <div className=' w-[40vw] shadow-md rounded-lg px-4 bg-gray-200 h-[20vh]  p-8 '>
          <div className=' flex flex-row  justify-center  '>
            <input type="text" value={password} className='w-[30vw] rounded p-2' placeholder='password' readOnly ref={passwordRef} />
            <button onClick={copyPass} className='bg-green-500 transition-all duration-300 ease-in-out hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg '>
              COPY
            </button>

          </div>
          <div className='flex m-5 gap-11'>

            <div className='flex gap-2'>
              <input type="range" min={8} max={50} className='cursor-pointer rounded-lg'
                value={length}
                onChange={(e) => {
                  setlength(e.target.value)

                }
                } />

              <label>Length:{length}</label>
            </div>
            <div className='flex gap-5'>
              <div className='flex'>
                <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={() => {
                  setnumAllowed((prev) => !(prev))
                }
                } />
                <label htmlFor="numberInput">Numbers</label>
              </div>

              <div>
                <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
                  setcharAllowed((prev) => !(prev))
                }
                } />
                <label htmlFor="charInput">Characters</label>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

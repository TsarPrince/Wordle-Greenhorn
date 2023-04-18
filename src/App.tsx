import { useState, useEffect } from 'react'
import words from './constants/words.json'
import dragElement from './utils/draggable'

interface DataType {
  0?: string
  1?: string
  2?: string
  3?: string
  4?: string
}

function App() {
  const [display, setDisplay] = useState<string[]>([])

  useEffect(() => {
    const element = document.querySelector('#draggable') as HTMLElement
    dragElement(element)
  }, [])


  const correct: DataType = {}
  const present: DataType = {}
  const absent: string[] = []


  const refresh = () => {
    // window.addEventListener('keydown', (e) => {
    //   if (e.key === 'Enter') {
    //     refresh()
    //   }
    // })
    // const enterButton = document.querySelector('[data-key="↵"]') as HTMLButtonElement
    // enterButton.addEventListener('click', refresh)

    const grid = document.querySelector('.Board-module_board__jeoPS')
    const rows = grid?.childNodes

    if (rows) {
      for (const row of rows) {
        const cells = row.childNodes
        cells.forEach((cell, index) => {
          const actualCell = cell.childNodes[0] as HTMLDivElement
          const label = actualCell.getAttribute('aria-label')

          if (label != 'empty') {
            const [char, state]: string[] = label?.split(' ') || []
            if (state === 'correct') {
              correct[index as keyof DataType] = char
            } else if (state === 'present') {
              present[index as keyof DataType] = char
            } else if (state === 'absent') {
              if (!absent.includes(char)) absent.push(char)
            }
          }

        })
      }
    }


    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      let cont = false;

      // remove words containing 'absent' characters
      // don't remove words containing 'absent' chars if that specific char is in present also
      for (const unwanted of absent) {
        if (Object.values(correct).includes(unwanted)) continue
        if (Object.values(present).includes(unwanted)) continue
        if (word.includes(unwanted)) {
          words.splice(i, 1)
          i--
          cont = true
          break
        }
      }
      if (cont) continue

      // remove words containing 'present' characters at wrong positions
      // or not containing 'present' characters at all
      for (let wrongIndex of Object.keys(present)) {
        let index = parseInt(wrongIndex)
        let char = present[index as keyof DataType] as string
        if (!word.includes(char) || word[index] === char) {
          words.splice(i, 1)
          i--
          cont = true
          break
        }
      }
      if (cont) continue


      // remove words not containing 'correct' characters at right positions
      for (let rightIndex of Object.keys(correct)) {
        let index = parseInt(rightIndex)
        if (word[index] !== correct[index as keyof DataType]) {
          words.splice(i, 1)
          i--
          break
        }
      }
    }
    console.log({ correct, absent, present })
    setDisplay([...words])
  }

  const reset = () => {
    localStorage.removeItem('nyt-wordle-moogle/ANON')
    location.reload()
  }

  const enterWord = (word: string) => {
    const clearButton = document.querySelector('[data-key="←"]') as HTMLButtonElement
    const enterButton = document.querySelector('[data-key="↵"]') as HTMLButtonElement

    // clear the row
    for (let i = 0; i < 5; i++) {
      clearButton.click()
    }
    // enter the word
    for (let char of word) {
      const selector = `[data-key="${char}"]`
      const keyButton = document.querySelector(selector) as HTMLButtonElement
      keyButton.click()
    }
    // press enter
    enterButton.click()

    const progressBar = document.querySelector('#progress-bar') as HTMLDivElement
    progressBar.classList.toggle('animate-progress')

    setTimeout(() => {
      progressBar.classList.toggle('animate-progress')
      refresh()
    }, 2000)
  }

  return (
    <div id='draggable' className='bg-[#121213] border-2 border-solid border-[#3a3a3c] p-3 rounded-md text-white flex flex-col left-12 top-0 sticky translate-y-1/2 w-[24rem] overflow-hidden'>
      <div className="space-y-3">
        {/* draggable header */}
        <div id='draggable-header' className='h-8 bg-black cursor-move -mt-3 -mx-3 text-gray-500 flex items-center justify-center'>
          <svg className='w-8 h-8' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="60" cy="92" r="16" /><circle cx="128" cy="92" r="16" /><circle cx="196" cy="92" r="16" /><circle cx="60" cy="164" r="16" /><circle cx="128" cy="164" r="16" /><circle cx="196" cy="164" r="16" /></svg>
        </div>

        <div>
          <p className='text-gray-400 text-xs'>Starters</p>
          {['pious', 'crane', 'abort', 'prone'].map(word => (
            <button onClick={() => { enterWord(word) }} key={word} className='mr-1 hover:bg-emerald-400 hover:text-black hover:cursor-pointer'>{word}</button>
          ))}
        </div>
        <div className='h-[20rem] break-words overflow-y-scroll'>
          <p className='text-gray-400 text-xs'>{words.length} possibility</p>
          {display.map(word => (
            <button onClick={() => { enterWord(word) }} key={word} className='mr-1 hover:bg-gray-100 hover:text-black hover:cursor-pointer'>{word}</button>
          ))}
        </div>
        <div className='flex'>
          <button className='NavAccount-module_subscribeButton__F3y0Z' onClick={() => { refresh() }}>Refresh</button>
          <button className='NavAccount-module_loginButton__p4LNv' onClick={() => { reset() }}>Reset</button>
        </div>
      </div>

      {/* Progress bar */}
      <div className='-mb-3 mt-3 -mx-3'>
        <div className="w-full relative bg-transparent h-1">
          <div id='progress-bar' className="bg-blue-600  w-0 h-1 retain_forward"></div>
        </div>
      </div>
    </div>
  )
}

export default App

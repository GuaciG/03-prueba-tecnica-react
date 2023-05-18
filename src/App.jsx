/* eslint-disable space-before-function-paren */
import './App.css'
// import { Otro } from './components/Otro'

import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kitten App</h1>

      <section>
        <aside>
          <button className='newfact-button' onClick={handleClick}>
            Get new fact
          </button>
          {fact && <p>{fact}</p>}
        </aside>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  )
}

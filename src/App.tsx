import { type FC, useState } from 'react'
import Letter from './Letter.tsx'
import Confirmation from './Confirmation.tsx'

const App: FC = () => {
    const [isAccepted, setIsAccepted] = useState(false)

    const accept = () => setIsAccepted(true)

    return <div className="bg-pink-400">{isAccepted ? <Letter /> : <Confirmation accept={accept} />}</div>
}

export default App

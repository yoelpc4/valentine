import { type FC, useState } from 'react'

interface ConfirmationProps {
    accept: () => void
}

const yesTopPercent = 50 // vertical center of the container
const gapPercent = 50 // horizontal gap between the two buttons (in percent)
const yesLeftPercent = 50 - gapPercent / 2 // place Yes slightly left of center
const noInitialLeftPercent = 30 + gapPercent / 2 // place No slightly right of center

const Confirmation: FC<ConfirmationProps> = ({ accept }) => {
    const [position, setPosition] = useState({
        top: yesTopPercent,
        left: noInitialLeftPercent,
    })

    // generate a new (top,left) inside 10%..90% and avoid being too close to Yes center.
    const moveAway = () => {
        const avoidRadius = 40 // in percent space, distance from yes center to avoid
        let tries = 0
        let newTop = position.top
        let newLeft = position.left

        do {
            // 10%...90%
            newTop = 10 + Math.random() * 80
            newLeft = 10 + Math.random() * 80
            tries++
            // distance from center in percent space
        } while (Math.hypot(newTop - yesTopPercent, newLeft - yesLeftPercent) < avoidRadius && tries < 30)

        setPosition({
            top: newTop,
            left: newLeft,
        })
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 text-white">
            <h1 className="text-2xl font-bold">Would you be my valentine?</h1>

            <div className="relative h-16 w-full max-w-xl">
                <button
                    className="absolute translate-1/2 cursor-pointer rounded border-2 border-white bg-green-500 px-4 py-2 text-center shadow-lg hover:bg-green-600"
                    style={{
                        top: `${yesTopPercent}%`,
                        left: `${yesLeftPercent}%`,
                    }}
                    aria-label="Accept"
                    onClick={accept}
                >
                    Yes
                </button>

                <button
                    className="absolute z-2 translate-1/2 cursor-pointer rounded border-2 border-white bg-red-500 px-4 py-2 text-center shadow-lg transition-all duration-200 ease-in-out hover:bg-red-600"
                    style={{
                        top: `${position.top}%`,
                        left: `${position.left}%`,
                    }}
                    aria-label="Decline"
                    onMouseEnter={moveAway}
                    onClick={moveAway}
                >
                    No
                </button>
            </div>
        </div>
    )
}

export default Confirmation

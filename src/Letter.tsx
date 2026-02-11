import { type FC, useState } from 'react'
import { cn } from './utils.ts'

const Letter: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex min-h-screen items-center justify-center">
            {/* wrapper */}
            <div className={cn(
                "bg-ivory shadow-2xl transition-all ease-in-out duration-500",
                isOpen && 'mt-75',
                isOpen ? 'delay-[400]' : 'delay-1000',
            )}>
                {/* envelope */}
                <div className="relative h-57.5 w-75">
                    {/* cover */}
                    <div
                        className={cn(
                            'absolute top-0 origin-top border-x-150 border-t-130 border-x-transparent border-t-warm-sand transition-all delay-700 duration-500 ease-in-out',
                            isOpen && 'rotate-x-180',
                            isOpen ? 'z-0' : 'z-2',
                        )}
                        aria-hidden
                    />

                    {/* body */}
                    <div
                        className="absolute z-2 size-0 border-x-150 border-t-130 border-b-100 border-x-sandy-tan border-t-transparent border-b-sandy-tan"
                        aria-hidden
                    />

                    {/* letter */}
                    <div
                        className={cn(
                            'absolute right-[20%] h-full w-[60%] bg-white p-3 text-justify text-xs leading-3.5 tracking-tighter text-charcoal shadow-sm transition-all duration-1000 ease-in-out',
                            isOpen && '-translate-y-24 scale-150 delay-1000',
                            isOpen ? 'bottom-30' : 'bottom-0',
                        )}
                    >
                        <h1 className="font-bold">Dear NN,</h1>

                        <p className="mt-2">
                            I'm happy with how our LDR has progressed so far until our first valentine, as we continue to get to know each other day by day. Like a watchman
                            longing for the dawn, my heart longs for you. Remember I always love you, now and forever.
                            <br /> <br />
                            With Love, <span className="font-bold">YPC</span>.
                        </p>
                    </div>

                    {/* heart */}
                    <button
                        title="toggle envelope"
                        className={cn(
                            'absolute top-1/2 left-[45%] z-4 size-3.75 translate-x-1/2 translate-y-1/5 transform cursor-pointer bg-red-500 shadow-lg delay-1000 duration-500 ease-in-out',
                            isOpen ? 'rotate-135' : '-rotate-45',
                            isOpen ? 'delay-[400]' : 'delay-1000',
                        )}
                        aria-pressed={isOpen}
                        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                    >
                        {/* heart left */}
                        <span className="absolute top-[-7.5px] left-0 size-3.75 rounded-full bg-red-500" />

                        {/* heart right */}
                        <span className="absolute top-0 right-[-7.5px] size-3.75 rounded-full bg-red-500" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Letter

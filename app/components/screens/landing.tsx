interface LandingProps {
    gentiumFont: string,
}

export default function Landing({ gentiumFont }: LandingProps) {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <p
                className={`italic lg:h-32 ${gentiumFont} text-6xl lg:text-9xl`}
            >
                Noah Arsić
            </p>
            <p className={`text-xl lg:text-3xl italic ${gentiumFont}`}>est. 2005</p>
            <p className="text-3xl lg:text-6xl mt-5 lg:mt-10">Passionate software developer</p>
        </div>
    )
}
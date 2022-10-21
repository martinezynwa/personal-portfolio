import { MdArrowForwardIos } from 'react-icons/md'

const Intro = () => {
  return (
    <>
      <div className="sm:hidden h-[100vh] bg-backdrop">
        <div className="relative top-1/3">
          <h1>Martin Gnebus</h1>
          <p className='mb-1 text-xl text-darkerWhite'>An aspiring software developer</p>
          <p className='mb-14 text-darkerWhite'>Welcome to my web portfolio</p>
          <div className="flex flex-row w-fit p-3 gap-2 items-center rounded-lg text-xl text-buttonTextColor bg-buttonColor">
            <a href="#about">About Me</a>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro

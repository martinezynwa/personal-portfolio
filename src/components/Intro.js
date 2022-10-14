import { MdArrowForwardIos } from 'react-icons/md'

const Intro = () => {
  return (
    <>
      <div className="sm:hidden h-[100vh] bg-backdrop">
        <div className="relative top-1/3">
          <h2 className='mb-2 text-[44px] font-semibold'>Martin Gnebus</h2>
          <h3 className='mb-1 text-xl text-txtDarkerWhite'>An aspiring software developer</h3>
          <h3 className='mb-14 text-txtDarkerWhite'>Welcome to my web portfolio</h3>
          <div className="flex flex-row w-fit p-3 gap-2 items-center rounded-lg text-xl bg-button">
            <a href="#about">About Me</a>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro

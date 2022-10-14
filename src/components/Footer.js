import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='p-6 text-txtDarkerWhite'>
        <div className='flex flex-row gap-6 mt-6 xl:mt-16 mb-4 text-2xl w-max mx-auto cursor-pointer'>
          <FaGithub className='hover:text-white' />
          <FaLinkedinIn className='hover:text-white' />
          <FaInstagram className='hover:text-white' />
        </div>
        <div className="w-max mx-auto text-xs">
          Ⓒ 2022 Martin Gnebus.
        </div>
      </div>
    </>
  )
}

export default Footer

import { useState } from 'react'

const Experience = ({ details }) => {
  const [show, setShow] = useState(false)

  if (!show) {
    return (
      <h2 className="w-fit -ml-1 mb-2 p-1 rounded-lg text-white sm:text-darkerWhite text-containerTextSmaller hover:text-white cursor-pointer" onClick={() => setShow(!show)}>
        Click to see what I learned
      </h2>
    )
  }

  return (
    <h5 className="mb-4 px-[1px]" onClick={() => setShow(!show)}>
      {details}
    </h5>
  )
}

export default Experience

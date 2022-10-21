import { IoIosCheckmark, IoIosSchool } from 'react-icons/io'

const About = () => {
  const Knowledge = ({ name, type }) => {
    return (
      <li
        className={`flex flex-row items-center ${
          type !== 'knowledge' ? 'gap-2' : ''
        }`}>
        {type === 'knowledge' ? (
          <IoIosCheckmark className="text-3xl" />
        ) : (
          <IoIosSchool className="text-xl" />
        )}
        {name}
      </li>
    )
  }

  return (
    <>
      <div id="about" className="flex flex-col lg:flex-row margin-container lg:mt-20 gap-4 sm:gap-8">
        <div className="flex flex-col basis-2/3">
          <h2>About me</h2>
          <div className="flex flex-col gap-4 my-6">
            <h4 className="">
              Alte magna sem, convallis ac ipsum quis, sodales volutpat nunc.
              Aenean a pellentesque mi. Cras consectetur eu lorem vitae semper.
              Aliquam maximus magna quis mattis posuere. Nam sollicitudin augue
              non odio sodales, quis malesuada eros semper. Ut gravida vehicula
              ultricies.
            </h4>
            <h4>
              Nulla vitae congue dolor. Pellentesque dictum sem sem, nec
              elementum nisi interdum in. Donec vulputate sodales turpis, a
              vulputate ante imperdiet scelerisque. Pellentesque iaculis
              interdum orci in{' '}
              <span>
                <a
                  className="text-highlighted font-semibold"
                  href="#projects">
                  projects
                </a>
              </span>{' '}
              lorem.
            </h4>
            <h4>
              Aliquam faucibus diam vitae malesuada{' '}
              <span>
                <a className="text-highlighted font-semibold" href="#skills">
                  skills
                </a>
              </span>{' '}
              atis. Suspendisse in tortor feugiat, porta turpis vel, elementum
              sem.
            </h4>
          </div>
        </div>
        <div className="flex flex-col max-w-2xl lg:basis-1/3 items-center sm:mx-2 lg:mx-auto p-6 gap-6 sm:text-base text-lg bg-containerColor rounded-2xl">
          <div className="flex flex-col">
            <h3 className="mb-4 font-semibold text-xl">Experience with:</h3>
            <div className="flex flex-row gap-16 text-darkerWhite">
              <ul className="-space-y-1 -ml-2">
                <Knowledge name="Javascript" type="knowledge" />
                <Knowledge name="React" type="knowledge" />
                <Knowledge name="NodeJS" type="knowledge" />
              </ul>
              <ul className="-space-y-1">
                <Knowledge name="HTML/CSS" type="knowledge" />
                <Knowledge name="MongoDB" type="knowledge" />
                <Knowledge name="SAP ABAP" type="knowledge" />
              </ul>
            </div>
          </div>
          <div className="-ml-6 sm:-ml-8">
            <h3 className="mb-4 font-semibold text-xl">Want to learn:</h3>
            <ul className='text-darkerWhite'>
              <Knowledge name="Improve current experience" type="study" />
              <Knowledge name="Typescript" type="study" />
              <Knowledge name="NextJS" type="study" />
              <Knowledge name="React Native" type="study" />
              <Knowledge name="Every modern tech stack :)" type="study" />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

import { IoIosCheckmark, IoIosSchool } from 'react-icons/io'

const ExperienceInfo = () => {
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
      <div className="flex flex-col max-w-2xl lg:basis-1/3 items-center max-h-[375px] sm:mx-2 lg:mx-auto p-4 sm:p-6 gap-8 sm:text-base text-lg bg-containerColor rounded-2xl">
        <div className="flex flex-col">
          <h3 className="mb-4 font-semibold text-xl">Experience with:</h3>
          <div className="flex flex-row gap-16 text-darkerWhite">
            <ul className="-space-y-1 -ml-2">
              <Knowledge name="Javascript" type="knowledge" />
              <Knowledge name="React" type="knowledge" />
              <Knowledge name="NodeJS" type="knowledge" />
              <Knowledge name="GraphQL" type="knowledge" />
            </ul>
            <ul className="-space-y-1">
              <Knowledge name="HTML/CSS" type="knowledge" />
              <Knowledge name="Tailwind" type="knowledge" />
              <Knowledge name="MongoDB" type="knowledge" />
              <Knowledge name="SAP ABAP" type="knowledge" />
            </ul>
          </div>
        </div>
        <div className="-ml-6 sm:-ml-8">
          <h3 className="mb-4 font-semibold text-xl">Want to learn:</h3>
          <ul className="text-darkerWhite">
            <Knowledge name="Improve current skills" type="study" />
            <Knowledge name="Typescript" type="study" />
            <Knowledge name="React Native" type="study" />
            <Knowledge name="Every modern tech stack :)" type="study" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default ExperienceInfo

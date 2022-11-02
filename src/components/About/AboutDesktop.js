import ExperienceInfo from './ExperienceInfo'

const AboutDesktop = () => {
  return (
    <>
      <div className="hidden sm:flex sm:flex-col">
        <h2 id="about" className="lg:mt-20">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row margin-container gap-4 sm:gap-8">
          <div className="flex flex-col justify-start basis-2/3">
            <div className="flex flex-col gap-4">
              <h4 className="">
                My name is Martin and I'd say I'm currently on a path to become
                a full-stack developer. I've been doing some programming for a
                year or two, however this spring I ran into a course called{' '}
                <a
                  className="text-highlighted font-semibold hover:text-hoverHighlighted"
                  href="https://fullstackopen.com/en/"
                  target="_blank"
                  rel="noreferrer">
                  Full Stack Open
                </a>
                , which dives deeper into modern web development and since I've
                somehow always been interested in getting to know more abut this
                topic, I signed up.
              </h4>
              <h4>
                Course gave me an understanding how web apps are built and after
                completing most of the chapters I felt I'm ready to bring my
                ideas into the real world. It took some time before I was ready
                to create something functional, as escaping the tutorial world
                and actually doing things on your own is something different,
                however I really enjoyed the process of learning how to build
                every single piece and realized that this is something that I'd
                love to do profesionally one day.
              </h4>
              <h4>
                There are currently three{' '}
                <span>
                  <a
                    className="text-highlighted font-semibold hover:text-hoverHighlighted"
                    href="#projects">
                    projects
                  </a>
                </span>{' '}
                in my portfolio and I have ideas for many more. With every new
                project I'm hoping to strenghten my current skills as well as
                explore new frameworks and technologies.
              </h4>
            </div>
          </div>
          <ExperienceInfo />
        </div>
      </div>
    </>
  )
}

export default AboutDesktop

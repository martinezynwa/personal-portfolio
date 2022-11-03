import ExperienceInfo from './ExperienceInfo'

const AboutMobile = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden">
        <h2 id="about" className="lg:mt-20">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row margin-container gap-4 sm:gap-8">
          <div className="flex flex-col justify-start basis-2/3">
            <div className="flex flex-col gap-4">
              <h4 className="">
                My name is Martin and I'd say I'm currently on a path to become
                a full-stack developer. Over the past couple of months I managed
                to build three{' '}
                <span>
                  <a
                    className="text-highlighted font-semibold hover:text-hoverHighlighted"
                    href="#projects">
                    projects
                  </a>
                </span>{' '}
                as well as learn some frameworks and I'm planning to follow-up
                with many more. With every new project I'm aiming to strengthen
                my current skills and explore new frameworks and technologies.
              </h4>
              <ExperienceInfo />
              <h2 id="about" className="lg:mt-20">
                My story
              </h2>
              <h4>
                I've been doing some programming for a year or two, however in
                early 2022 I ran into a course called{' '}
                <a
                  className="text-highlighted font-semibold hover:text-hoverHighlighted"
                  href="https://fullstackopen.com/en/"
                  target="_blank"
                  rel="noreferrer">
                  Full Stack Open
                </a>
                , which dives deeper into modern web development and since I've
                somehow always been interested in getting to know more about
                this topic, I signed up.
              </h4>
              <h4>
                Course gave me an understanding what are the prerequisities to
                have in order to build such web app and after completing most of
                the chapters I felt I'm ready to bring my ideas into the real
                world.
              </h4>
              <h4>
                It took some time before I was ready to create something
                functional, as escaping the tutorial world and actually doing
                things on your own is something different, nevertheless I really
                enjoyed the process of learning how to build every single piece
                and realized that this is something that I'd love to do
                profesionally one day.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMobile

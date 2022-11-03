import p1desktop from '../assets/p1desktop.jpg'
import p1mobile from '../assets/p1mobile.jpg'
import p2desktop from '../assets/p2desktop.jpg'
import p2mobile from '../assets/p2mobile.jpg'
import p3desktop from '../assets/p3desktop.jpg'
import p3mobile from '../assets/p3mobile.jpg'
import Experience from './Experience'

const Projects = () => {
  const projects = [
    {
      id: '1',
      name: 'Budget Management',
      description:
        'Simple finance app for personal purposes, tracking expenses and showing various statistics. ',
      experience:
        'First real try with everything. Using Javascript for logic, building connection between client and server, creating types, queries and mutations when manipulating with data in database. Implementing Google Auth. Using standard React hooks as well as building custom ones. Realizing how to properly handle state within context and what is it for. Trying to build CSS according to best practices and later re-factoring to Tailwind due to a better experience. Finally building dark/light mode.',
      stack: [
        'Javascript',
        'React',
        'NodeJS',
        'MongoDB',
        'GraphQL',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Rest API',
        'Google Auth',
        'Netlify',
        'Heroku',
        'Fly.io',
      ],
      link: 'https://budget-mgmt-1.netlify.app/',
      github: 'https://github.com/martinezynwa/budgetmgmt',
      imgDesktop: p1desktop,
      imgMobile: p1mobile,
    },
    {
      id: '2',
      name: 'New Releases Tracker',
      description:
        'App that is checking newly released music of your followed artists on Spotify daily and is automatically assigning their new songs into specified playlist of your choice.',
      experience:
        'Handling bigger amount of data received from Spotify API and creating appropriate logic to parse the data in the most efficient way. Implementing Async/Await functions on both client and server in order to maintain the data flow properly. Error handling and logging for a better visibility over errored responses or requests from Spotify. Creating a custom job to run specific tasks on daily basis. Getting to know Tailwind CSS and Spotify OAuth.',
      stack: [
        'Javascript',
        'React',
        'NodeJS',
        'MongoDB',
        'Express',
        'Tailwind CSS',
        'Axios',
        'Rest API',
        'Async/Await',
        'Spotify OAuth',
        'Netlify',
        'Fly.io',
      ],
      link: 'https://new-releases-tracker.netlify.app/',
      github: 'https://github.com/martinezynwa/spotifyNewReleases',
      imgDesktop: p2desktop,
      imgMobile: p2mobile,
    },
    {
      id: '3',
      name: 'My portfolio website',
      description: "The site you're currently looking at.",
      experience:
        'Trying to build the best possible responsive web experience with current skills. Figuring out how to present my knowledge.',
      stack: ['Javascript', 'React', 'HTML', 'Tailwind CSS', 'Netlify'],
      link: 'https://mg-portfolioweb.netlify.app/',
      github: 'https://github.com/martinezynwa/personal-portfolio',
      imgDesktop: p3desktop,
      imgMobile: p3mobile,
    },
  ]

  const Stack = ({ name }) => {
    return <p className="w-auto px-2 py-1 rounded-xl bg-[#53789561]">{name}</p>
  }

  return (
    <>
      <div className="margin-container" id="projects">
        <h2>Projects</h2>
        {projects.map(p => (
          <div
            key={p.name}
            className="flex flex-col lg:flex-row lg:pr-3 py-1 pb-6 my-5 px-4 lg:px-0 justify-between bg-containerColor rounded-2xl">
            <div className="flex flex-col lg:basis-3/5 lg:ml-6 my-4">
              <h3 className="mb-2 lg:mb-1">{p.name}</h3>
              <h4 className="mb-2">{p.description}</h4>
              <Experience details={p.experience} />
              <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 text-sm">
                {p.stack.map(s => (
                  <Stack key={s} name={s} />
                ))}
              </div>
              <div className="flex flex-row gap-3 lg:justify-start text-gray-50">
                <a
                  className={`${
                    p.name === 'My portfolio website'
                      ? 'hidden'
                      : 'p-2 rounded-md bg-buttonColor hover:bg-buttonHoverColor'
                  } `}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  alt="website">
                  Visit Demo Site
                </a>
                <a
                  className="p-2 rounded-md bg-buttonColor hover:bg-buttonHoverColor"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  alt="github">
                  View Repository
                </a>
              </div>
            </div>
            <div className="relative flex items-center max-w-md m-auto lg:p-4 lg:mx-0 lg:hover:scale-105 lg:transition duration-1000">
              <img
                src={p.imgDesktop}
                className="relative rounded-lg border-[7px] border-borderColor"
                alt=""
              />
              <img
                src={p.imgMobile}
                className="absolute -bottom-2 -right-2 lg:-bottom-1 lg:right-1 w-[20%] rounded-lg border-[4px] border-borderColor"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects

import p1desktop from '../assets/p1desktop.jpg'
import p1mobile from '../assets/p1mobile.jpg'
import p2desktop from '../assets/p2desktop.jpg'
import p2mobile from '../assets/p2mobile.jpg'
import p3desktop from '../assets/p3desktop.jpg'
import p3mobile from '../assets/p3mobile.jpg'

const Projects = () => {
  const projects = [
    {
      name: 'Budget Management',
      description:
        'Personal app for tracking expenses with various statistics and history logs.',
      stack: [
        'Javascript',
        'React',
        'NodeJS',
        'MongoDB',
        'GraphQL',
        'HTML',
        'CSS',
        'Rest API',
        'Google Auth',
        'Netlify',
        'Heroku',
      ],
      link: 'https://budget-mgmt-1.netlify.app/',
      github: 'https://github.com/martinezynwa/budgetmgmt',
      imgDesktop: p1desktop,
      imgMobile: p1mobile,
    },
    {
      name: 'New Releases Tracker',
      description:
        'App that is checking newly released music of your followed artists on Spotify daily and is automatically assigning new songs into specified playlist of your choice.',
      stack: [
        'Javascript',
        'React',
        'MongoDB',
        'NodeJS',
        'Express',
        'HTML',
        'Tailwind CSS',
        'Axios',
        'Rest API',
        'Spotify OAuth',
        'Netlify',
        'Fly.io',
      ],
      link: 'https://superb-douhua-a25458.netlify.app/',
      github: 'https://github.com/martinezynwa/spotifyNewReleases',
      imgDesktop: p2desktop,
      imgMobile: p2mobile,
    },
    {
      name: 'My portfolio website',
      description: 'The site you\'re currently looking at.',
      stack: ['Javascript', 'React', 'HTML', 'Tailwind CSS', 'Netlify'],
      link: 'TBA',
      github: 'TBA',
      imgDesktop: p3desktop,
      imgMobile: p3mobile,
    },
  ]

  const Stack = ({ name }) => {
    return <p className="w-auto px-2 py-1 rounded-xl bg-[#53789561]">{name}</p>
  }

  return (
    <>
      <div id="projects" className="my-6">
        <h2 className="font-semibold text-4xl lg:text-5xl ">Projects</h2>
        {projects.map(p => (
          <div
            key={p.name}
            className="flex flex-col lg:flex-row lg:pl-1 lg:pr-7 lg:py-7 pt-2 px-4 pb-6 my-6 justify-between bg-container rounded-lg ">
            <div className="flex flex-col lg:basis-2/4 lg:ml-6 my-4">
              <h2 className="mb-2 lg:mb-1 text-2xl font-semibold">{p.name}</h2>
              <h3 className="mb-4 lg:mb-8 text-gray-400">{p.description}</h3>
              <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 text-sm">
                {p.stack.map(s => (
                  <Stack key={s} name={s} />
                ))}
              </div>
              <div className="flex flex-row gap-3 lg:justify-start text-gray-50">
                <a
                  className="p-2 rounded-md bg-button hover:bg-btnHover"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  alt="website">
                  Visit Demo Site
                </a>
                <a
                  className="p-2 rounded-md bg-button hover:bg-btnHover hover:text-white"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  alt="github">
                  View Repository
                </a>
              </div>
            </div>
            <div className="relative flex items-center max-w-md m-auto lg:p-4 lg:mx-0 lg:hover:scale-110 lg:transition duration-1000">
              <img
                src={p.imgDesktop}
                className="relative rounded-lg border-[7px] border-borders"
                alt=""
              />
              <img
                src={p.imgMobile}
                className="absolute -bottom-2 -right-2 lg:-bottom-1 lg:right-1 w-[20%] rounded-lg border-[4px] border-borders"
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

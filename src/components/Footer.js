import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaChevronCircleUp,
} from 'react-icons/fa'

const Footer = () => {
  const links = [
    {
      name: 'github',
      href: 'https://github.com/martinezynwa',
      icon: <FaGithub />,
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/martin-gnebus-2b246a1a9/',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/martinez.ynwa/',
      icon: <FaInstagram />,
    },
  ]

  return (
    <>
      <div className="pb-6 text-darkerWhite">
        <ul className="flex flex-row gap-6 mb-4 text-3xl w-max mx-auto cursor-pointer">
          {links.map(l => (
            <li key={l.name} className="hover:text-white">
              <a href={l.href} target="_blank" rel="noreferrer" alt={l.name}>
                {l.icon}
              </a>
            </li>
          ))}
          <li className="hover:text-white">
            <a href="#nav" alt="top" onClick={() => window.scrollTo(0, 0)}>
              <FaChevronCircleUp />
            </a>
          </li>
        </ul>
        <div className="w-max mx-auto text-xs">Ⓒ 2022 Martin Gnebus</div>
      </div>
    </>
  )
}

export default Footer

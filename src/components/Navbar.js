import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  const menu = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ]

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
      <nav className="md:top-0 md:left-64 py-2 flex justify-center sm:justify-end md:w-[100%] bg-testMain">
        <ul className="flex flex-row items-center gap-10 text-xl text-txtDarkerWhite justify-end">
          {menu.map(m => (
            <li
              key={m.name}
              className="hover:text-white border-b-2 border-transparent hover:border-slate-400 transition duration-300">
              <a href={m.href}>{m.name}</a>
            </li>
          ))}
          {links.map(l => (
            <li key={l.name} className="hidden sm:block hover:text-white">
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                alt={l.name}>
                {l.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar

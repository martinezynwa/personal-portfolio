import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiSap,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      logo: <SiJavascript />,
      id: '1',
      name: 'Javascript',
      details:
        'Etiam efficitur, est eget pharetra ultrices, lorem ex ullamcorper nulla, a dictum nulla dolor at arcu. Mauris vehicula auctor lectus, eu suscipit urna luctus eget. Donec vel pharetra risus, id porttitor nisl. Ut eget ipsum maximus, rutrum erat id, eleifend mi. Vivamus non molestie arcu.',
    },
    {
      logo: <SiReact />,
      id: '1',
      name: 'React',
      details:
        'Etiam consequat, est a iaculis rhoncus, nisl odio cursus lacus, non ultrices diam quam id velit. Sed et euismod eros, a aliquam justo. Sed feugiat enim ut lacus tincidunt, at dictum urna cursus. Suspendisse molestie placerat metus, eu mollis arcu varius vitae. Suspendisse at dolor efficitur, volutpat nisl eget, faucibus ante.',
    },
    {
      logo: <SiNodedotjs />,
      id: '1',
      name: 'NodeJS',
      details:
        'Phasellus gravida eu ipsum id blandit. Morbi posuere nibh at tellus tempus eleifend. Etiam varius viverra nulla, eu pellentesque sem finibus ac. Aenean auctor vel metus non hendrerit.',
    },
    {
      logo: <SiMongodb />,
      id: '2',
      name: 'MongoDB',
      details:
        'Proin vitae nibh lorem. Fusce sagittis mauris nisl, at luctus elit tempor eget.',
    },
    {
      logo: <SiGraphql />,
      id: '2',
      name: 'GraphQL',
      details:
        'Curabitur in pretium risus, eget aliquet felis. Donec pellentesque, turpis eget tincidunt mattis.',
    },
    {
      logo: <SiCss3 />,
      id: '2',
      name: 'HTML/CSS',
      details:
        'Suspendisse id feugiat lorem, eu porta mauris. Nulla dictum elit ac quam aliquam, quis condimentum ligula consectetur. Fusce in nisi sem. In fermentum euismod facilisis. Ut a fringilla lorem.',
    },
    {
      logo: <SiSap />,
      id: '2',
      name: 'SAP ABAP',
      details:
        'Pellentesque iaculis ac arcu non lacinia. Cras sit amet sem sed nisi egestas mattis. Donec risus leo, maximus sit amet neque quis, pretium consectetur mi. Mauris eu vehicula quam, in ornare massa. Ut quis risus tristique, malesuada ante ornare, dapibus erat.',
    },
  ]

  return (
    <>
      <>
        <div id="skills" className="mb-4">
          <h2 className="mb-8 font-semibold text-4xl lg:text-5xl">Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col p-4 my-1 space-y-3 border-l-4 border-button bg-container rounded-sm rounded-l-none ${
                  skills.length % 2 === 0
                    ? ''
                    : 'lg:last:relative lg:last:left-2/4'
                }`}>
                <div className="flex flex-row gap-3 items-center mb-2">
                  <div className="text-4xl">{s.logo}</div>
                  <h2 className="text-xl">{s.name}</h2>
                </div>
                <p className="text-sm md:text-base text-txtDarkerWhite">{s.details}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  )
}

export default Skills

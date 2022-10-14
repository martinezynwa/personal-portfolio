
const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl md:text-5xl">Hello</h2>
        <h1 className="mb-4 text-3xl md:text-5xl text-main font-semibold">
          My name is Martin
        </h1>
        <h2 className="text-base md:text-lg text-center mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
          rutrum nisl ut fin.
        </h2>
        <h2 className="text-base md:text-lg">
          Here's a bit more <span className="text-main">about me.</span>
        </h2>
      </div>
    </>
  )
}

export default Header

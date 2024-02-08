import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <h1 className="text-5xl text-gray-800 font-bold leading-tight">
        Empowering Health Choices for a Vibrant Life Your Trusted..
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
        omnis natus accusantium quos. Reprehenderit incidunt expedita molestiae
        impedit at sequi dolorem iste sit culpa, optio voluptates fugiat vero
        consequatur?
      </p>

      <Button title="See Services" />
     </div>
     </div>
  )
}

export default Home

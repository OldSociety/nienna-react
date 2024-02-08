import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <div className="bg-[#e0eeec] absolute top-[-6rem] -z-10 right-[11rem] h-[60.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[35.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <h1 className="text-5xl text-gray-800 font-bold leading-tight">
          Empowering Mental Health Choices for a Vibrant Life..
        </h1>
        <p className='capitalize font-semibold underline'>Current Availability: I am not currently accepting new clients.</p>
        <p>
        We are trained to hear and understand you in a way that is different from your friends and family. Speaking with someone who can listen in a new way can help you gain insight into your life and present-day problems. We can make better sense of thoughts, feelings, and behaviors that have been confusing, or even outside of your awareness. As we gain insight into recurring patterns that cause distress, you can begin to change those patterns.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  )
}

export default Home

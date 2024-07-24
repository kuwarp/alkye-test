


import Carousel from '../../Components/Carousel'
import pic from '../../asset/Logo/Logo_white.png'

const Dashboard = () => {
  
  return (
    <div className="flex   flex-col items-center bg-black overflow-hidden   p-8 lg:p-14 ">
      <div className=" lg:px-2 p-4  container    flex-grow   lg:mx-72     ">
        <div className=" items-start lg:mx-52 mb-8">
          <img src={pic} alt="Logo" className="h-10" />
        </div>
        <div className="lg:grid flex flex-col lg:mx-52   gap-8">
         <header className="text-white text-3xl mb-8">
      <h1 className="font-bold">Welcome <span className="text-white-500 underline">Test</span></h1>
      <p className="text-lg mt-2">Hope you having a good day!</p>
    </header>
    <div className='flex flex-col  justify-center'>

    <Carousel  title="Photography" category="photography" />
    <Carousel title="Learning" category="learning" />
    </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard

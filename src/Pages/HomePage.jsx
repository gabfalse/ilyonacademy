import Activity from "../Components/HomeComponents/Activity"
import Advantages from "../Components/HomeComponents/Advantages"
import Hero from "../Components/HomeComponents/Hero"
import QuickLinks from "../Components/HomeComponents/QuickLinks"
import Subjects from "../Components/HomeComponents/Subject"


function HomePage() {
  return (
    <div>
      <Hero/>
      <QuickLinks/>
      <Activity/>
      <Subjects/>
      <Advantages/>
    
    </div>
  )
}

export default HomePage
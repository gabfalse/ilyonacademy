import Advantages from "../Components/HomeComponents/Advantages"
import Hero from "../Components/HomeComponents/Hero"
import Program from "../Components/HomeComponents/Program"
import Schedule from "../Components/HomeComponents/Schedule"


function HomePage() {
  return (
    <div>
      <Hero/>
      <Advantages/>
      <Program/>
      <Schedule/>
    </div>
  )
}

export default HomePage
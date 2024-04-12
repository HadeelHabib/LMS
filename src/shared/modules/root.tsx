import FAQ from "../components/faq/faq"
import Courses from "./courses"
import Hero from "./hero"
import Reviews from "./reviews"

const Root = () => {
  return (
    <div className="w-full">
      <Hero/>
      <Courses/>
      <Reviews/>
      <FAQ/>
    </div>
  )
}

export default Root

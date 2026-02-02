import Feedback from "../componets/Feedback";
import Hero from "../componets/Hero";
import WhyChooseUs from "../componets/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <div className="">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="">
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;

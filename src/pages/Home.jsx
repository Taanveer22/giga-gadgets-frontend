import Feedback from "../componets/Feedback";
import Hero from "../componets/Hero";
import WhyChooseUs from "../componets/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      
      <section>
        <Feedback></Feedback>
      </section>
    </div>
  );
};

export default Home;

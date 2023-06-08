import Services from './services-client/Services';
import ServicesDev from './services-dev/ServicesDev';
import TechStack from './tech-stack/TechStack';
import Approaches from './approaches/Approaches';
import Process from './process/Process';
import Hire from './hireVinova/Hire';

const Home = () => {
  return (
    <>
      <Services />
      <ServicesDev />
      <TechStack />
      <Approaches />
      <Process />
      <Hire />
    </>
  );
};

export default Home;

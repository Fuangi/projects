import EoyForm from "./components/EoyForm";
import LandingContent from "./components/LandingContent";

function Eoy() {
  return (
    <div className="wrapper">
      <LandingContent
        content="End of Year Project Proposal Page"
        children={<EoyForm />}
      />
    </div>
  );
}

export default Eoy;

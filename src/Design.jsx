import DesignForm from "./components/DesignForm";
import LandingContent from "./components/LandingContent";

function Design() {
  return (
    <div className="wrapper">
      <LandingContent content="Design Projects" children={<DesignForm />} />
    </div>
  );
}

export default Design;

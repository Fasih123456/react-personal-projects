import ProfileCard from "./ProfileCard";
import AlexImage from "./assests/images/alexa.png";
import CortanaImage from "./assests/images/cortana.png";
import SiriImage from "./assests/images/siri.png";

function App() {
  return (
    <div>
      <div class="container text-center">
        <div class="row" style={{ backgroundColor: "green" }}>
          <div class="col-12">
            <h1>Personal Digital Assitance(PDA)</h1>
          </div>
        </div>
        <div class="row" style={{ paddingTop: "20px" }}>
          <div class="col">
            <ProfileCard handle="@alex" title="Alex" image={AlexImage} description="This is alex" />
          </div>
          <div class="col">
            <ProfileCard
              title="Cortana"
              handle="@cortana"
              image={CortanaImage}
              description="This is cortana"
            />
          </div>
          <div class="col">
            <ProfileCard title="Siri" handle="@siri" image={SiriImage} description="This is siri" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

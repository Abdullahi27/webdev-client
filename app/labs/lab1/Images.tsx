export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tags</h4>

      Loading an image from the internet:
      <br />

      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />

      <br />

      Loading a local image:
      <br />

      <img
        id="wd-teslabot"
        src="/images/teslabot.jpeg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />

      <h5>My Favorite Soccer Team</h5>

      <img
        id="wd-your-image"
        src="/images/Liverpool.webp"
        width="200px"
        alt="Liverpool Football Club"
      />

      <br />

      <h5>AI Sample Image</h5>

      <img
        id="wd-ai-image"
        src="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/imagerecords/0/885/modis_wonderglobe.jpg?w=540&h=540&fit=clip&crop=faces%2Cfocalpoint"
        width="200px"
        alt="View of Earth from space"
      />
    </div>
  );
}
import React from "react";


function About({ bio }) {
  return (
    <div id="about">
      <h2>About Drink my coffee!</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <p>This web app enables anyone to rate coffee from different restaurants or coffee shops.
         A user can rate their coffee from any different shop to enable other coffee lovers to get a hold of coffee they might love.
      </p>
      <img src="https://images.app.goo.gl/H7GNfDxTwWdVHT8G8" alt="Rate my coffee web app" />
    </div>
  );
}

export default About;
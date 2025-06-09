import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container mt-4">
        <div className="row">
          {[1, 2, 3, 4].map((n) => (
            <Card
              key={n}
              title="Card title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="https://picsum.photos/500/325" // Aquí añadimos las fotitos
            />
          ))}
        </div>
      </div>
      
      <Footer /> {/* ✅ añadido el pie de página aquí */}
    </>
  );
};

export default Home;


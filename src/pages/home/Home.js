import React from "react";
import FLAG from "../../content/img/flag.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <header className="my-4 text-center border border-danger p-4 shadow">
        <div className="flag-container position-relative">
          <img
            src={FLAG}
            alt="Rederth Flag"
            className="img-fluid flag-image border border-danger shadow"
          />
          <div
            className="glass-screen position-absolute top-0 left-0 right-0 bottom-0 border border-danger shadow"
            style={{ background: "rgba(255, 255, 255, 0.5)" }}
          ></div>
        </div>
        <h1 className="display-4 font-roboto">
          Welcome to the Grand Duchy of Rederth
        </h1>
        <p className="lead border border-danger p-3 shadow">
          Welcome to the Grand Duchy of Rederth, a thriving micronation under
          the benevolent rule of the Honorable Grand Duke Dylan I. Rooted in a
          vision of a brighter future, our micronation stands as a testament to
          the power of determination and cooperation. Founded on the principles
          of diplomacy, cooperation, and respect for international norms,
          Rederth is on a mission to carve a unique place for itself on the
          global stage.
        </p>
      </header>

      <div className="row">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Welcome to the Grand Duchy of Rederth, where dreams take shape on
            the world stage. Our mission is to establish Rederth as a
            recognized, public micronation with a substantial territory, and to
            foster <strong>strong, positive relationships</strong> with the
            international community.
          </p>
          <p className="border border-danger p-3 shadow">
            1. <strong>Gaining Recognition:</strong> At the core of our mission
            is the pursuit of recognition on the global stage. We are committed
            to fulfilling the formalities and criteria necessary to become a
            recognized micronation, establishing our presence among nations
            worldwide.
          </p>
          <p className="border border-danger p-3 shadow">
            2. <strong>Expanding Our Territory:</strong> We are dedicated to
            acquiring and maintaining a significant amount of territory within
            the boundaries of Rederth. This expansion will provide our citizens
            with opportunities to explore, develop, and appreciate the diverse
            landscapes and regions that make our nation unique.
          </p>
          <p className="border border-danger p-3 shadow">
            3. <strong>Forging International Connections:</strong> Our mission
            extends beyond our borders. We are eager to establish fruitful
            relationships with other nations, organizations, and entities around
            the world. These connections will not only strengthen our global
            presence but also enrich the experiences of our citizens.
          </p>
          <p className="border border-danger p-3 shadow">
            4. <strong>A Nation Built on Values:</strong> Rederth is founded on
            the principles of diplomacy, cooperation, and respect for
            international norms. Our commitment to these values underpins our
            mission to be a valuable and peaceful member of the global
            community.
          </p>
          <p className="border border-danger p-3 shadow">
            5. <strong>A Promising Future:</strong> Join us in creating a future
            where Rederth is recognized, celebrated, and appreciated worldwide.
            As we build a recognized micronation with a significant territory
            and influential international ties, we invite you to be part of our
            journey, contributing to the development and growth of our nation.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our <strong>official newsletter</strong>, curated
            carefully by the Rederth Tech Group, and carefully quality checked
            to make sure we provide content of the{" "}
            <strong>highest degree</strong>.
          </p>
          <p className="border border-danger p-3 shadow">
            <strong>1. Stay Informed:</strong> By joining the Grand Duchy of
            Rederth's website newsletter, you gain exclusive access to the
            latest news, updates, and announcements from our micronation. Stay
            informed about important events, cultural developments, and
            government initiatives. This newsletter keeps you in the loop,
            ensuring you don't miss out on any of the exciting developments
            within our unique community.
          </p>
          <p className="border border-danger p-3 shadow">
            <strong>2. Engage with a Global Community:</strong> Micronations
            like Rederth are comprised of diverse individuals from around the
            world who come together to create something truly extraordinary. By
            subscribing to our newsletter, you become a part of this global
            community, where you can connect with like-minded people who share
            your passion for unique experiences and international collaboration.
          </p>
          <p className="border border-danger p-3 shadow">
            <strong>3. Exclusive Offers and Events:</strong> Members of our
            newsletter enjoy exclusive access to special offers, promotions, and
            events. Whether it's discounts on Rederth merchandise, invitations
            to cultural celebrations, or first access to unique experiences,
            being a subscriber opens doors to extraordinary opportunities that
            you won't find elsewhere.
          </p>
          <a className="btn btn-danger" href="/newsletter">
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

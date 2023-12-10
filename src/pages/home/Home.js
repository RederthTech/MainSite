import React from "react";
import FLAG from "../../content/img/flag.png";
import "./Home.css";

const Home = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const url = "https://gmail.us21.list-manage.com/subscribe/post?u=a57c300d3b8a3125f76b43e50&amp;id=d1c8aad631&amp;f_id=006beae6f0"

  }

  return (
    <div
      className="container mx-auto"
      style={{
        height: "100%",
        backgroundColor: "#8b0100", // Red background color
        color: "white", // Text color
      }}
    >
      <header
        className="my-4 text-center border border-danger p-4 shadow"
        style={{
          backgroundColor: "#808080", // Red background color
          color: "white", // Text color
          borderColor: "red", // Red accent for border
        }}
      >
        <div className="flag-container position-relative">
          <img
            src={FLAG}
            alt="Rederth Flag"
            className="img-fluid flag-image border border-danger shadow"
          />
        </div>
        <h1 className="display-4" style={{ fontFamily: "lobster" }}>
          Welcome to the Grand Duchy of Rederth
        </h1>
        <p
          className="lead border border-danger p-3 shadow"
          style={{
            fontFamily: "roboto",
            fontSize: "19px",
            fontStyle: "italic",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          Welcome to the Grand Duchy of Rederth, an Independent Sector of the Candrean Imperial Confederation, governed by His Grace Grand Duke Dylan I of Rederth. Established in the values of diplomacy, cooperation, and firm principles, this sector is incredibly dedicated to shaping a presence on the world stage. Embracing the tenets of monarchism and Candreanism, we weave a narrative of resilience and strength. The hallowed traditions of our heritage guide us as we navigate the complexities of the global stage with the grace and poise befitting true stewards of a noble legacy.
        </p>
      </header>

      <div className="row" style={{ fontFamily: "roboto" }}>
        <div className="col-md-6">
          <h1 style={{ fontFamily: "Lobster" }}>Our Mission</h1>
          <p>
            Welcome to the Grand Duchy of Rederth, an Independent Sector of the Candrean Imperial Confederation. Our mission is to establish this Grand Duchy as a recognized, public entity with a substantial territory and to foster <strong>strong, positive relationships</strong> with the international community.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              1. Gaining Recognition:
            </strong>{" "}
            At the core of our mission is the pursuit of recognition on the global stage. We are committed to fulfilling the formalities and criteria necessary to become a recognized entity, establishing our presence among nations worldwide.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              2. Expanding Our Territory:
            </strong>{" "}
            We are dedicated to acquiring and maintaining a significant amount of territory within the boundaries of this Grand Duchy. This expansion will provide our citizens with opportunities to explore, develop, and appreciate the diverse landscapes and regions that make our Grand Duchy unique.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              3. Forging International Connections:
            </strong>{" "}
            Our mission extends beyond our borders. We are eager to establish fruitful relationships with other nations, organizations, and entities around the world. These connections will not only strengthen our global presence but also enrich the experiences of our citizens.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              4. A Nation Built on Values:
            </strong>{" "}
            This Grand Duchy is founded on the principles of diplomacy, cooperation, and respect for international norms. Our commitment to these values underpins our mission to be a valuable and peaceful member of the global community.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              5. A Promising Future:
            </strong>{" "}
            Join us in creating a future where our Grand Duchy is recognized, celebrated, and appreciated worldwide. As we build a recognized entity with a significant territory and influential international ties, we invite you to be part of our journey, contributing to the development and growth of our Grand Duchy.
          </p>
        </div>
        <div className="col-md-6">
          <h1 style={{ fontFamily: "Lobster" }}>Stay Updated</h1>
          <p>
            Subscribe to our <strong>official newsletter</strong>, curated carefully by the Rederth Tech Group, and carefully quality checked to make sure we provide content of the <strong>highest degree</strong>.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>1. Stay Informed:</strong>{" "}
            By joining the Grand Duchy of Rederth website newsletter, you gain exclusive access to the latest news, updates, and announcements from our sector. Stay informed about important events, cultural developments, and government initiatives. This newsletter keeps you in the loop, ensuring you don't miss out on any of the exciting developments within our unique community.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              2. Engage with a Global Community:
            </strong>{" "}
            Sectors like ours are comprised of diverse individuals from around the world who come together to create something truly extraordinary. By subscribing to our newsletter, you become a part of this global community, where you can connect with like-minded people who share your passion for unique experiences and international collaboration.
          </p>
          <p
            className="border border-danger p-3 shadow"
            style={{
              borderColor: "red", // Red accent for border
              backgroundColor: "#808080",
            }}
          >
            <strong style={{ fontFamily: "Lobster" }}>
              3. Exclusive Offers and Events:
            </strong>{" "}
            Members of our newsletter enjoy exclusive access to special offers, promotions, and events. Whether it's discounts on sector merchandise, invitations to cultural celebrations, or first access to unique experiences, being a subscriber opens doors to extraordinary opportunities that you won't find elsewhere.
          </p>
          <form
            action="https://gmail.us21.list-manage.com/subscribe/post?u=a57c300d3b8a3125f76b43e50&amp;id=d1c8aad631&amp;f_id=006beae6f0"
            method="post"
            target="_blank"
            data-sv-form="5787027"
            data-uid="c3e06350a9"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer: 5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer: 5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer:5,"devices":"all","show_once_every":15}},"version":"5"}'
            className="border border-danger p-3 shadow mx-auto text-center" // Add Bootstrap classes
            style={{
              borderColor: "#fff", // Red accent for border
              backgroundColor: "#808080",
              color: "white", // Text color
              width: "100%",
            }}
          >
            <div data-element="column">
              <div data-element="subheader">
                Subscribe to get our latest content by email.
              </div>
              <ul data-element="errors" data-group="alert"></ul>
              <div data-element="fields">
                <button data-element="submit" className="btn btn-danger">
                  <span>Subscribe</span>
                </button>
              </div>
              <div data-element="guarantee" className="mt-2">
                {/* Add margin for spacing */}
                We won't send you spam. Unsubscribe at any time.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

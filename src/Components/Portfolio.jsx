/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Brick Breaker Game",
    description:
      "In this game there is a ball that bounces of a platform to break a brick wall and the player has to keep the ball going by making sure the paddle is always there to bounce off the ball back. The game will have three layers of bricks, and each layer of brick will have a different hit capacity, which means some bricks will break in a single hit, some will require a double hit and some will require three hits.",
    url: "https:",
    
  },
  {
    title: "E-Commerce website using wordpress",
    description:
      "This project is about online shopping or e-shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the internet using a web browser.",
    url: "https:",
    
  },
  {
    title: "Shop Management System",
    description:
      "This Shop Management System offers a comprehensive set of features, including inventory management, restocking products, category management, and transaction management. Administrators have full control over the system, including managing products, stocks, and categories. Cashiers, on the other hand, have limited access and can manage transactions and view sales reports.The system incorporates a point-of-sale feature, allowing cashiers to process transactions and generate printable receipts. It also provides date-wise sales reports for better analysis and decision-making. The front-end of the application is developed using PHP, HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap, offering a user-friendly interface and responsive design.",
    url: "https:",
    
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

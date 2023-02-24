import React from "react";

const About = () => {
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="container relative flex md:flex-row flex-col mt-5  border-solid space-y-3  border-2 border-blue-600 dark:border-gray-300">
        <div className="text-2xl flex md:z-10 md:flex-col justify-center items-center gap-3 px-[1.6rem] text-white dark:bg-gray-300 dark:text-gray-800 bg-blue-600 first-letter:text-4xl font-medium">
          <div className="md:flex flex-col justify-center items-center">
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">A</span>
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">B</span>
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">O</span>
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">U</span>
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">T</span>
          </div>
          <div className="md:flex flex-col justify-center items-center">
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">U</span>
            <span className="cursor-pointer hover:rotate-[-10deg] hover:scale-125 transition-all">S</span>
          </div>
        </div>
        <div className="px-2 space-y-3">
          <div className="tracking-wide first-letter:text-2xl md:first-letter:text-4xl text-start font-medium">
            Our fashion website was founded with a mission to make high-quality,
            affordable fashion accessible to everyone. Our team noticed a gap in
            the market for clothes and accessories that were stylish, well-made,
            and could be delivered right to your doorstep. With this vision in
            mind, we set out to create a fashion destination that would make it
            easy for people to find the clothes and accessories they love
            without breaking the bank. Today, our website is a thriving
            community of fashion lovers from around the world, and we're proud
            to have helped countless customers find their perfect look.
          </div>
          <div className="text-left">
            <h1 className="text-base md:text-xl font-sans font-medium leading-3">
              Our Values:
            </h1>
            <p className="tracking-wide first-letter:text-2xl md:first-letter:text-4xl text-start font-medium">
              At our fashion website, we believe in more than just selling
              clothes - we believe in creating a community of people who love
              fashion and want to express themselves through their style. That's
              why we're committed to:
            </p>
            <ul className="list-inside list-disc">
              <li>
                Quality: We only work with the best designers and manufacturers
                to ensure that every product we sell meets our high standards
                for quality and durability.
              </li>
              <li>
                Affordability: We believe that everyone should be able to afford
                great fashion, which is why we offer affordable prices without
                sacrificing quality.
              </li>
              <li>
                Sustainability: We're committed to reducing our impact on the
                environment by sourcing sustainable materials and reducing waste
                in our supply chain.
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h1 className="text-base md:text-xl font-sans font-medium leading-3">
              Our Team:
            </h1>
            <p className="tracking-wide first-letter:text-2xl md:first-letter:text-4xl text-start font-medium">
              Our team is made up of passionate fashion professionals who are
              dedicated to providing the best possible experience for our
              customers. From our designers to our customer support team,
              everyone at our company is committed to making sure that you find
              the perfect look and have a great experience shopping with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

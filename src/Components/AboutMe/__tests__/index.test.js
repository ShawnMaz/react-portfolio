import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMe from "..";

// Clean memory after each test
afterEach(cleanup);

// Test
describe("About Me component", () => {
  it("renders", () => {
    render(<AboutMe />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains image, name, title and describtion", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("profilePhoto")).toHaveAttribute(
      "src",
      "profile-photo.jpg"
    );
    expect(screen.getByTestId("profileUserName")).toHaveTextContent(
      "Shantanu Mazumder"
    );
    expect(screen.getByTestId("profileUserTitle")).toHaveTextContent(
      "Aspiring Full Stack Web Developer"
    );
    expect(screen.getByTestId("profileUserDescription")).toHaveTextContent(
      "Learning new skills has always been my passion. I started out my career as a Manufacturing Engineer in the Metal Fabrication industry, then moved into the Optics industry and now into Web Development. Being able to solve complex new challenges using innovative and creative solutions is what drives me to push myself to learn new skills everyday."
    );
  });
});

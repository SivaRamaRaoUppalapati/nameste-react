import RestroCard from "../RestroCard"
import Mock_data from "../Mocks/resdataMock.json"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("it should render Restraurant Card",()=>{

    render(<RestroCard resdata={Mock_data}/>);

    const name = screen.getByText("KFC")

    expect(name).toBeInTheDocument();
})
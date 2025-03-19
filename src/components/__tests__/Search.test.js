import { fireEvent, render ,screen } from "@testing-library/react"
import MOCK_DATA from "../Mocks/mockResListdata.json"
import { act } from "react";
import Body from "../Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("It should render the body component with search button", async ()=>{
   
    await act(async ()=>  render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const searchbtn = screen.getByRole("button", {name : "Search"});

    const seachinput = screen.getByTestId("searchInput");

    fireEvent.change(seachinput,{ target :{value: "pizza"}});

    fireEvent.click(searchbtn);

    //expect(searchbtn).toBeInTheDocument();

    const cards =screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2);
   
})
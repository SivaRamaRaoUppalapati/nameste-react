import { act } from "react"
import RestraMenu from "../RestraMenu"
import { BrowserRouter } from "react-router"
import MOCK_DATA from "../Mocks/mockResMenu.json"
import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../Utils/appstore"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>  Promise.resolve(MOCK_DATA)
    })
})

it("Should load Restraurant Menu Component", async ()=>{

    await act(async()=>render(
    
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestraMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>)
    )

    const accordion = screen.getByText("Biryani (15)")

    fireEvent.click(accordion);

    expect(screen.getAllByTestId("foodItems").length).toBe(15);

    const addbtn = screen.getAllByRole("button",{name : "Add+"})

    fireEvent.click(addbtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
})
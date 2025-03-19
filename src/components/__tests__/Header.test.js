import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../Utils/appstore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


it("Should render Header component with a login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

     const loginbutton = screen.getByText("Login");

     expect(loginbutton).toBeInTheDocument();
})

it("Should render Header component with a cart with 0 items",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

     const cart = screen.getByText("Cart (0 items)");

     expect(cart).toBeInTheDocument();
    })

it("Should render Header component with a cart",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

     const cart = screen.getByText(/Cart/);

     expect(cart).toBeInTheDocument();
})

it("Should change login button to logout ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

     const loginbutton = screen.getByRole("button", {name: "Login"});

     fireEvent.click(loginbutton);

     const logoutbutton = screen.getByRole("button", {name: "Logout"});

     expect(logoutbutton).toBeInTheDocument();
})
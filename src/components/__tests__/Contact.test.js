import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us test cases",()=>{

//Helper Function
    beforeAll(()=>{
        console.log("Before All");
    })
    afterAll(()=>{
        console.log("After All");
    })

    beforeEach(()=>{
        console.log("Before Each");
    })

    afterEach(()=>{
        console.log("After Each");
    })

    //test alias it
    test("Should load Contact us component",()=>{

        render(<Contact/>); 
        const heaidng=screen.getByRole("heading");
    
        expect(heaidng).toBeInTheDocument();
    })
    
    test("Should load button Contact us component",()=>{
    
        render(<Contact/>); 
        const button=screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    
    test("Should load input name Contact us component",()=>{
    
        render(<Contact/>); 
        const InputName=screen.getByPlaceholderText("Name");
    
        expect(InputName).toBeInTheDocument();
    })
    
    test("Should load input name Contact us component",()=>{
    
        render(<Contact/>); 
        const InputBox=screen.getAllByRole("textbox");
    
        expect(InputBox.length).toBe(2);
    })
})


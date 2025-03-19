import { hasUncaughtExceptionCaptureCallback } from "process";
import { sum } from "../Sum"

test("Sum function testing",()=>{

    const result = sum(3,7);

    //Assertion
    expect(result).toBe(10);
})
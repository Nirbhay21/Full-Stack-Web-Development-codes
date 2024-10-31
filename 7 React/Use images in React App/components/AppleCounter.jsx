import Basket from "./Basket";
import Button from "./Button";
import { useState } from "react";
import LeftArrow from "../assets/images/left_arrow.svg"
import RightArrow from "../assets/images/right_arrow.svg"

import Counter from "./Counter";

let rightAppleCount = 0;

const AppleCounter = () => {
    const [leftAppleCount, setLeftAppleCount] = useState(10);
    const [rightAppleCount, setRightAppleCount] = useState(0);

    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1);
            setLeftAppleCount(leftAppleCount + 1);
        }
    }
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setLeftAppleCount(leftAppleCount - 1);
            setRightAppleCount(rightAppleCount + 1);
        }
    }
    return (
        <div className="mt-12 flex items-center justify-between px-12">
            <Basket
                applesCount={leftAppleCount}
                basketName="Basket 1"
            />
            <Button
                imgUrl={LeftArrow}
                title={"Shift 1 apple to left basket"}
                clickHandler={leftClickHandler}
            />
            <Button
                imgUrl={RightArrow}
                title={"Shift 1 apple to right basket"}
                clickHandler={rightClickHandler}
            />
            <Basket
                applesCount={rightAppleCount}
                basketName="Basket 2"
            />
        </div>
    );
}

export default AppleCounter;
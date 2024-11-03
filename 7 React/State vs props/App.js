import React from "react"
import Wallpaper from "./assets/images/bg-wallpaper.jpg"
import { useState, Fragment } from "react";
import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const Container = (props) => {
    const [state, updateState] = useState("border-4 border-gray-400");

    return (
        <div className={`m-4 flex h-60 w-60 items-center justify-center bg-cyan-400 ${state}`} onMouseEnter={() => {
            updateState("border-4 border-gray-800");
        }} onMouseLeave={() => {
            updateState("border-4 border-gray-400");
        }}>
            <h1 className="text-4xl font-bold">{props.internalText}</h1>
        </div>
    );
}

const ListCheck = () => {
    return (
        <ol className="list-decimal p-8">
            <li className="">Item 1</li>
            <li className="">Item 2</li>
            <li className="">Item 3</li>
        </ol>
    );
}

const Info = () => {
    console.log(<></>);
    console.log(<Fragment></Fragment>);
    return (
        <Fragment>
            <h1 className="mb-4 text-4xl font-bold">Computer Science - </h1>
            <p className="text-xl text-gray-700">
                Computer science is the study of computers, computational systems, and the theories that underlie their functions.
                It's a vast field that covers several key areas, from the foundational theories of computation to software development,
                data structures, and artificial intelligence. Here's an overview of the main areas and concepts in computer science:
            </p>
            <ol className="mb-4 list-decimal p-8 pt-6 text-xl text-gray-600">
                <li className="pl-4">
                    <h3 className="mb-1 text-2xl font-semibold text-gray-800">Core Areas of Computer Science: </h3>
                    <ul className="mb-4 list-disc pl-4">
                        <li>Algorithms and Data Structures: Focuses on designing and analyzing efficient algorithms and structuring data in ways that improve access and modification. Key structures include arrays, linked lists, trees, graphs, and hash tables.</li>
                        <li>Theory of Computation: Deals with understanding what problems can be solved with computers, the limits of computational power, and the complexity of solving problems. Key concepts include automata theory, Turing machines, and computational complexity classes (P, NP, etc.).</li>
                        <li>Programming Languages and Compilers: Studies the design of languages that allow humans to write software instructions, as well as the creation of compilers that translate these languages into machine code. Examples of languages are Python, Java, C++, and JavaScript.</li>
                        <li>Software Engineering: Covers methodologies and best practices for designing, developing, testing, and maintaining software systems. Key methodologies include Agile, DevOps, and Object-Oriented Programming (OOP).</li>
                        <li>Computer Architecture and Hardware: Examines the physical aspects of computers, including processors, memory, storage, and peripheral devices. It also explores how these components interact to execute instructions.</li>
                    </ul>
                </li>
                <li className="pl-4">
                    <h3 className="mb-1 text-2xl font-semibold text-gray-800">Important Concepts in Computer Science: </h3>
                    <ul className="mb-4 list-disc pl-4">
                        <li>Binary and Data Representation: Computers use binary (0s and 1s) to represent data, and understanding binary, hexadecimal, and other data representations is fundamental.</li>
                        <li>Big O Notation: A mathematical notation used to classify algorithms by their runtime or space complexity, which helps in evaluating and comparing algorithm efficiency.</li>
                        <li>Encryption and Cryptography: Techniques for securing data by encoding it in a way that only authorized users can access it, crucial in cybersecurity.</li>
                        <li>Concurrency and Parallelism: Concepts that enable systems to handle multiple tasks at once, either by interleaving tasks (concurrency) or truly parallel execution (parallelism).</li>
                    </ul>
                </li>
                <li className="pl-4">
                    <h3 className="mb-1 text-2xl font-semibold text-gray-800">Careers in Computer Science: </h3>
                    <ul className="mb-4 list-disc pl-4">
                        <li>Software Developer/Engineer: Building applications, systems, or embedded software.</li>
                        <li>Data Scientist/Analyst: Working with data to derive insights, typically using tools like Python, R, and SQL.</li>
                        <li>Cybersecurity Specialist: Protecting systems from cyber threats.</li>
                        <li>Machine Learning Engineer: Building models that allow systems to learn from data.</li>
                        <li>Systems Architect: Designing and implementing computer networks or software systems.</li>
                        <li>Database Administrator: Managing databases, ensuring data security, and optimizing performance.</li>
                    </ul>
                </li>
            </ol>
        </Fragment>
    );
}

const TempComp = (props) => {
    const MyElement = Symbol.for("react.fragment");
    console.log(<Fragment ></Fragment>)         // React Fragment
    console.log(<React.Fragment ></React.Fragment>)         // React Fragment
    console.log(<></>)                          // Short for react fragment
    console.log(<MyElement ></MyElement>)

    const Element = (
        <MyElement>
            <h1 className="text-6xl font-semibold">HELLO</h1>
            <h1 className="text-6xl font-semibold">{props.username}</h1>
            <h1 className="text-6xl font-semibold">HELLO</h1>
        </MyElement>
    );

    console.log(Element);

    console.log(props.children);

    return Element;
}

const Comp1 = (props) => {
    console.log(props.children);

    console.log(props.children[1]());

    return (
        <div>
            <h1 className="text-3xl"><span className="font-bold">Component No - </span>{props.children[0].componentNo}</h1>
            <h1 className="text-3xl"><span className="font-bold">Component Name - </span>{props.children[0].componentName}</h1>
            <p className="text-3xl"><span className="font-bold">Component Info - </span>{props.children[0].componentInfo}</p>
        </div>
    );
}



// const App = () => {
//     return (
//         <>
//             {/* <Info /> */}
//             {/* <TempComp username="Nirbhay" /> */}
//             <Comp1>
//                 {
//                     [
//                         {
//                             componentNo: 20232,
//                             componentName: "Component MP223x",
//                             componentInfo: "This is 20232th component(Component 20232) with name MP223x"
//                         },

//                         function func() {
//                             console.log("Hello");
//                         }
//                     ]
//                 }
//             </Comp1>
//         </>
//     );
// }

const Button = ({ children }) => {
    console.log(children);    //If children is not pass then it is undefined.

    return (
        <button className="m-4 rounded-md border-4 border-gray-500 bg-gray-400 p-4 text-2xl font-bold hover:border-gray-800 hover:bg-opacity-85 active:bg-slate-300">{children}</button>
    );
}

const Img = ({ src }) => {
    return (
        <img className="rounded-md" src={src} alt="Image" width="200" height="120" />
    );
}

import MyButton from "./components/MyButton"
import TempButton from "./components/TempButton"

const App = () => {
    return (
        <>
            {/* <Button>Button - 1</Button>
            <Button>Button - 2</Button>
            <Button children="Button - 3"></Button>

            <Button>
                <Img src={Wallpaper} />
            </Button>

            <Button/> */}

            {/* <AppleCounter /> */}

            <MyButton>My Button</MyButton>
            <TempButton>Temp Button</TempButton>
        </>
    );
}

export default App;
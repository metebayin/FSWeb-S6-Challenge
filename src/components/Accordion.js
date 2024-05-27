import { useState } from "react";
import styled from "styled-components";

const AccordionTitle = styled.h2`
background: #dddddd;
color: #222222;
padding: 1rem;
margin-bottom: 0;
border-radius; 0.5rem;
display: flex;
cursor: pointer;
transition: 0.3s; 
justify-content: space-between;
&:hover {
    background-color: #cccccc;
}
`;

const AccordionBody = styled.div `
backgorund: #ffffff;
color: #222222;
height: 0px;
overflow: hidden;
`;

const Accordion = ({title,children}) => {
    const [show, setShow] = useState(false);

    return(
        <div>
            <AccordionTitle onClick={(e) => setShow(!show)}>
             {title}
                <i class={"fa-solid fa-angle-" + ( show ? "up" : "down")}></i>
            </AccordionTitle>
            <AccordionBody className={show ? "show" : "hide"}>
                {children}
            </AccordionBody>
        </div>
    );
}

export default Accordion;
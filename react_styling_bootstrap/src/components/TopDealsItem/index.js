import React from 'react';
import {Heading, Message, TopDealsCard, Footer} from "./styles";

const ToDoItem = ({element:{image, message}}) => (
    <TopDealsCard
        image={image}
    >
        <Heading>
            Hot Deals
        </Heading>
        <Message>
            {message}
        </Message>
        <Footer>
            + Show Now
        </Footer>
    </TopDealsCard>
);

export default ToDoItem;
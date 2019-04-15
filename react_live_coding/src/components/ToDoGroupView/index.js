import React from 'react';
import {Styled_Link} from "./styles";

export default ({name, id}) => (
    <React.Fragment>
        <Styled_Link
            to={`/todos/${id.toString()}`}
        >
                {name}
        </Styled_Link>
    </React.Fragment>
)

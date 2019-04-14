import React from 'react';
import {Styled_Link} from "./styles";

export default ({name, id}) => (
    <React.Fragment>
        <Styled_Link
            to={`/todos/${name}`}
        >
                {name}
        </Styled_Link>
    </React.Fragment>
)

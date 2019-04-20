import React from 'react';
import {Styled_AboutContainer, Styled_AboutContent, Styled_Content, Styled_Header, Styled_Image} from "./styles";

export default (props) => (
    <Styled_AboutContainer>
        <Styled_Header>
            About Us
        </Styled_Header>
        <Styled_AboutContent>
            <Styled_Image
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg'}
            />
            <Styled_Content>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam assumenda beatae
                    consectetur, corporis dicta dolorem, esse explicabo illo inventore, labore magni molestiae molestias
                    numquam quos recusandae tenetur unde voluptatibus.
                </div>
                <div>Distinctio doloribus modi perspiciatis. A adipisci animi architecto blanditiis commodi consequuntur
                    dolore ducimus eaque, eum exercitationem facere fuga fugit iste nam necessitatibus, nostrum porro
                    possimus provident reiciendis repudiandae vero voluptatem?
                </div>
                <div>Accusantium aliquam asperiores aspernatur at aut, autem cumque dolore doloribus eaque est expedita
                    impedit in labore odit perspiciatis praesentium quae quaerat quas quidem reiciendis, rem repellat
                    veniam vero, vitae voluptatum!
                </div>
                <div>Deleniti facere harum in tempora temporibus! Est impedit labore modi necessitatibus neque quasi
                    quidem sint vero vitae voluptatem? Harum iure laudantium modi quos saepe veritatis? Autem labore
                    odio porro voluptates!
                </div>
            </Styled_Content>
        </Styled_AboutContent>
    </Styled_AboutContainer>
)
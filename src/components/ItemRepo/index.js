import React from "react";

import {ItemContainer} from './styles';

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>
                Matheus
            </h3>

            <p>
                Gomes Montovani
            </p>

            <a href="#">
                Ver Repositório
            </a>

            <br/>

            <a href="#" className="remover">
                REMOVER
            </a>

            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;
import React from "react";
import {Character} from "../../common/models/character.model";
import {Star} from "@mui/icons-material";

interface CharacterItemProps {
    character: Character;
}

export const CharacterItem: React.FC<CharacterItemProps> = (props) => {
    const {character} = props;
    return (
        <tr>
            <td>{character.name}</td>
            <td>{character.type}</td>
            <td><img src={character.image_url} height={200}></img></td>
            <td><Star/></td>
        </tr>
    );
};
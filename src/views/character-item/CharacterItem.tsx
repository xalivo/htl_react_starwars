import React, {useState} from "react";
import {Character} from "../../common/models/character.model";
import {Star, StarOutline} from "@mui/icons-material";

interface CharacterItemProps {
    character: Character;
}

export const CharacterItem: React.FC<CharacterItemProps> = (props) => {
    const [character, setCharacter] = useState<Character>(props.character);

    const handleForceSensitivityClick = () => {
        const updatedCharacter = {
            ...character,
            isForceSensitive: !character.isForceSensitive
        }
        setCharacter(updatedCharacter);
    };

    return (
        <tr>
            <td className={"text-center"}>{character.name}</td>
            <td className={"text-center"}>{character.type}</td>
            <td className={"text-center"}><img src={character.image_url} height={200}></img></td>
            <td onClick={(e) => {
                e.stopPropagation();
                handleForceSensitivityClick();
            }} className={"text-center"}>
                {character.isForceSensitive ? <Star/> : <StarOutline/>}
            </td>
        </tr>
    );
};
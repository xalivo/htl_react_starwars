import {Character} from "../../common/models/character.model";
import React from "react";
import {CharacterItem} from "../character-item/CharacterItem";

interface CharacterOverviewProps {
    characters: Character[];
}

export const CharacterOverview: React.FC<CharacterOverviewProps> = (props) => {
    const {characters} = props;
    return (
        <table>
            <thead>
            <th>name</th>
            <th>type</th>
            <th>image</th>
            <th>Force Sensitivity</th>
            </thead>
            <tbody>
            {
                characters.map((c) => {
                    return (<CharacterItem character={c}/>)
                })
            }
            </tbody>
        </table>
    );
};
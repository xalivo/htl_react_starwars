import {Character} from "../../common/models/character.model";
import React from "react";
import {CharacterItem} from "../character-item/CharacterItem";

interface CharacterOverviewProps {
    characters: Character[];
}

export const CharacterOverview: React.FC<CharacterOverviewProps> = (props) => {
    const {characters} = props;
    return (
        <div>
            <h2 className={"text-center"}>Star Wars Characters</h2>
            <table className={"table table-striped table-bordered table-hover table-dark"}>
                <thead>
                <tr>
                    <th className={"text-center"}>name</th>
                    <th className={"text-center"}>type</th>
                    <th className={"text-center"}>image</th>
                    <th className={"text-center"}>Force Sensitivity</th>
                </tr>
                </thead>
                <tbody>
                {
                    characters.map((c) => {
                        return (<CharacterItem
                            character={c}
                        />);
                    })
                }
                </tbody>
            </table>
        </div>
    );
};
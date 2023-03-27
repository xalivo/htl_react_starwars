import {Character} from "./models/character.model";

export const charactersMockData: Character[] = [
    {
        id: 1,
        name: "Obi-Wan Kenobi",
        type: "Jedi",
        image_url: "https://cdn.mos.cms.futurecdn.net/dFyfxT558LhRNjJ9CEvxm-1200-80.jpg",
        description: "A bold one",
        isForceSensitive: true
    },
    {
        id: 2,
        name: "General Grievous",
        type: "Seperatist",
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/54/General_Grievous.png",
        description: "Shorter than expected",
        isForceSensitive: false
    }
]
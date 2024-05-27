// Karakter bileşeniniz buraya gelecek

import styled from "styled-components";
import Accordion from "./Accordion";
import Film from "../Film"


const Key= styled.span`
width: 25%;
font-weight: bold;
display: inline-block;
`;

const Value = styled.span`
width: 75%
font-weight: normal;
display: inline-block;      
`;

const KarakterData = styled.li`
list-style-type:none
padding-top: .5rem;
padding-bottom 0.25rem;
border-bottom: 1px solid #ddd

`;


const Karakter = ({ character, films }) => {

    const getFilm = (filmName) => films?.find(film => film.name === filmName);

    return (
        <Accordion title={character.name}>
        <ul>
                    <KarakterData>
                        <Key>Gender</Key>
                        <Value> {character.gender} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>Height</Key>
                        <Value> {character.height} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>Mass</Key>
                        <Value> {character.mass} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>BirthYear</Key>
                        <Value> {character.birth_year} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>Eye Color</Key>
                        <Value> {character.eye_color} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>Hair Color</Key>
                        <Value> {character.hair_color} </Value>
                    </KarakterData>
                </ul>
                <ul>
                    <KarakterData>
                        <Key>Skin Color</Key>
                        <Value> {character.skin_color} </Value>
                    </KarakterData>
                </ul>

                <h5>
                    Appears in {character.films.length} films
                </h5>
                {character.films.map(filmName => (
                    <Film filmName={filmName} films={films}/>
                ))}
        </Accordion>
        
    );      
};  

export default Karakter;
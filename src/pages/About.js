import React from 'react';
import HomeNavigation from '../component/HomeNavigation';
import TitleAndText from '../component/TitleAndText';
import ImageAndText from '../component/ImageAndText';
import Button from '../component/Button';
import { NavLink } from 'react-router-dom'; 

const About = () => {
    return (
        <>
            <header>
                <HomeNavigation urlValue='about' />
            </header>
            <main className="about">
                <p className="littleConnect">Déjà un projet avec nous ? <br/> <NavLink to='/'>Connectez-vous</NavLink></p>

                <TitleAndText title="Nos Préstations" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi." />

                <Button link="/nous-contacter" value="En savoir plus"/>
    
                <ImageAndText img="./img/photo-iti.jpeg" alt="Isolation Exterieur" title="Isolation exterieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="left"/>

                <ImageAndText img="./img/photo-iti.jpeg" alt="Isolation Interieur" title="Isolation exterieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="right"/>

                <ImageAndText img="./img/photo-iti.jpeg" alt="Isolation Des Combles" title="Isolation exterieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="left"/>

                <ImageAndText img="./img/photo-iti.jpeg" alt="Isolation De la toiture" title="Isolation exterieur" text="Ex commodi voluptatem eos rerum quasi et quis tenetur et iure voluptatem ea quis dolorem. 
                Ut laudantium optio et odit ipsam id reprehenderit voluptatem. Et internos rerum ut perferendis reprehenderit qui beatae fuga a aspernatur excepturi."  sens="right"/>
                
                <Button link="/nous-contacter" addClass="new" value="Isoler mon logement"/>
                <NavLink to="/" className="first">Accueil</NavLink>
            </main>
        </>
    );
};

export default About;
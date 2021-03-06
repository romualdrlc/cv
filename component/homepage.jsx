import { useState } from "react";
import style from "../styles/Home.module.css";

const Homepage = () => {
  const [displayProfil, setDisplayProfil] = useState(false);
  const [displayExperiences, setDisplayExperiences] = useState(false);
  const [displayFormation, setDisplayFormation] = useState(false);
  const [displayInterest, setDisplayInterest] = useState(false);
  const [displayInfoMe, setDisplayInfoMe] = useState(false);

  const profil = () => {
    setDisplayInterest(false);
    setDisplayFormation(false);
    setDisplayExperiences(false);
    setDisplayProfil(true);
    setDisplayInfoMe(false);
  };
  const experiences = () => {
    setDisplayInterest(false);
    setDisplayFormation(false);
    setDisplayExperiences(true);
    setDisplayProfil(false);
    setDisplayInfoMe(false);
  };
  const formation = () => {
    setDisplayInterest(false);
    setDisplayFormation(true);
    setDisplayExperiences(false);
    setDisplayProfil(false);
    setDisplayInfoMe(false);
  };
  const interets = () => {
    setDisplayInterest(true);
    setDisplayFormation(false);
    setDisplayExperiences(false);
    setDisplayProfil(false);
    setDisplayInfoMe(false);
  };
  const infoMe = () => {
    setDisplayInterest(false);
    setDisplayFormation(false);
    setDisplayExperiences(false);
    setDisplayProfil(false);
    setDisplayInfoMe(true);
  };

  return (
    <main className={style.main}>
      <p className={style.description}>
        <code className={style.code}>
          Mon lien{" "}
          <a href="https://github.com/romualdrlc?tab=repositories">Github</a>
        </code>
      </p>

      <div className={style.grid}>
        <h2
          className={style.card}
          onClick={() => infoMe()}
          style={{ cursor: "pointer" }}
        >
          Informations personelles &rarr;
        </h2>
        <h2
          className={style.card}
          onClick={() => profil()}
          style={{ cursor: "pointer" }}
        >
          Profil &rarr;
        </h2>

        <h2
          className={style.card}
          onClick={() => experiences()}
          style={{ cursor: "pointer" }}
        >
          Experiences &rarr;
        </h2>

        <h2
          className={style.card}
          onClick={() => formation()}
          style={{ cursor: "pointer" }}
        >
          Formation &rarr;
        </h2>

        <h2
          className={style.card}
          onClick={() => interets()}
          style={{ cursor: "pointer" }}
        >
          Centre d'inter??ts &rarr;
        </h2>
      </div>
      {displayInfoMe ? (
        <div id="profil" className={style.card}>
          <p>Je suis romuald, mari?? deux enfants, j'ai 43 ans</p>
          <p>Mon adresse : 2 franchaud 44440 a Jou?? sur Erdre.</p>
          <p>Mon mail: romuald.lecorroller@gmail.com</p>
          <p>Mon tel: 06 24 56 53 27</p>
        </div>
      ) : null}
      {displayProfil ? (
        <div id="profil" className={style.card}>
          <p>
            Bonjour,
            <br /> je suis technicien d??panneur en micro-informatique depuis 20
            ans et j'ai d??cid?? de changer de m??tiers. Je viens de faire une
            formation chez Fewlines pour devenir d??veloppeur web react et next
            js. Elle s'est d??roul?? durant 3 mois. Vous pourrez voir dans la
            partie experiences toutes les technos que j'ai pu utilis??.
          </p>
        </div>
      ) : null}
      {displayExperiences ? (
        <div id="experiences" className={style.card}>
          <ul>
            <p>Formation d??veloppeur chez Fewlines a Lilles - 2021</p>
            <br />
            <li>Apprentissage React - Next js - Node- Express - Github</li>
            <br />
            <li>Apprentissage MongoDb - Heroku</li>
            <br />
            <li>Apprentissage Bootstrap - Nunjucks</li>
            <br />
            <li>
              Apprentissage Javascript - Typescript Apprentissage Html5 - CSS3
            </li>
            <br />
            <li> Apprentissage Jest et Taiko</li>
            <br />
          </ul>
          <ul>
            <p>
              Technicien d??panneur en informatique ??? Solvarea ?? Saint-Herblain
              (44)- 1999-2021
            </p>
            <li>
              Maintenance micro-informatique (desktop, notebook et tablette) ;
            </li>
            <br />
            <li>R??paration smartphone ; </li>
            <br />
            <li>
              Installation de syst??mes informatique (remasterisation ou
              recovery) et mat??riels informatique
            </li>
            <br />
          </ul>
        </div>
      ) : null}
      {displayFormation ? (
        <div id="formation" className={style.card}>
          <ul>
            <p>Parcours scolaire</p>
            <br />
            <li>
              2000 : Formation LEGRI (Responsable logiciel et gestion r??seau)
              ecole polytechnique ??? Nantes (44)
            </li>
            <br />
            <li>
              1998 : BTS informatique industrielle mention ??conomie lyc??e
              Nicolas Appert ??? Orvault (44){" "}
            </li>
            <br />
            <li>1996 : Baccalaur??at sti - Nantes (44)</li>
            <br />
          </ul>
        </div>
      ) : null}
      {displayInterest ? (
        <div id="centre-interets" className={style.card}>
          <ul>
            <p>Centre d'int??r??ts</p>
            <br />
            <li>Anglais informatique lu</li>
            <br />
            <li>Pratique du football et dirigeant, entraineur des u14-u15.</li>
            <br />
            <li>L???univers des nouvelles technologies.</li>
            <br />
          </ul>
        </div>
      ) : null}
    </main>
  );
};
export default Homepage;

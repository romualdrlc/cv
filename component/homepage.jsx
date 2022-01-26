import { useState } from "react";
import styles from "../styles/home.module.css";

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
    <main className={styles.main}>
      <p className={styles.description}>
        <code className={styles.code}>
          Mon lien{" "}
          <a href="https://github.com/romualdrlc?tab=repositories">Github</a>
        </code>
      </p>

      <div className={styles.grid}>
        <h2
          className={styles.card}
          onClick={() => infoMe()}
          style={{ cursor: "pointer" }}
        >
          Informations personelles &rarr;
        </h2>
        <h2
          className={styles.card}
          onClick={() => profil()}
          style={{ cursor: "pointer" }}
        >
          Profil &rarr;
        </h2>

        <h2
          className={styles.card}
          onClick={() => experiences()}
          style={{ cursor: "pointer" }}
        >
          Experiences &rarr;
        </h2>

        <h2
          className={styles.card}
          onClick={() => formation()}
          style={{ cursor: "pointer" }}
        >
          Formation &rarr;
        </h2>

        <h2
          className={styles.card}
          onClick={() => interets()}
          style={{ cursor: "pointer" }}
        >
          Centre d'interêts &rarr;
        </h2>
      </div>
      {displayInfoMe ? (
        <div id="profil" className={styles.card}>
          <p>Je suis romuald, marié deux enfants, j'ai 43 ans</p>
          <p>Mon adresse : 2 franchaud 44440 a Joué sur Erdre.</p>
          <p>Mon mail: romuald.lecorroller@gmail.com</p>
          <p>Mon tel: 06 24 56 53 27</p>
        </div>
      ) : null}
      {displayProfil ? (
        <div id="profil" className={styles.card}>
          <p>
            Bonjour,
            <br /> je suis technicien dépanneur en micro-informatique depuis 20
            ans et j'ai décidé de changer de métiers. Je viens de faire une
            formation chez Fewlines pour devenir développeur web react et next
            js. Elle s'est déroulé durant 3 mois. Vous pourrez voir dans la
            partie experiences toutes les technos que j'ai pu utilisé.
          </p>
        </div>
      ) : null}
      {displayExperiences ? (
        <div id="experiences" className={styles.card}>
          <ul>
            <p>Formation développeur chez Fewlines a Lilles - 2021</p>
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
              Technicien dépanneur en informatique – Solvarea à Saint-Herblain
              (44)- 1999-2021
            </p>
            <li>
              Maintenance micro-informatique (desktop, notebook et tablette) ;
            </li>
            <br />
            <li>Réparation smartphone ; </li>
            <br />
            <li>
              Installation de systèmes informatique (remasterisation ou
              recovery) et matériels informatique
            </li>
            <br />
          </ul>
        </div>
      ) : null}
      {displayFormation ? (
        <div id="formation" className={styles.card}>
          <ul>
            <p>Parcours scolaire</p>
            <br />
            <li>
              2000 : Formation LEGRI (Responsable logiciel et gestion réseau)
              ecole polytechnique – Nantes (44)
            </li>
            <br />
            <li>
              1998 : BTS informatique industrielle mention économie lycée
              Nicolas Appert – Orvault (44){" "}
            </li>
            <br />
            <li>1996 : Baccalauréat sti - Nantes (44)</li>
            <br />
          </ul>
        </div>
      ) : null}
      {displayInterest ? (
        <div id="centre-interets" className={styles.card}>
          <ul>
            <p>Centre d'intérêts</p>
            <br />
            <li>Anglais informatique lu</li>
            <br />
            <li>Pratique du football et dirigeant, entraineur des u14-u15.</li>
            <br />
            <li>L’univers des nouvelles technologies.</li>
            <br />
          </ul>
        </div>
      ) : null}
    </main>
  );
};
export default Homepage;

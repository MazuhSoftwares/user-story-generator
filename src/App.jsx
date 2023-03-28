import "./App.css";
import UserStoryGenerator from "./UserStoryGenerator";
import UserStoryLecture from "./UserStoryLecture";

export default function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageMain />
      <PageFooter />
    </div>
  );
}

function PageHeader() {
  return (
    <header>
      <h1>História de usuário.</h1>
    </header>
  );
}

function PageMain() {
  return (
    <main className="page-main">
      <UserStoryGenerator />
      <hr className="separator" />
      <UserStoryLecture />
    </main>
  );
}

function PageFooter() {
  return (
    <footer className="page-footer">
      <p>
        Feito por{" "}
        <a href="https://mazuhsoftwares.com/" target="_blank">
          Mazuh Softwares
        </a>
        , e é{" "}
        <a
          href="https://github.com/MazuhSoftwares/user-story-generator"
          target="_blank"
        >
          free source
        </a>
        .
      </p>
      <p>
        Baseado no criado pela{" "}
        <a
          href="https://easyretro.io/tools/user-story-generator/"
          target="_blank"
        >
          EasyRetro
        </a>
        .
      </p>
    </footer>
  );
}

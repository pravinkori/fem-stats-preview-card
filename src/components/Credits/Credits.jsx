import styles from "./Credits.module.css";

function Credit({ name, githubUserName }) {
  return (
    <div className={styles.attribution} role="contentinfo">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href={`https://github.com/${githubUserName}`}>{name}</a>.
    </div>
  );
}

export default Credit;

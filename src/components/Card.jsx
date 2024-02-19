import desktopImg from "../assets/images/image-header-desktop.jpg";
import mobileImg from "../assets/images/image-header-mobile.jpg";
function Card() {
  return (
    <article className="card">
      <picture className="card__img">
        <source srcSet={desktopImg} media="(min-width: 1024px)" />
        <img src={mobileImg} alt="Employees working in office" />
      </picture>

      <div className="card__content">
        <h1 className="card__title">
          Get <span>insights</span> that help your business grow.
        </h1>

        <p className="card__description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="flex-group">
          <div className="card__stats">
            <p className="card__stats-numbers">10k+</p>
            <p className="card__stats-headings">companies</p>
          </div>
          <div className="card__stats">
            <p className="card__stats-numbers">314</p>
            <p className="card__stats-headings">templates</p>
          </div>
          <div className="card__stats">
            <p className="card__stats-numbers">12M+</p>
            <p className="card__stats-headings">queries</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;

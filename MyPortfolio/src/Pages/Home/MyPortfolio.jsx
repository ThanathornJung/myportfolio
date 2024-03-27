import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div className="portfolio--section--card">
          <a href="https://proawsaengkatc.itch.io/suis-its-so-close">
            <div class="portfolio--section--img">
              <img src="./img/placeholder-image.png" alt="Placeholder" />
            </div>
            <div class="portfolio--section--card--content">
              <div>
                <h3 class="portfolio--section--title">SUIS IT'S SO CLOSE</h3>
                <p class="text-md">
                  This is choice selection game that educates players about the prevention of Streptococcus suis Infection
                </p>
              </div>
              <p class="text-sm portfolio--link">
                View Doc
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolio--section--card">
          <a href="https://github.com/ThanathornJung/CookingMania.git">
            <div class="portfolio--section--img">
              <img src="./img/placeholder-image-1.png" alt="Placeholder" />
            </div>
            <div class="portfolio--section--card--content">
              <div>
                <h3 class="portfolio--section--title">CookingMania</h3>
                <p class="text-md">
                  This game is Overcook clone, That I made to practice multiplayer system
                </p>
              </div>
              <p class="text-sm portfolio--link">
                View in GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

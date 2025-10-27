import "../styles.scss";
// Define the badge class mapping
const getBadgeClass = (type: string): string => {
  const typeMap: { [key: string]: string } = {
    'Data Science': 'bg-data-science',
    'Computer Science': 'bg-computer-science',
    'Computer Engineering': 'bg-computer-engineering',
    'Biomedical Engineering': 'bg-biomedical',
    'Electrical Engineering': 'bg-electrical',
    'Mathematics/Statistics': 'bg-mathematics',
    'Questrom': 'bg-questrom'
  };
  return typeMap[type] || "bg-secondary";
};

const items = [
  {
    id: 1,
    name: "Boston Bus Equity",
    description:
      "Public transport plays an important role in the quality of life for residents in Massachusetts and Boston in terms of economic development, the environment, and equity. The goal of this project is to better understand the impact of bus performance on Boston residents by using MBTA bus data to examine service performance trends by geography.",
    type: "Data Science",
    difficulty: 5,
    image: "/Boston All Stations.png",
    repoWebsite: "github.com/michaelkrah/506-data-analysis",
    author: "Anthony Sevilla-Meza",
  },
  {
    id: 2,
    name: "DCF: Broken Documentary Computational Journalism Investigation",
    description:
      "This investigation aimed to explore the gap between DCF's budget and its outcomes, focusing on how money within DCF is being spent and where it ultimately goes. We discovered that DCF funds flow through contractors to subcontractors and we specifically examined 129 subcontractor companies linked to 56 high-paying congregate care facilities directly contracted by DCF. We uncovered indicators of business inauthenticity and malpractice, which we used to create a risk assessment framework that calculates a risk score percentage for each subcontractor.",
    type: "Data Science",
    difficulty: 5,
    image: "/Risk Score Histogram from Tye Robison.png",
    repoWebsite:
      "docs.google.com/document/d/1H_jhiO8ezXTE_ShxQk0Ed5Jigak1fToYE42BQkRNkqw/edit?tab=t.0",
    author: "Tye Robison and Co.",
  },
  {
    id: 3,
    name: "Josh-and-Thomas Portfolio Website",
    description:
      "This website highlights our personal portfolios and using complex animations and designs. Through javascript, css, and html we display our projects, expierences, technical skills, etc. This site gets occasionally updated with our most recent information.",
    type: "Computer Science",
    difficulty: "?",
    image: "jhomas.png",
    repoWebsite: "thomas-and-josh.com/",
    author: "Josh and Thomas",
  },
  {
    id: 4,
    name: "Sentiment-Driven-Stock-Selector",
    description:
      "This project collects daily headlines for each company in the S&P 500 and performs sentiment analysis on them. It collects 100 headlines for each company and then gives a polarity score to the five most relevant headlines. Then, it calculates a polarity score for each company based on the average of the 5 headline scores. After, it compares the scores with the percentage change in the stock price from yesterday's closing price to today's open price.",
    type: "Data Science",
    difficulty: "?",
    image: "sentiment.png",
    repoWebsite:
      "github.com/thomas211738/Sentiment-Driven-Stock-Selector?tab=readme-ov-file#sentiment-driven-stock-selector",
    author: "Thomas Yousef and Josh Leeds",
  },
  {
    id: 5,
    name: "Movie Reccomendation",
    description:
      "I built a full-stack web app that utilizes machine-learning on 58,000+ data points to generate movie recommendations based on a user's Letterboxd ratings and 10+ unique profile statistics for 2,000+ users in 50+ countries.",
    type: "Computer Science",
    difficulty: "?",
    image: "letterboxed.png",
    repoWebsite: "recommendations.victorverma.com/",
    author: "Victor Verma",
  },
];

function Projects() {

     
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Projects</h1>
      <div className="list-group list-group-flush">
        {items.map((item) => (
          <a
            key={item.id}
            href={`https://${item.repoWebsite}`}
            className="list-group-item list-group-item-action position-relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                width="200"
                height="200"
                alt={item.name}
                className="me-3 rounded"
                style={{ objectFit: "cover" }}
              />
              <div>
                <h3 className="mb-2">{item.name}</h3>
                <p className="mb-2">{item.description}</p>
                <div className="d-flex align-items-center">
                  <span className={`badge ${getBadgeClass(item.type)} me-2`}>
                    {item.type}
                  </span>
                  <p className="mb-0">Difficulty: {item.difficulty}/5</p>
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 end-0 p-2">
              <span className="badge bg-secondary">By {item.author}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

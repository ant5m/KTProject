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
  return typeMap[type] || 'bg-secondary'; // fallback to secondary if type not found
};

const items = [
  {
    id: 1,
    name: "SpotiRanked",
    description: "blahblahc",
    type: "Computer Science",
    difficulty: 2,
    image: "/spotiranked.jpg",
    repoWebsite: "google.com"
  },
  {
    id: 2,
    name: "Riho's Amazing beautiful project",
    description: "#ILOVEUPRO",
    type: "Electrical Engineering",
    difficulty: 5,
    image: "/riho_image.png",
    repoWebsite: "google.com"
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
            className="list-group-item list-group-item-action" 
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
                style={{ objectFit: 'cover' }}
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
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

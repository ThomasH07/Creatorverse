export function CreatorsList({ creators }) {
    return (
        <div className="CreatorsList">
            {creators.map((creator) => (
                <div key={creator.name} className="CreatorCard">
                    <h2>{creator.name}</h2>
                    <p>{creator.description}</p>
                    <img src={creator.imageUrl} alt={creator.name} />
                    <a href={creator.link} target="_blank" rel="noopener noreferrer">
                        Visit Creator
                    </a>
                </div>
            ))}
        </div>
    );
}
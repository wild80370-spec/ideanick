interface Idea {
  nick: string;
  name: string;
  description: string;
}

export const App = () => {
  const ideas: Idea[] = [
    { nick: 'nick-1', name: 'Idea 1', description: 'Description Idea 1' },
    { nick: 'nick-2', name: 'Idea 2', description: 'Description Idea 2' },
    { nick: 'nick-3', name: 'Idea 3', description: 'Description Idea 3' },
    { nick: 'nick-4', name: 'Idea 4', description: 'Description Idea 4' },
    { nick: 'nick-5', name: 'Idea 5', description: 'Description Idea 5' },
  ];
  return (
    <div>
      <h1>IdeaNick</h1>
      {ideas.map((idea: Idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};

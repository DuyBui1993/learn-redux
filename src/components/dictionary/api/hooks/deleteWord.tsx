export const deleteWord = async (word: string): Promise<void> => {
  const response = await fetch(`https://tudien.fly.dev/api/dictionary/words`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete word");
  }

  return response.json();
};

import { WordData } from "@/components/dictionary/api/words/entity/word";

export const UpdateWord = async (updatedWord: WordData) => {
  const response = await fetch(
    `https://tudien.fly.dev/api/dictionary/words/${updatedWord.word}`,

    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update word");
  }

  return response.json();
};

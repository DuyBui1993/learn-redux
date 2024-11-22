import { WordData } from "@/components/dictionary/api/words/entity/word";

export const insertWord = async (newWord: WordData) => {
  const response = await fetch(
    "https://tudien.fly.dev/api/dictionary/words/insert",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to create word");
  }

  return response.json();
};

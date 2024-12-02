import { WordData } from "@/components/dictionary/api/words/entity/word";
import { PATH_URL } from "@/components/utils/dictionaryUtils";

export const insertWord = async (newWord: WordData) => {
  const response = await fetch(`${PATH_URL}/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWord),
  });

  if (!response.ok) {
    throw new Error("Failed to create word");
  }

  return response.json();
};

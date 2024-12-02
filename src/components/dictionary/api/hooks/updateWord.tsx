import { WordData } from "@/components/dictionary/api/words/entity/word";

import { PATH_URL } from "@/components/utils/dictionaryUtils";

export const updateWord = async (updatedWord: WordData) => {
  const response = await fetch(
    `${PATH_URL}/${updatedWord.word}`,

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

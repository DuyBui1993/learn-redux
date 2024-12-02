import { PATH_URL } from "@/components/utils/dictionaryUtils";

export const deleteWord = async (word: string): Promise<void> => {
  const response = await fetch(`${PATH_URL}`, {
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

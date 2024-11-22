import React from "react";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { UpdateWord } from "@/components/dictionary/api/hooks/updateWord";
import { WordData } from "@/components/dictionary/api/words/entity/word";

interface UpdateProps {
  wordData: WordData;
  onClose: () => void;
}

export const Update = ({ wordData, onClose }: UpdateProps) => {
  const [word, setWord] = React.useState(wordData.word);
  const [pronunciation, setPronunciation] = React.useState(
    wordData.pronunciation,
  );
  const [partOfSpeech, setPartOfSpeech] = React.useState(
    wordData.partOfSpeeches[0]?.partOfSpeech || "",
  );

  const [definition, setDefinition] = React.useState(
    wordData.partOfSpeeches[0]?.definitions[0]?.definition || "",
  );
  const [definitionVietnamese, setDefinitionVietnamese] = React.useState(
    wordData.partOfSpeeches[0]?.definitions[0]?.definitionVietnamese || "",
  );
  const [exampleSentence, setExampleSentence] = React.useState(
    wordData.partOfSpeeches[0]?.definitions[0]?.examples[0]?.exampleSentence ||
      "",
  );
  const [exampleSentenceVietnamese, setExampleSentenceVietnamese] =
    React.useState(
      wordData.partOfSpeeches[0]?.definitions[0]?.examples[0]
        ?.exampleSentenceVietnamese || "",
    );

  const mutation = useMutation({
    mutationFn: async (updatedWord: WordData) => {
      return UpdateWord(updatedWord);
    },
    onSuccess: () => {
      alert("Word updated successfully!");
      onClose();
    },
    onError: () => {
      alert("Failed to update word.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedWord: WordData = {
      word,
      pronunciation,
      partOfSpeeches: [
        {
          partOfSpeech,
          definitions: [
            {
              definition,
              definitionVietnamese,
              examples: [
                {
                  exampleSentence,
                  exampleSentenceVietnamese,
                },
              ],
            },
          ],
        },
      ],
    };
    mutation.mutate(updatedWord);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-semibold">Update Word</h2>
            <button onClick={onClose}>
              <FaXmark className="h-4 w-4" />
            </button>
          </div>
          <form className="space-y-4 p-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">Word</label>
              <input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
                disabled={true}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Pronunciation</label>
              <input
                value={pronunciation}
                onChange={(e) => setPronunciation(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Part of Speech</label>
              <input
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Definition</label>
              <textarea
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Definition (Vietnamese)
              </label>
              <textarea
                value={definitionVietnamese}
                onChange={(e) => setDefinitionVietnamese(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Example Sentence</label>
              <input
                value={exampleSentence}
                onChange={(e) => setExampleSentence(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Example Sentence (Vietnamese)
              </label>
              <input
                value={exampleSentenceVietnamese}
                onChange={(e) => setExampleSentenceVietnamese(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Updating..." : "Update Word"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { insertWord } from "@/components/dictionary/api/hooks/insertWord";
import { WordData } from "@/components/dictionary/api/words/entity/word";

export const Insert = ({ onClose }) => {
  const [word, setWord] = React.useState("");
  const [pronunciation, setPronunciation] = React.useState("");
  const [partOfSpeech, setPartOfSpeech] = React.useState("");
  const [definition, setDefinition] = React.useState("");
  const [definitionVietnamese, setDefinitionVietnamese] = React.useState("");
  const [exampleSentence, setExampleSentence] = React.useState("");
  const [exampleSentenceVietnamese, setExampleSentenceVietnamese] =
    React.useState("");
  const mutation = useMutation({
    mutationFn: async (newWord: WordData) => {
      return insertWord(newWord);
    },
    onSuccess: () => {
      setWord("");
      setPronunciation("");
      setPartOfSpeech("");
      setDefinition("");
      setDefinitionVietnamese("");
      setExampleSentence("");
      setExampleSentenceVietnamese("");
      alert("Word added successfully!");
      onClose();
    },
    onError: () => {
      alert("Failed to add word.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newWord: WordData = {
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
    mutation.mutate(newWord);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-semibold">Create New Word</h2>
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
              {mutation.isPending ? "Creating..." : "Create Word"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

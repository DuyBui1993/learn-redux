export interface WordData {
  word: string;
  pronunciation: string;
  partOfSpeeches: PartOfSpeech[];
}

interface PartOfSpeech {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Definition {
  definition: string;
  definitionVietnamese: string;
  examples: Example[];
}

interface Example {
  exampleSentence: string;
  exampleSentenceVietnamese: string;
}

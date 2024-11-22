import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Insert } from "@/components/dictionary/api/words/insert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { useAllWords } from "@/components/dictionary/api/hooks/useAllWords";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Update } from "@/components/dictionary/api/words/update";
import ReactPaginate from "react-paginate";
import { deleteWord } from "@/components/dictionary/api/hooks/deleteWord";
import { WordData } from "@/components/dictionary/api/words/entity/word";

export const WordAdmin = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const [updateFormVisible, setUpdateFormVisible] = React.useState(false);
  const [selectedWordData, setSelectedWordData] = React.useState<any>(null);
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(0);
  const { isLoading, error, data, refetch } = useAllWords({
    search,
    limit: 10,
    page: currentPage,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const displayedWords = search
    ? data?.content?.filter((wordData: { word: string }) =>
        wordData.word.toLowerCase().includes(search.toLowerCase()),
      )
    : data?.content;

  const totalPages = data?.totalPages;

  const handleUpdate = async (updateWord: WordData) => {
    setSelectedWordData(updateWord);
    setUpdateFormVisible(true);
  };

  const handleDelete = async (word: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this word?",
    );
    if (!confirmed) return;

    try {
      await deleteWord(word);
      alert("Word deleted successfully");
      await refetch();
      setSelectedWordData(null);
    } catch (error) {
      alert("Error deleting word: " + error.message);
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="text-4xl font-extrabold">Word Admin</div>
        <div className="flex items-center">
          <label className="text-sm font-medium mr-2">Search</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 rounded-md"
            required
          />
          <Button
            className="text-lg px-4 py-2 ml-4"
            onClick={() => setFormVisible(true)}
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Create Word
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Word</TableHead>
              <TableHead className="w-[150px]">Pronunciation</TableHead>
              <TableHead>Part of Speech</TableHead>
              <TableHead className="w-[700px]">Definition</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedWords?.map((wordData, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {wordData?.word ?? ""}
                </TableCell>
                <TableCell>{wordData?.pronunciation ?? ""}</TableCell>
                <TableCell>
                  {wordData?.partOfSpeeches?.map((pos, posIndex) => (
                    <div key={posIndex}>{pos?.partOfSpeech ?? ""}</div>
                  ))}
                </TableCell>
                <TableCell>
                  {wordData?.partOfSpeeches
                    ?.flatMap((pos) =>
                      pos?.definitions?.map((def) => def?.definition ?? ""),
                    )
                    .join(", ")}
                </TableCell>
                <TableCell>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>
                        <BsThreeDotsVertical fontSize={25} />
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => handleUpdate(wordData)}>
                          <MdEditNote className="mr-2" fontSize={20} />
                          Update
                        </MenubarItem>
                        <MenubarItem
                          onClick={() => handleDelete(wordData.word)}
                        >
                          <IoTrashBinSharp className="mr-2" fontSize={20} />
                          Delete
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <ReactPaginate
          className="mt-4 flex justify-end space-x-2  "
          breakLabel="..."
          nextLabel="next > "
          onPageChange={handlePageClick}
          forcePage={currentPage}
          pageRangeDisplayed={5}
          pageCount={totalPages || 0}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          activeClassName="bg-blue-500 text-white font-semibold rounded-full px-4 py-2 "
          pageClassName="px-4 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white "
          previousClassName="px-4 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white "
          nextClassName="px-4 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white "
          breakClassName="px-4 py-2 rounded-full text-blue-500"
        />
      </div>

      {formVisible && !updateFormVisible && (
        <Insert
          onClose={() => {
            setFormVisible(false);
            refetch();
          }}
        />
      )}

      {updateFormVisible && selectedWordData && (
        <Update
          wordData={selectedWordData}
          onClose={() => {
            setUpdateFormVisible(false);
            setSelectedWordData(null);
            refetch();
          }}
        />
      )}
    </div>
  );
};

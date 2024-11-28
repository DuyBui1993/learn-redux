import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { DetailHeader } from "@/components/dictionary/detail-dictionary/detail-header";
import { DefineDetail } from "@/components/dictionary/detail-dictionary/define-detail";

const HomeDetail = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const { data, error } = useQuery({
    queryKey: ["repoData", search],
    queryFn: async () => {
      const res = await fetch(
        `https://tudien.fly.dev/api/dictionary/words/search?q=${search}`,
      );
      return res.json();
    },
    enabled: !!search,
  });

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <DetailHeader data={data} search={search} />
      <DefineDetail data={data} />
    </div>
  );
};

export default HomeDetail;

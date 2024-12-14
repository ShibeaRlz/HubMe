import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tag from "@/features/tags/components/Tag";
import { TagType } from "@/features/tags/types/tag";
import { useState } from "react";
import style from "../styles/search-tags.module.scss";

type SearchTagsProps = {
  tag_name: TagType[];
  handleTagClick: (tag: TagType) => void;
};

export function SearchTags({ tag_name, handleTagClick }: SearchTagsProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = tag_name?.filter(tag =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={style.container}>
      <h1 className={style.title}>タグで絞り込む</h1>
      <Input
        type="text"
        placeholder="タグ名で検索..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="mb-4"
      />
      <ScrollArea className="w-full whitespace-nowrap rounded-md border gap-1">
        <div className="flex w-max space-x-4 p-4">
          {filteredTags?.map(tag => (
            <Tag
              key={tag.name}
              variant={tag.color}
              onClick={() => handleTagClick(tag)}
              tagType="button"
            >
              {tag.name}
            </Tag>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

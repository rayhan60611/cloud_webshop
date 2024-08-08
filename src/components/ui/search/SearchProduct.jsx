import React, { useEffect, useState, useTransition } from "react";
import { Input } from "../input";
import { Search } from "lucide-react";
import { useMatch, useMatches, useSearchParams } from "react-router-dom";

const SearchProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchInput, setSearchInput] = useState("");
  // const match = useMatches("/allProduct" || "/home");

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      const decodedQuery = decodeURIComponent(query);
      setSearchInput(decodedQuery);
    }
  }, [searchParams]);
  const serachHandler = (e) => {
    const value = e.target.value.trim();
    setSearchInput(value);

    startTransition(() => {
      const updatedParams = new URLSearchParams(searchParams);

      if (value) {
        updatedParams.set("q", encodeURIComponent(value));
        setSearchParams(updatedParams);
      } else {
        updatedParams.delete("q");
        setSearchParams(updatedParams);
      }
    });
  };

  // if (!match) return null;
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={serachHandler}
        value={searchInput}
        type="search"
        placeholder="Search products..."
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
      />
    </div>
  );
};

export default SearchProduct;

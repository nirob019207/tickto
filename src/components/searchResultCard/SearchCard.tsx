import { results } from "@/constants/results"
import SearchResultCard from "./SearchResultCard"

export function SearchCard() {

  
    return (
      <div className="mt-[55px] lg:col-span-2 md:col-span-2">
        {results.map((result, index) => (
          <SearchResultCard key={index} {...result} />
        ))}
      </div>
    )
  }
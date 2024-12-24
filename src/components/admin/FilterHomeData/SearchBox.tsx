import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchDialogProps> = ({ isOpen, onClose, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    onClose();  // Close dialog after search
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* DialogTrigger can be handled externally, here we do not need an extra button */}
     
     
      <DialogTrigger />
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Enter your search query</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for members"
            className="border p-2"
          />
          
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;

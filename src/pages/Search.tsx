import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setmaxPrice] = useState(10000);
  const [categories, setCategories] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="Search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            value={maxPrice}
            min={100}
            max={200000}
            onChange={(e) => setmaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="all">All</option>
            <option value="camera">Camera</option>
            <option value="footwear">Footwear</option>
            <option value="menswear">Men's wear</option>
            <option value="womenswear">Women's wear</option>
          </select>
        </div>
      </aside>
    </div>
  );
};

export default Search;

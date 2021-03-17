import Link from "next/link";
import { useState } from "react";
import { useItemFetch } from "../hooks/useItemFetch";

export default function New() {
  const [name, setName] = useState("");
  const { addItem } = useItemFetch();
  return (
    <div>
      <p>Create New Item</p>
      <div>
        <p>Name</p>
        <input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          value={name}
        />
        <button
          onClick={() => {
            addItem(name);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <Link href="/">
          <a>Item Index</a>
        </Link>
      </div>
    </div>
  );
}

import { useItemFetch } from "../hooks/useItemFetch";
import Link from "next/link";

export default function Index() {
  const { itemState } = useItemFetch();
  return (
    <div>
      <p>{JSON.stringify(itemState)} </p>
      <Link href="/new">
        <a>Create New Item</a>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function BlogCard({ title, excerpt, slug,  }) {
  return (
    <div className=" font-serif ">
      <Link href={"/posts/" + slug}>
        <div className="cursor-pointer bg-gray-100 rounded-md my-6 py-3 px-3 hover:opacity-60 dark:bg-custom-brown2">
          <div className="mb-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{excerpt}</p>
          </div>
          <div>
          </div>
        </div>
      </Link>
    </div>
  );
}

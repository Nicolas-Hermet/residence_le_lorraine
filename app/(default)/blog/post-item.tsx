"use client";

import Link from "next/link";
import Image from "next/image";
import { useCategoryProvider } from "./category-provider";

export default function PostItem({ ...props }) {
  const { category } = useCategoryProvider();
  const isHidden = category !== "All" && category !== props.metadata.category;

  return (
    <article
      className={`flex h-full flex-col transition-opacity ${isHidden ? "pointer-events-none opacity-15" : ""}`}
    >
      <header>
        <Link
          className="group relative mb-6 block overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50"
          href={`/blog/${props.slug}`}
          tabIndex={-1}
        >
          <Image
            className="aspect-101/64 w-full object-cover opacity-70 grayscale transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]"
            src={props.metadata.image || "/images/article1.jpg"}
            width={347}
            height={220}
            alt={props.metadata.title || "Blog Post Image"}
          />
        </Link>
        <div className="mb-3">
          {props.metadata.category && (
          <ul className="flex flex-wrap gap-2">
            <li>
              <a
                className="btn-sm relative rounded-full bg-linear-to-b from-blue-200 via-blue-400/60 to-blue-200 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                href="#0"
              >
                <span className="text-gray-800/60 bg-linear-to-r from-gray-600 to-indigo-200 bg-clip-text hover:text-black">
                  {props.metadata.category}
                </span>
              </a>
            </li>
          </ul>
          )}
        </div>
        <h3 className="mb-2 font-nacelle text-lg font-semibold">
          <Link
            className="text-gray-800/80 transition hover:text-indigo-500/60"
            href={`/blog/${props.slug}`}
          >
            {props.metadata.title}
          </Link>
        </h3>
      </header>
      <footer className="flex items-center gap-3">
        <Image
          className="inline-flex shrink-0 rounded-full"
          src={props.metadata.authorImg || "/images/join-avatar.jpg"}
          width={28}
          height={28}
          alt={props.metadata.author}
        />
        <div className="text-sm font-medium text-gray-400">
          <span>{props.metadata.author || "Nicolas Hermet"}</span>
          <span className="text-gray-700"> - </span>
          <a
            className="text-indigo-400/65 transition-colors hover:text-indigo-500"
            href={props.metadata.authorLink || "https://www.fulltrack.dev"}
          >
            {props.metadata.authorRole || "Software Engineer"}
          </a>
        </div>
      </footer>
    </article>
  );
}

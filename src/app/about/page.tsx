import { Metadata } from "next";

// static metadata，會取代 root layout 的 metadata.title
export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <h1>about Page</h1>;
}

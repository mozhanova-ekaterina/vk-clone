import { Feed } from "@/components/feed/Feed";
import { Header } from "@/components/Header";
import { Layout } from "@/components/layouts/Layout";

export default function HomePage() {
  return (
    <Layout
      header={<Header />}
      leftSide={<div>left side</div>}
      rightSide={<div>right side</div>}
      center={<Feed />}
    />
  );
}

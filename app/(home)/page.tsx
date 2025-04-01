import { Header } from "@/components/Header";
import { Feed } from "@/components/feed/Feed";
import { Layout } from "@/components/layouts/Layout";


export default function HomePage() {
  
  return (
    <Layout
      header={<Header />}
      center={<Feed />}
      leftSide={<div>left side</div>}
      rightSide={<div>right side</div>}
    />
  );
}

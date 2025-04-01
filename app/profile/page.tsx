import Profile from "@/components/auth/Profile";
import { Header } from "@/components/Header";
import { Layout } from "@/components/layouts/Layout";

export default function ProfilePage() {
  return (
    <Layout
      header={<Header />}
      center={<Profile />}
      leftSide={<div>left side</div>}
      rightSide={<div>right side</div>}
    />
  );
}

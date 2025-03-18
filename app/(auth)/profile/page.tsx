"use client";

import { Header } from "@/components/Header";
import { Layout } from "@/components/layouts/Layout";
import { observer } from "mobx-react-lite";

export default observer(function LoginPage() {
  return (
    <Layout
      header={<Header />}
      center={<div>profile</div>}
      leftSide={<div>left side</div>}
      rightSide={<div>right side</div>}
    />
  );
});

'use client';

import { useSession } from "next-auth/react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            {session?.user?.name} {session?.user?.email}
          </CardDescription>
          <Image
            className="rounded-full"
            src={session?.user?.image!}
            alt=""
            width={100}
            height={100}
          />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Profile;

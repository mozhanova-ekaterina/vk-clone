import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const SkeletonPost = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 items-center">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-60" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-[600px] rounded-none" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-10 w-15 rounded-full" />
          <Skeleton className="h-10 w-15 rounded-full" />
        </div>
        <Skeleton className="h-5 w-20" />
      </CardFooter>
    </Card>
  );
};

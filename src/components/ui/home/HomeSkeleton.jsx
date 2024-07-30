import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="flex w-full">
        <div className="w-1/4 p-4">
          <div className="border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Select Category</h2>
            <div className="space-y-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
          <Card className="w-full">
            <Skeleton className="w-full aspect-square rounded-md" />
            <CardContent className="pt-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/4" />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <Skeleton className="w-full aspect-square rounded-md" />
            <CardContent className="pt-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/4" />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <Skeleton className="w-full aspect-square rounded-md" />
            <CardContent className="pt-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/4" />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <Skeleton className="w-full aspect-square rounded-md" />
            <CardContent className="pt-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-2" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/4" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

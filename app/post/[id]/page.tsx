export default function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Post Page {id}</h1>
      {/* Контент поста */}
    </div>
  );
}

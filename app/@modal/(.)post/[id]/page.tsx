import { Modal } from "@/components/ui/modal";

export default function PostModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <div className="bg-white p-6 rounded-lg w-[600px]">
        <h2 className="text-xl font-bold mb-4">Post {id}</h2>
        {/* Добавьте контент поста */}
      </div>
    </Modal>
  );
}

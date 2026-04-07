import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-4 bg-white/65 border border-amber-200/70 rounded-2xl">
      <div className="w-16 h-16 bg-orange-100 rounded-full border border-orange-200 flex items-center justify-center">
        <MessageCircleIcon className="w-8 h-8 text-orange-600" />
      </div>
      <div>
        <h4 className="text-stone-800 font-semibold mb-1">No conversations yet</h4>
        <p className="text-stone-500 text-sm px-6">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-xl hover:bg-emerald-200 transition-colors"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;

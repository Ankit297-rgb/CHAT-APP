import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 flex items-center justify-center">
      <div className="bg-base-100 rounded-lg overflow-hidden w-[80%] max-w-[1000px] shadow-md">
        
        <div className="flex h-[75vh] md:h-[75vh] rounded-lg overflow-hidden">
          <Sidebar />
          
          <div className="flex-grow w-full">
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

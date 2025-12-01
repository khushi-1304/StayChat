import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import Omnichannel from "./components/Omnichannel";
import SmartReplies from "./components/SmartReplies";
import AISettings from "./components/AISettings";
import Analytics from "./components/Analytics";
import HotelProfiles from "./components/HotelProfiles";
import BookingIntegration from "./components/BookingIntegration";
import Notifications from "./components/Notifications";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedChat, setSelectedChat] = useState(null);
  const [aiEnabled, setAiEnabled] = useState(true);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        aiEnabled={aiEnabled}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "chat" && (
            <Chat
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          )}
          {activeTab === "omnichannel" && <Omnichannel />}
          {activeTab === "ai-settings" && (
            <AISettings aiEnabled={aiEnabled} setAiEnabled={setAiEnabled} />
          )}
          {activeTab === "smart-replies" && <SmartReplies />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "hotel-profiles" && <HotelProfiles />}
          {activeTab === "bookings" && <BookingIntegration />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "account" && <Dashboard />}
        </main>
      </div>
    </div>
  );
}

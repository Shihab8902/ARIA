"use client"

import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

interface Conversation {
    id: string,
    title: string,
    preview: string,
    timestamp: string,
    unread?: boolean
}

const ChatDrawer = () => {
    const isOpen = true;

    //Conversations
    const [conversations, setConversations] = useState<Conversation[]>([
        {
            id: "chat-1",
            title: "Space Travel Inquiry",
            preview: "Can you explain how warp drives work?",
            timestamp: "2 hours ago",
            unread: true,
        },
        {
            id: "chat-2",
            title: "AI Ethics Discussion",
            preview: "What are the ethical implications of...",
            timestamp: "Yesterday",
        },
    ])



    return <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/90 backdrop-blur-xl border-r border-slate-700/50 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'transition-x-0' : '-translate-x-full'} `}>

        <div className="h-full flex flex-col">

            {/* Heading */}
            <div className="p-4 border-b border-slate-700/50">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Conversations</h2>
                    <button className="h-9 rounded-md px-3 hover:bg-accent hover:text-accent-foreground text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 cursor-pointer">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <button className="w-full mt-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 border border-cyan-500/30 h-9 rounded-md px-3 flex  items-center gap-1 cursor-pointer justify-center">
                    <Plus className="w-4 h-4 mr-2" /> <span>New Conversation</span>
                </button>
            </div>

            {/* Chats */}
            <div className="flex-1 overflow-y-auto py-2">
                {
                    conversations.length <= 0 ? <span className="text-center  mt-20  block bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">No recent conversations!</span> :
                        <>
                            {
                                conversations?.map((conversation) => {
                                    <div key={conversation.id}>

                                    </div>
                                })
                            }
                        </>
                }
            </div>



        </div>



    </div>
}

export default ChatDrawer
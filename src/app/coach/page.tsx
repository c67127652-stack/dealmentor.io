'use client';
import { useState } from 'react';
import { Mic, Send } from 'lucide-react';

export default function Coach() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! Record a 30-sec pitch. I'll mentor you." }
  ]);
  const [recording, setRecording] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Your Deal Mentor</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-96 overflow-y-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'ai' ? 'text-left' : 'text-right'}>
              <div className={`inline-block p-3 rounded-lg ${m.role === 'ai' ? 'bg-blue-100' : 'bg-green-100'}`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setRecording(!recording)}
            className={`flex-1 py-4 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 ${recording ? 'bg-red-600' : 'bg-blue-600'}`}
          >
            <Mic className="w-5" /> {recording ? 'Stop' : 'Record Pitch'}
          </button>
          <button className="p-4 bg-gray-200 rounded-2xl"><Send className="w-5" /></button>
        </div>
      </div>
    </div>
  );
}

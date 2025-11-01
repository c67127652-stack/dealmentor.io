import { NextRequest } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  const { transcript } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a sales mentor. Analyze pitch, score 1-10, list fillers, suggest improvements.' },
      { role: 'user', content: transcript }
    ],
  });

  return Response.json({ feedback: completion.choices[0].message.content });
}

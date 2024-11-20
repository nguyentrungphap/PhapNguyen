import { 
    HarmCategory,
    GoogleGenerativeAI, 
    HarmBlockThreshold, 
} from '@google/generative-ai';
import { systemInstruction } from "@/lib/prompt";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    }
]

export function initializeModel() {

    return genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
        generationConfig: {
            temperature: 0,
            maxOutputTokens: 400
        },
        safetySettings,
        systemInstruction
    });
}
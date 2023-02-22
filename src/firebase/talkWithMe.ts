import {
    addDoc,
    collection,
    DocumentData, serverTimestamp
} from "firebase/firestore";
import { MessageTemplate } from "../types/talkWithMe";
import { firestore } from "./base/init";
import { RootCollections } from "./base/rootCollections";

const workExConverter = {
  toFirestore(data: MessageTemplate): DocumentData {
    return { ...data };
  },
};

export const writeToDB = async (obj: MessageTemplate): Promise<void> => {
  const messageRef = collection(firestore, RootCollections.TALK_WITH_ME);
  await addDoc(messageRef, { ...obj, createdAt: serverTimestamp() });
};

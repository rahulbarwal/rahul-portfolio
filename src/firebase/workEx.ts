import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { IPItem } from "../types/workEx";
import { firestore } from "./init";
import { RootCollections } from "./rootCollections";

const workExConverter = {
  toFirestore(data: IPItem): DocumentData {
    return { ...data };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): IPItem {
    const data = snapshot.data(options)!;
    return data as IPItem;
  },
};

export const getWorkExFromDB = async (): Promise<IPItem[]> => {
  const workExRef = collection(
    firestore,
    RootCollections.WORK_EX
  ).withConverter(workExConverter);
  const data = await getDocs(workExRef);
  return data.docs.map((data) => data.data());
};

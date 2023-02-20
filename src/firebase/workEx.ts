import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { app } from "./init";
import sideData from "../components/content/SideProjects/data";
import { IPItem } from "../types/workEx";
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

const firestore = getFirestore(app);
export const getWorkExToDB = async (): Promise<IPItem[]> => {
  const workExRef = collection(firestore, RootCollections.WORK_EX).withConverter(
    workExConverter
  );
  const data = await getDocs(workExRef);
  return data.docs.map((data) => data.data());
};

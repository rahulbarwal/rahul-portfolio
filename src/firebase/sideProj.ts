import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  orderBy,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { SideProjectDetails } from "../types/sideProj";
import { firestore } from "./init";
import { RootCollections } from "./rootCollections";

const workExConverter = {
  toFirestore(data: SideProjectDetails): DocumentData {
    return { ...data };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): SideProjectDetails {
    const data = snapshot.data(options)!;
    return data as SideProjectDetails;
  },
};

export const getSideProjFromDB = async (): Promise<SideProjectDetails[]> => {
  const q = query(
    collection(firestore, RootCollections.SIDE_PROJECTS).withConverter(
      workExConverter
    ),
    orderBy("displayPos")
  );
  const data = await getDocs(q);
  return data.docs.map((data) => data.data());
};

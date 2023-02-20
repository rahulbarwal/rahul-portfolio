import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
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
  const sideProjRef = collection(
    firestore,
    RootCollections.SIDE_PROJECTS
  ).withConverter(workExConverter);
  const data = await getDocs(sideProjRef);
  return data.docs.map((data) => data.data());
};
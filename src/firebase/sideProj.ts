import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { SideProjectDetails } from "../types/sideProj";
import { firestore, storage } from "./base/init";
import { RootCollections } from "./base/rootCollections";

const workExConverter = {
  toFirestore(data: SideProjectDetails): DocumentData {
    return { ...data };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): SideProjectDetails {
    const data: SideProjectDetails = snapshot.data(
      options
    )! as SideProjectDetails;
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
  return await Promise.all(
    data.docs.map(async (data) => {
      const projInfo: SideProjectDetails = data.data();
      projInfo.image = await getDownloadURL(
        ref(
          storage,
          `/public/${RootCollections.SIDE_PROJECTS}/${projInfo.image}`
        )
      );
      return projInfo;
    })
  );
};

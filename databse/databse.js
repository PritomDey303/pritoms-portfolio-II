import {db} from '@/firebase';
import {addDoc, collection, getDocs} from 'firebase/firestore';

export const getProjects = async () => {
  const projectsCollection = collection (db, 'projects');

  try {
    const querySnapshot = await getDocs (projectsCollection);

    const projects = querySnapshot.docs.map (doc => ({
      id: doc.id,
      ...doc.data (),
    }));
    return projects;
  } catch (error) {
    console.error ('Error fetching projects from Firestore:', error);
    throw error;
  }
};

export const setProject = async data => {
  try {
    const docRef = await addDoc (collection (db, 'projects'), data);
    if (docRef.id) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};

import { db, auth } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc
} from "firebase/firestore";
async function getProjects() {
  const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() }));
}
async function addProject(project) {
  return addDoc(collection(db, "projects"), {
    ...project,
    createdAt: Timestamp.now()
  });
}
async function updateProject(id, data) {
  return updateDoc(doc(db, "projects", id), data);
}
async function deleteProject(id) {
  return deleteDoc(doc(db, "projects", id));
}
async function getReviews() {
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((reviewDoc) => ({ id: reviewDoc.id, ...reviewDoc.data() }));
}
async function addReview(review) {
  return addDoc(collection(db, "reviews"), {
    ...review,
    createdAt: Timestamp.now()
  });
}
async function getTestimonials() {
  const querySnapshot = await getDocs(collection(db, "testimonials"));
  return querySnapshot.docs.map((testimonialDoc) => ({
    id: testimonialDoc.id,
    ...testimonialDoc.data()
  }));
}
async function submitContact(contact) {
  return addDoc(collection(db, "contact_submissions"), {
    ...contact,
    status: "unread",
    createdAt: Timestamp.now()
  });
}
async function getContactSubmissions() {
  const q = query(collection(db, "contact_submissions"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((contactDoc) => ({ id: contactDoc.id, ...contactDoc.data() }));
}
async function markAsRead(id) {
  return updateDoc(doc(db, "contact_submissions", id), { status: "read" });
}
export {
  addProject,
  addReview,
  auth,
  db,
  deleteProject,
  getContactSubmissions,
  getProjects,
  getReviews,
  getTestimonials,
  markAsRead,
  submitContact,
  updateProject
};

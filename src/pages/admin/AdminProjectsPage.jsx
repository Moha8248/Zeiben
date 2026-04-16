import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, addProject, updateProject, deleteProject } from "@/lib/firestore";
import { Pencil, Trash2, Plus } from "lucide-react";
const emptyProject = {
  title: "",
  category: "Web",
  description: "",
  imageUrl: ""
};
function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyProject);
  const { toast } = useToast();
  useEffect(() => {
    const projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
      setProjects(snapshot.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() })));
    });
    return () => unsubscribe();
  }, []);
  const openAddDialog = () => {
    setEditingId(null);
    setForm(emptyProject);
    setIsDialogOpen(true);
  };
  const openEditDialog = (project) => {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      category: project.category || "Web",
      description: project.description || "",
      imageUrl: project.imageUrl || ""
    });
    setIsDialogOpen(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }
    try {
      await deleteProject(id);
      toast({ title: "Project deleted successfully" });
    } catch (error) {
      toast({ title: "Failed to delete project", variant: "destructive" });
      console.error(error);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.title || !form.category || form.description.trim().length < 10) {
      toast({
        title: "Incomplete project details",
        description: "Title, category, and a description of at least 10 characters are required.",
        variant: "destructive"
      });
      return;
    }
    try {
      if (editingId) {
        await updateProject(editingId, form);
        toast({ title: "Project updated successfully" });
      } else {
        await addProject(form);
        toast({ title: "Project added successfully" });
      }
      setIsDialogOpen(false);
      setForm(emptyProject);
    } catch (error) {
      toast({ title: "Failed to save project", variant: "destructive" });
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 overflow-y-auto p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-heading font-bold", children: "Manage Projects" }),
        /* @__PURE__ */ jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { onClick: openAddDialog, children: [
            /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
            " Add Project"
          ] }) }),
          /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[600px]", children: [
            /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: editingId ? "Edit Project" : "Add New Project" }) }),
            /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Title" }),
                /* @__PURE__ */ jsx(Input, { name: "title", value: form.title, onChange: handleChange, placeholder: "Project title" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Category" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    name: "category",
                    value: form.category,
                    onChange: handleChange,
                    className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "Web", children: "Web" }),
                      /* @__PURE__ */ jsx("option", { value: "Mobile", children: "Mobile" }),
                      /* @__PURE__ */ jsx("option", { value: "Marketing", children: "Marketing" }),
                      /* @__PURE__ */ jsx("option", { value: "Content", children: "Content" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Image URL" }),
                /* @__PURE__ */ jsx(Input, { name: "imageUrl", value: form.imageUrl, onChange: handleChange, placeholder: "https://..." })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Description" }),
                /* @__PURE__ */ jsx(Textarea, { name: "description", value: form.description, onChange: handleChange, placeholder: "Project details...", className: "h-32" })
              ] }),
              /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: editingId ? "Update Project" : "Save Project" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Image" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Date" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: projects.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "py-8 text-center text-muted-foreground", children: "No projects found. Add one to get started." }) }) : projects.map((project) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: project.imageUrl ? /* @__PURE__ */ jsx("div", { className: "h-12 w-16 overflow-hidden rounded bg-muted", children: /* @__PURE__ */ jsx("img", { src: project.imageUrl, alt: project.title, className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ jsx("div", { className: "flex h-12 w-16 items-center justify-center rounded bg-muted text-xs text-muted-foreground", children: "No Img" }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: project.title }),
          /* @__PURE__ */ jsx(TableCell, { children: project.category }),
          /* @__PURE__ */ jsx(TableCell, { children: project.createdAt?.toDate ? project.createdAt.toDate().toLocaleDateString() : "" }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => openEditDialog(project), children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx(Button, { variant: "destructive", size: "icon", onClick: () => handleDelete(project.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, project.id)) })
      ] }) })
    ] })
  ] });
}
export {
  AdminProjectsPage as default
};

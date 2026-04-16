import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, markAsRead } from "@/lib/firestore";
import { CheckCircle2, MailOpen, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
function AdminContactsPage() {
  const [submissions, setSubmissions] = useState([]);
  const { toast } = useToast();
  useEffect(() => {
    const q = query(collection(db, "contact_submissions"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedSubmissions = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() })
      );
      setSubmissions(fetchedSubmissions);
    });
    return () => unsubscribe();
  }, []);
  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);
      toast({ title: "Marked" });
    } catch (error) {
      toast({ title: "Failed to update status", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 p-8 overflow-y-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-heading font-bold mb-8", children: "Contact Submissions" }),
      /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "Status" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Date" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
          /* @__PURE__ */ jsx(TableHead, { className: "max-w-[400px]", children: "Message" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: submissions.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center py-8 text-muted-foreground", children: "No contact submissions yet." }) }) : submissions.map((sub) => /* @__PURE__ */ jsxs(TableRow, { className: sub.status === "unread" ? "bg-muted/30 font-medium" : "", children: [
          /* @__PURE__ */ jsx(TableCell, { children: sub.status === "unread" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-500", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Unread" })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MailOpen, { className: "h-4 w-4" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Read" })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: sub.createdAt?.toDate ? sub.createdAt.toDate().toLocaleString() : "" }),
          /* @__PURE__ */ jsx(TableCell, { children: sub.name }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("a", { href: `mailto:${sub.email}`, className: "text-primary hover:underline", children: sub.email }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "max-w-[400px] truncate", title: sub.message, children: sub.message }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: sub.status === "unread" && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => handleMarkAsRead(sub.id),
              className: "flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                "Mark Read"
              ]
            }
          ) })
        ] }, sub.id)) })
      ] }) })
    ] })
  ] });
}
export {
  AdminContactsPage as default
};

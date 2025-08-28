import { useState } from "react";
import type { Member } from "./interface/Member.ts";
import type { Task } from "./interface/Task.ts";

export default function App() {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "Alice", role: "Dev", isActive: true },
    { id: 2, name: "Bob", role: "Designer", isActive: false },
  ]);

  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Create landing page", done: false, assignedTo: 1 },
    { id: 2, title: "Review mockup", done: true, assignedTo: 2 },
  ]);

  const [showOnlyActive, setShowOnlyActive] = useState<boolean>(true);

  const [layout, setLayout] = useState<"list" | "grid">("list");

  return <></>;
}

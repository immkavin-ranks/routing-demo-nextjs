import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div><br /><br />
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}

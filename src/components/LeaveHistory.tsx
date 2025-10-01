import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaveRecord {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  status: "approved" | "pending" | "rejected";
  days: number;
}

const leaveHistory: LeaveRecord[] = [
  {
    id: 1,
    type: "Vacation Leave",
    startDate: "2024-09-15",
    endDate: "2024-09-20",
    status: "approved",
    days: 5,
  },
  {
    id: 2,
    type: "Sick Leave",
    startDate: "2024-08-10",
    endDate: "2024-08-12",
    status: "approved",
    days: 2,
  },
  {
    id: 3,
    type: "Personal Leave",
    startDate: "2024-10-05",
    endDate: "2024-10-06",
    status: "pending",
    days: 2,
  },
];

const statusVariant = {
  approved: "default" as const,
  pending: "secondary" as const,
  rejected: "destructive" as const,
};

export const LeaveHistory = () => {
  return (
    <Card className="border-0 shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Leave History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveHistory.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="font-medium">{leave.type}</TableCell>
                  <TableCell>{leave.startDate}</TableCell>
                  <TableCell>{leave.endDate}</TableCell>
                  <TableCell>{leave.days}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[leave.status]} className="capitalize">
                      {leave.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

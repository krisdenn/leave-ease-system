import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const LeaveCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data for scheduled leaves
  const scheduledLeaves = [
    new Date(2024, 9, 5),
    new Date(2024, 9, 6),
    new Date(2024, 9, 15),
    new Date(2024, 9, 16),
  ];

  return (
    <Card className="border-0 shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Leave Calendar</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
          modifiers={{
            scheduled: scheduledLeaves,
          }}
          modifiersClassNames={{
            scheduled: "bg-primary text-primary-foreground",
          }}
        />
      </CardContent>
    </Card>
  );
};

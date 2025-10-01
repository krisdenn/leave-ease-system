import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Umbrella } from "lucide-react";

interface LeaveBalanceProps {
  type: string;
  available: number;
  total: number;
  icon: "calendar" | "clock" | "umbrella";
}

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  umbrella: Umbrella,
};

export const LeaveBalance = ({ type, available, total, icon }: LeaveBalanceProps) => {
  const Icon = iconMap[icon];
  const percentage = (available / total) * 100;

  return (
    <Card className="overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-foreground">{available}</p>
            <p className="text-sm text-muted-foreground">of {total} days</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-foreground">{type}</p>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

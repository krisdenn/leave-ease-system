import { Header } from "@/components/Header";
import { LeaveBalance } from "@/components/LeaveBalance";
import { LeaveRequestForm } from "@/components/LeaveRequestForm";
import { LeaveHistory } from "@/components/LeaveHistory";
import { LeaveCalendar } from "@/components/LeaveCalendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 space-y-8 animate-in fade-in duration-500">
        {/* Hero Section */}
        <div className="text-center space-y-2 py-6">
          <h2 className="text-4xl font-bold text-foreground">Welcome Back!</h2>
          <p className="text-muted-foreground text-lg">
            Manage your leave requests and track your time off
          </p>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LeaveBalance
            type="Vacation Leave"
            available={15}
            total={20}
            icon="umbrella"
          />
          <LeaveBalance
            type="Sick Leave"
            available={8}
            total={10}
            icon="clock"
          />
          <LeaveBalance
            type="Personal Leave"
            available={3}
            total={5}
            icon="calendar"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <LeaveRequestForm />
            <LeaveCalendar />
          </div>
          <div>
            <LeaveHistory />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

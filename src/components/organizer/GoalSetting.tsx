
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

export const GoalSetting = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Goal Setting</h2>
        <p className="text-gray-600">Set and track your development goals and milestones</p>
      </div>

      <Card className="text-center py-12">
        <CardContent>
          <Target className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Goal Setting Coming Soon</h3>
          <p className="text-gray-600">
            This feature is under development. Soon you'll be able to set and track your development goals and milestones.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

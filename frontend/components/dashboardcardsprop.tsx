interface dashboardcardprops {
  title: string;
  value: string;
}

export default function DashboardCard({
  title,
  value,
}: dashboardcardprops) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold">
        {title}
      </h2>

      <p className="text-3xl mt-3">
        {value}
      </p>
    </div>
  );
}
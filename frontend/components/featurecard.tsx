interface featurecardprops {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: featurecardprops) {
  return (
    <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
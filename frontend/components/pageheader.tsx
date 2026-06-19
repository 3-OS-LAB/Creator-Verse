interface pageheaderprops {
  title: string;
  subtitle?: string;
}

export default function pageheader({
  title,
  subtitle,
}: pageheaderprops) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-600 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
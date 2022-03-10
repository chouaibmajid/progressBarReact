import React from 'react'

function Loading() {
    const [pourcentage, setPourcentage] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      pourcentage < 100 &&
        setPourcentage(pourcentage => pourcentage + Math.floor(Math.random() * 30));
    }, 1000);
    return () => clearInterval(interval);
  }, [pourcentage]);
  return (
    <div className="space-y-10">
    <div className="mx-auto mt-12 h-5 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="h-5 rounded-full bg-green-600"
        style={{ width: pourcentage < 101 ? `${pourcentage}%` : "100%" }}
      ></div>
    </div>

    <div className="text-center text-3xl font-bold">
      Loading {pourcentage < 101 ? pourcentage : "100"} %
    </div>
    
      <div className={` text-center text-3xl ${pourcentage < 100 && "hidden"}`}>
        La page est bien chargé{" "}
      </div>
    
  </div>
  )
}
export default Loading

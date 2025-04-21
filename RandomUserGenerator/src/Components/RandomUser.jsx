import React, { useState, useEffect } from "react";
function RandomUser() {
  const [user, setUser] = useState(null);

  // Function to fetch random user
  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <p className="text-center mt-10"><img src="public\loading.svg" className="h-10 w-10 mx-auto "/>Loading user...</p>;
  }

  return (
    <div className="text-center mt-10">
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="rounded-full mx-auto w-32 h-32 border"
      />
      <h2 className="text-xl font-semibold mt-4">
        {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600">Email : {user.email}</p>
      <p className="text-gray-600">location : {user.location.country}</p>
      <p className="text-gray-600">Phone No : {user.phone}</p>
      <button
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
        onClick={fetchUser}
      >
        Get New User
      </button>
    </div>
  );
}

export default RandomUser;

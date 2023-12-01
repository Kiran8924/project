// Data.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell } from 'recharts';

function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Filter posts for user ID 1
  const filteredPosts = posts.filter((post) => post.userId === 1);

  // Data for pie chart
  const pieData = [
    { name: 'User 1', value: filteredPosts.length },
    { name: 'Other Users', value: posts.length - filteredPosts.length },
  ];

  return (
    <div>
      <h2>Data Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Pie Chart</h3>
      <PieChart width={400} height={400}>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          <Cell fill="#8884d8" />
          <Cell fill="#82ca9d" />
        </Pie>
      </PieChart>
    </div>
  );
}

export default Data;

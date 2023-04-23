import React from 'react';
import "./view.css"
const data = [
  {
    id: 1,
    chronicle: 'The Hobbit',
    web: 'http://www.thehobbit.com',
    date: '1937-09-21',
    labels: ['Fantasy', 'Adventure'],
    tags: ['Tolkien', 'Middle-earth'],
  },
  {
    id: 2,
    chronicle: 'Harry Potter and the Philosopher\'s Stone',
    web: 'http://www.harrypotter.com',
    date: '1997-06-26',
    labels: ['Fantasy', 'Young adult'],
    tags: ['Rowling', 'Hogwarts'],
  },
  {
    id: 3,
    chronicle: 'The Lord of the Rings',
    web: 'http://www.lordoftherings.com',
    date: '1954-07-29',
    labels: ['Fantasy', 'Adventure'],
    tags: ['Tolkien', 'Middle-earth'],
  },
  {
    id: 1,
    chronicle: 'The Hobbit',
    web: 'http://www.thehobbit.com',
    date: '1937-09-21',
    labels: ['Fantasy', 'Adventure'],
    tags: ['Tolkien', 'Middle-earth'],
  },
  {
    id: 2,
    chronicle: 'Harry Potter and the Philosopher\'s Stone',
    web: 'http://www.harrypotter.com',
    date: '1997-06-26',
    labels: ['Fantasy', 'Young adult'],
    tags: ['Rowling', 'Hogwarts'],
  },
  {
    id: 3,
    chronicle: 'The Lord of the Rings',
    web: 'http://www.lordoftherings.com',
    date: '1954-07-29',
    labels: ['Fantasy', 'Adventure'],
    tags: ['Tolkien', 'Middle-earth'],
  },
];

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Chronicle</th>
          <th>Web Address</th>
          <th>Date</th>
          <th>Labels</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.chronicle}</td>
            <td><a href={`${item.web}`}>{item.web}</a></td>
            <td>{item.date}</td>
            <td>{item.labels}</td>
            <td>{item.tags}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

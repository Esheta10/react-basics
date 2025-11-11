import React from "react";

function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <table>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Vishwas</td>
        </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Columns;

export default (pages) => `
  <h2>Searched on Wikipedia:</h2>
  <ul class="list-group">
    ${pages.map(
      ({ title, text }) => `
        <li class="list-group-item">
          <h4>${title}</h4>
          <p>${text}</p>
        </li>
      `
    ).join('')}
  </ul>
`;

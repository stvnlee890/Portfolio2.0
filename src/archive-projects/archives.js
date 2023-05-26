const archivedProjects = [
  {
    name: "project 1",
    link: "github link",
    liveSite: 'live site'
  },
  {
    name: 'project 2',
    link: "github link",
    liveSite: 'live site'
  },
];

const archivesListContainer = document.querySelector(
  ".archives-list-container"
);

const columnsNums = Object.keys(archivedProjects[0]).length
const rowNums = archivedProjects.length
archivesListContainer.style.gridTemplateColumns = `repeat(${columnsNums}, 1fr)`
archivesListContainer.style.gridTemplateRows = `repeat(${rowNums}, 1fr)`

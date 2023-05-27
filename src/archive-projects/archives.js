const archivedProjects = [
  {
    name: "project 1",
    link: "github",
    liveSite: 'live site'
  },
  {
    name: 'project 2',
    link: "github",
    liveSite: 'live site'
  },
];

const archivesListContainer = document.querySelector(
  ".archives-list-container"
);


const ul = document.createElement('ul')
ul.className = "list-wrapper"

const columnsNums = Object.keys(archivedProjects[0]).length
const rowNums = archivedProjects.length
// ul.style.gridTemplateColumns = `repeat(${columnsNums}, 1fr)`
ul.style.gridTemplateColumns = `1fr .2fr .2fr`
ul.style.gridTemplateRows = `repeat(${rowNums}, 1fr)`

archivedProjects.forEach((ele, index) => {
  const nameLi = document.createElement("li")
  nameLi.className = "archive-projects"
  nameLi.style.gridRowStart = `${index + 1}`
  nameLi.innerText = ele.name
  ul.append(nameLi)

  const linkLi = document.createElement('li')
  linkLi.className = "archive-links"
  linkLi.style.gridColumnStart = '2'
  linkLi.innerText = ele.link
  ul.append(linkLi)
  
  const liveLi = document.createElement('li')
  liveLi.className = 'archive-live-site'
  liveLi.style.gridColumnStart = '3'
  liveLi.innerText = ele.liveSite
  ul.append(liveLi)
})

archivesListContainer.append(ul)
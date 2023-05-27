import { archivedProjects } from "./archivesList";

const descriptors = [
  "year", "title", "built-with", "links"
]

const archivesListContainer = document.querySelector(
  ".archives-list-container"
);

const ul = document.createElement('ul')
ul.className = "list-wrapper"

const columnsNums = Object.keys(archivedProjects[0]).length
const rowNums = archivedProjects.length

/*
Create sizes for grid
*/
ul.style.gridTemplateColumns = `.2fr .5fr .5fr .2fr .2fr`
ul.style.gridTemplateRows = `repeat(${rowNums}, 1fr)`

/*
Assign the categories to each column
*/
descriptors.forEach((ele, index) => {
  const descLi = document.createElement("li")
  descLi.className = "archive-descriptors"
  descLi.style.gridColumnStart = `${index + 1}`
  descLi.innerText = ele
  ul.append(descLi)
})

/*
Assign the values inside archiveProjects array to each grid dynamically.
Now this is set up, I don't need to worry about styling whenever 
adding new archived projects
*/
archivedProjects.forEach((ele, index) => {
  const yearLi = document.createElement("li")
  yearLi.className = "archive-year"
  yearLi.style.gridRowStart = `${index + 2}`
  yearLi.innerText = ele.year
  ul.append(yearLi)

  const nameLi = document.createElement("li")
  nameLi.className = "archive-projects"
  nameLi.style.gridRowStart = `${index + 2}`
  nameLi.innerText = ele.name
  ul.append(nameLi)

  const builtLi = document.createElement('li')
  builtLi.className = "archive-built-with"
  builtLi.style.gridColumnStart = '3'
  builtLi.style.gridRowStart = `${index + 2}`
  builtLi.innerText = ele.builtWith
  ul.append(builtLi)

  const linksA = document.createElement('a')
  linksA.href = ele.link
  linksA.target = "_blank"
  linksA.innerText = "github"

  const linkLi = document.createElement('li')
  linkLi.className = "archive-links"
  linkLi.style.gridRowStart = `${index + 2}`
  linkLi.style.gridColumnStart = '4'
  linkLi.append(linksA)
  ul.append(linkLi)

  const liveA = document.createElement('a')
  liveA.href = ele.liveSite
  liveA.target = "_blank"
  liveA.innerText = 'live site'
  
  const liveLi = document.createElement('li')
  liveLi.className = 'archive-live-site'
  liveLi.style.gridRowStart = `${index + 2}`
  liveLi.style.gridColumnStart = '5'
  liveLi.append(liveA)
  ul.append(liveLi)
})

archivesListContainer.append(ul)
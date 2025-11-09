const game = {
    name: "Snortleblat",
    image: 'snortleblat.webp',
    sections:[
        {class: 'Class:', className: 'Swamp Beast Diplomat'},
        {level: 'Level:', levelNum: 5},
        {health: 'Health:', healthNum: 100}
    ]
};


function sectionTemplate(section) {
    const keys = Object.keys(section);  // first key-value pair
    const values = Object.values(section); // second key-value pair
    return `
        <p><strong>${values[0]}</strong>  ${values[1]}</p>
    `
}

function renderGame() {
    const html = game.sections.map(sectionTemplate).join('');
    document.getElementById('sections').innerHTML = html;
    }
renderGame();
document.getElementById('attacked').addEventListener('click', () =>{
    const healthSection = game.sections.find(s => s.health);
    if (healthSection.healthNum > 0){
        healthSection.healthNum -= 10;
        renderGame();
        }
    else{
        alert('Character died');
        location.reload();
    }
    });

document.getElementById('levelUp').addEventListener('click', () =>{
    const levelSection = game.sections.find(s => s.level);
    levelSection.levelNum += 1;
    renderGame();
    });


const html = game.sections.map(sectionTemplate).join('');

document.getElementById('sections').innerHTML = html;

document.querySelector('.name').textContent = game.name;

const img = document.querySelector('.image');
img.setAttribute('src', game.image);
img.setAttribute('alt','snortleblat in a swamp');
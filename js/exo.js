// etape 1
// modifier le chemin <script src="exo.js"></script> => <script src="../js/exo.js"></script>

// etape 2
const user = {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    }
base.fillProfil(user)

// etape 3
let friendTab = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire']
base.printFriends(friendTab)
base.setBestFriend(friendTab[0])

// etape 4
var title = document.createElement('h1')
title.classList.add('banner__title')
title.textContent = 'Vous consultez le profil de Hercule'
let targetHeaderBanner = document.querySelector('#header-banner')
targetHeaderBanner.append(title)

// etape 5
for (let i = 0; i <= 11; i++) {
    base.displayWork(i)
}

// etape 6
var target = document.querySelector('#availability')
var time = base.getHour()
if (time >= 8 && time <= 20) {
    target.classList.remove('off')
    target.textContent = 'disponible';
} else {
    target.classList.add('off')
    target.textContent = 'Non disponible';
}

// etape 7
// function flécher
const pseudo = (name, code) => {
    return `${name}-du-${code}`
}
const targetProfilName = document.querySelector('#profil-name')
const result = pseudo(user.name, user.department)
targetProfilName.textContent = result

// etape 8
const targetMenuToggler = document.querySelector('#menu-toggler')
//targetHeaderBanner = document.querySelector('#header-banner')
targetMenuToggler.addEventListener('click', function(){
    targetHeaderBanner.classList.toggle('banner--open')
})

// etape 9
const targetContact = document.querySelector('#contact')
targetContact.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Hercule ne souhaite pas être dérangé')
})

// etape 10
//valeurRelative / valeurTotale * 100
const popHercule = Math.floor(( base.vote.hercule / ( base.vote.hercule+base.vote.cesar ) * 100 ))
const popCesar = Math.floor(( base.vote.cesar / ( base.vote.hercule+base.vote.cesar ) * 100 ))

const targetTrendsHercule = document.querySelector('#trends-hercule')
targetTrendsHercule.childNodes[3].textContent = `${popHercule}%`
targetTrendsHercule.childNodes[5].style = `width: ${popHercule}%`

const targetTrendsCesear = document.querySelector('#trends-cesar')
targetTrendsCesear.childNodes[3].textContent = `${popCesar}%`
targetTrendsCesear.childNodes[5].style = `width: ${popCesar}%`

// etape 11
// voir bonus.js

// etape 12
const targetActivities = document.querySelector('#activities');
targetActivities.style = 'display: block';
base.activities.forEach(task => {
    if(task.finished && task.author === 'Hercule') {
        const li = document.createElement('li')
        li.textContent = `${task.title}`
        targetActivities.childNodes[3].append(li)
    }
});





// etape 2
const user = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
}

base.fillProfil(user);

// etape 3
const friendTab = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
base.printFriends(friendTab);
base.setBestFriend(friendTab[0]);

// etape 4
const title = document.createElement('h1');
title.classList.add('banner__title');
title.textContent = 'Vous consultez le profil de Hercule';
const targetHeaderBanner = document.querySelector('#header-banner');
targetHeaderBanner.append(title)

// etape 5
for (let i = 0; i < 12; i++) {
    base.displayWork(i)
}

// etape 6
// base.getHour()
const actualHour = new Date().getHours();
const targetAvailability = document.querySelector('#availability');

if ( base.getHour() >= 8  &&  base.getHour() <= 20) {
    targetAvailability.textContent = 'Disponible'
    targetAvailability.classList.remove('off')
} else {
    targetAvailability.textContent = 'Non Disponible'
    targetAvailability.classList.add('off')
}

// etape 7
function maFunction(str, nb) {
    return `${str}-du-${nb}`
}
const result = maFunction(user.name, user.department);

const targetProfilName = document.querySelector('#profil-name');
targetProfilName.textContent = result;

// etape 8
const targetMenuToggler = document.querySelector('#menu-toggler');

targetMenuToggler.addEventListener('click', function(event){
    console.log('je suis cliqué');
});
let app = {
    user : {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },
    friends : ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],

    addProfilInfo: () => {
        base.fillProfil(app.user)
    },
    displayFriends: () => {
        base.printFriends(app.friends)
        base.setBestFriend(app.friends[0])
    },
    displayTitle: () => {
        var title = document.createElement('h1')
        title.classList.add('banner__title')
        title.textContent = 'Vous consultez le profil de Hercule'
        const targetHeaderBanner = document.querySelector('#header-banner')
        targetHeaderBanner.append(title)
    },
    displayRaces: () => {
        for (let i = 0; i <= 11; i++) {
            base.displayWork(i)
        }
    },
    displayAvailability: () => {
        var target = document.querySelector('#availability')
        var time = base.getHour()
        if (time >= 8 && time <= 20) {
            target.classList.remove('off')
            target.textContent = 'disponible'
        } else {
            target.classList.add('off')
            target.textContent = 'Non disponible'
        }
    },
    displayProfilName: () => {
        const pseudo = (name, code) => {
            return `${name}-du-${code}`
        }
        const targetProfilName = document.querySelector('#profil-name')
        const result = pseudo(app.user.name, app.user.department)
        targetProfilName.textContent = result
    },
    addMenuAnimation: () => {
        const targetMenuToggler = document.querySelector('#menu-toggler')
        const targetHeaderBanner = document.querySelector('#header-banner')
        targetMenuToggler.addEventListener('click', function(){
            targetHeaderBanner.classList.toggle('banner--open')
        })
    },
    addPreventDefault: () => {
        const targetContact = document.querySelector('#contact')
        targetContact.addEventListener('submit', function(event){
            event.preventDefault()
            alert('Hercule ne souhaite pas être dérangé')
        })
    },
    averagePopularity: (segment, total) => {
        return Math.floor( segment / total * 100 )
    },
    displayPopularity: () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const popularityTab = Object.values(base.vote);
        const total = popularityTab.reduce(reducer)
        const targetArticles = document.querySelectorAll('.trends article')
        for (let i = 0; i < targetArticles.length; i++) {
            const taux = app.averagePopularity( popularityTab[i], total )
            targetArticles[i].childNodes[3].textContent = `${ taux }%`;
            targetArticles[i].childNodes[5].style = `width: ${ taux }%`;
        }
        
        /*
        const popHercule = app.averagePopularity(base.vote.hercule, base.vote.cesar)
        const popCesar = app.averagePopularity( base.vote.cesar, base.vote.hercule)
        const targetTrendsHercule = document.querySelector('#trends-hercule')
        targetTrendsHercule.childNodes[3].textContent = `${popHercule}%`
        targetTrendsHercule.childNodes[5].style = `width: ${popHercule}%`
        const targetTrendsCesear = document.querySelector('#trends-cesar')
        targetTrendsCesear.childNodes[3].textContent = `${popCesar}%`
        targetTrendsCesear.childNodes[5].style = `width: ${popCesar}%`
        */
    },
    displayActivity: () => {
        const targetActivities = document.querySelector('#activities');
        targetActivities.style = 'display: block';
        base.activities.forEach(task => {
            if(task.finished && task.author === 'Hercule') {
                const li = document.createElement('li')
                li.textContent = `${task.title}`
                targetActivities.childNodes[3].append(li)
            }
        });
    },


    init: () => {
        app.addProfilInfo()
        app.displayFriends()
        app.displayTitle()
        app.displayRaces()
        app.displayAvailability()
        app.displayProfilName()
        app.addMenuAnimation()
        app.addPreventDefault()
        app.displayPopularity()
        app.displayActivity()
    }
}

document.addEventListener('DOMContentLoaded', app.init);
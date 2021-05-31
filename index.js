// Items (teams) of the list
const teams = [
    {
        id: 1,
        logo: 'italy.png',
        country: 'Italy',
        cups: 1,
        group: 'A',
        desc: "The blow of not playing the 2018 World Cup in Russia changed Italy. Mancini has given stripes to Chiesa, Barella, Locatelli, Sensi... who together with classics like Insigne, Bonucci, Chiellini or Verratti have shaped a new 'azzurra' who wants the ball more and who has been 25 games without losing."
    },
    {
        id: 2,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/sui.png',
        country: 'Switzerland',
        cups: 0,
        group: 'A',
        desc: "The Swiss team repeats regarding Euro 2016 with their generation at the perfect age. Xhaka, Shaqiri, Ricardo Rodríguez... are in their thirties and are already loaded with experience. They have played the last four World Cups and the four finals of the last Nations League. They are in the elite."
    },
    {
        id: 3,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/tur.png',
        country: 'Turkey',
        cups: 0,
        group: 'A',
        desc: "Senol Günes' young team is being one of the sensations of qualifying for the 2022 World Cup (they lead their group ahead of the Netherlands and Norway of Haaland and Odegaard) and repeat in a European Championship after falling in the group stage in France 2016. They always compete."
    },
    {
        id: 4,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/gal.png',
        country: 'Wales',
        cups: 0,
        group: 'A',
        desc: "Wales will play their second consecutive European Championship amid the transition from the 2016 semi-finalists to the new generation. The young Rodon, Ampadu, James... are looking to replace Ashley Williams, Allen, Ledley... A complicated task that has not prevented them from qualifying for the final phase."
    },
    {
        id: 5,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/bel.png',
        country: 'Belgium',
        cups: 0,
        group: 'B',
        desc: "The 'red devils' disappointed by falling in the quarterfinals of Euro 2016 with Marc Wilmots, but they made up for it by conquering third place in the 2018 World Cup with Roberto Martínez. Belgium has a 'golden generation' (De Bruyne, Hazard, Lukaku...) that has been installed at number 1 in the 'FIFA ranking' for years. The million dollar question is: can they ratify that leadership with a title?"
    },
    {
        id: 6,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/din.png',
        country: 'Denmark',
        cups: 1,
        group: 'B',
        desc: "Denmark is an 'uncomfortable' team. In defense it is a 'rock', especially by high. The Kjaer-Christensen duo must be accompanied by Kasper Schmeichel in goal. The double pivot is 'indefatigable': Hojbjerg-Delaney. From three quarters of the field it has good wickers (Eriksen, Braithwaite, Poulsen, Dolberg...), but it lacks mechanisms when it comes to forming a team and reaching a goal."
    },
    {
        id: 7,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/fin.png',
        country: 'Finland',
        cups: 0,
        group: 'B',
        desc: "Football is beginning to make its way in a country dominated by ice hockey, skiing, rallying and Formula 1. The 'royal owls', who stand out for their defensive strength, will play a major tournament for the first time in their history. The 'backbone' (Hradecky, Toivio, Sparv, Pukki...) is known by heart."
    },
    {
        id: 8,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/rus.png',
        country: 'Russia',
        cups: 1,
        group: 'B',
        desc: "The hostess was one of the favorites to fall for the first change in 'their' World Cup. However, they eliminated Spain and lost in the quarterfinals, on penalties, to Croatia. With Cherchesov they have achieved stability. They will play their fifth consecutive European Championship after a great qualifying phase: they won eight of the 10 games they played."
    },
    {
        id: 9,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/aus.png',
        country: 'Austria',
        cups: 0,
        group: 'C',
        desc: "They got a pass to this European Championship after finishing Group G as second in the group with six wins, one draw and three losses. Going from the group stage at this European Championship would already be a real success."
    },
    {
        id: 10,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/pab.png',
        country: 'Netherlands',
        cups: 1,
        group: 'C',
        desc: "They were neither at the 2018 World Cup nor at Euro 2016. The rebuilding process started by Koeman and followed by Frank de Boer is already bearing fruit. Their second place in the Nations League is an example of what they can do in this European Championship."
    },
    {
        id: 11,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/mac.png',
        country: 'North Macedonia',
        cups: 0,
        group: 'C',
        desc: "North Macedonia made history by qualifying for the finals of a European Championship for the first time. They needed the playoffs and, after killing Georgia, they managed to get into this Group C. They will try to make things difficult, but they have earned the right to have fun."
    },
    {
        id: 12,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ucr.png',
        country: 'Ukraine',
        cups: 0,
        group: 'C',
        desc: "They closed their ticket after signing a brilliant tie, finishing first in the group ahead of Portugal and leaving only four points out of a possible 24. In this European Championship they want a minimum of eighths... and they dream."
    },
    {
        id: 13,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/cro.png',
        country: 'Croatia',
        cups: 0,
        group: 'D',
        desc: "Croatia returns to a great tournament after working the 'miracle' of reaching the final, lost, of the 2018 World Cup in Russia. They do not have it easy, because the heavyweights that remain are three years older. But the Croatian youth academy always breeds players and their competitive spirit has already been shown on many occasions."
    },
    {
        id: 14,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/rch.png',
        country: 'Czech Republic',
        cups: 1,
        group: 'D',
        desc: "Czech football tries to rise little by little with the base of the brave Slavia Prague and with well-placed players in Europe: Soucek (West Ham); Darida (Hertha); Jankto (Samp)... They usually play with two pivots (Holes -Soucek); line three ahead; and Schick above. Passing the first group stage is the goal."
    },
    {
        id: 15,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ing.png',
        country: 'England',
        cups: 0,
        group: 'D',
        desc: "It was already a surprise in the World Cup (fourth), although not even for that reason they are among the favorites in this Euro. And they shouldn't be discounted at all. They have a solid spine (Pickford-Maguire-Henderson-Kane) and young people of great value (Foden, Sancho, Mount, Rice...). Sterling must raise her level, yes."
    },
    {
        id: 16,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/esc.png',
        country: 'Scotland',
        cups: 0,
        group: 'D',
        desc: "It was 23 years since we had Scotland among the elite. Level players have emerged lately (Robertson, Tierney, McTominay...), but no stars. Solid and tough team, as was their coach as a player. They have a great left wing with the aforementioned Robertson ('Pool') and Tierney (Arsenal)."
    },
    {
        id: 17,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/pol.png',
        country: 'Poland',
        cups: 0,
        group: 'E',
        desc: "This generation seemed the one chosen to approach the deeds of the late 70s and early 80s, those of the Boniek, Lato, Zmuda, Deyna... But they missed the mark on penalties in 2016 and crashed in 2018 Poland must show in this Euro a mental fortitude that until now it has not had."
    },
    {
        id: 18,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/esl.PNG',
        country: 'Slovakia',
        cups: 0,
        group: 'E',
        desc: "Repeat Eurocup after being released four years ago. He comes through the 2018 Nations League play-off after beating Northern Ireland in Belfast. They start as the weakest team in the group, but in the March window they showed their nails by defeating Russia at home. The pressure for the Slovaks will be less than for the rest."
    },
    {
        id: 19,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/esp.png',
        country: 'Spain',
        cups: 3,
        group: 'E',
        desc: "The Euro arrives with the feeling that it can stand up to anyone, but also the opposite. Luis Enrique has assembled a very competitive team, with a clear idea of a high pressure and vertical game. He has not found the key to a goalkeeper who commands clearly and the goal is a recurring debate in a selection without a killer."
    },
    {
        id: 20,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/sue.png',
        country: 'Sweden',
        cups: 0,
        group: 'E',
        desc: "Present in the previous five European Cups, only in 2004 - that of the \"pact\" with Denmark to overthrow Italy - passed the group stage. They make their debut against Spain, which will mark their step. They have the block as their greatest strength, but they have talents that can allow them to make that leap: Forsberg, Isak, Kulusevksi and, of course, Ibrahimovic."
    },
    {
        id: 21,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/fra.png',
        country: 'France',
        cups: 2,
        group: 'F',
        desc: "It is the great favorite in the bets, by quality, by physique and by the block. They want to take revenge with Portugal in the 2016 final. The pressure of being forced to win may be their main enemy. As if that were not enough, Deschamps 'has made peace' and has recovered Benzema."
    },
    {
        id: 22,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ale.png',
        country: 'Germany',
        cups: 3,
        group: 'F',
        desc: "Germany is going through the same process as the Spanish team after winning absolutely everything. Now it is a team under construction, with a lot of talent, but one that is not reliable when it comes to competing. Among the candidates to go far, but without being a favorite to win the title."
    },
    {
        id: 23,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/hun.png',
        country: 'Hungary',
        cups: 0,
        group: 'F',
        desc: "It entered the Eurocup as a miracle at the last minute, thanks to an agonizing comeback in the play-off against Iceland, scoring at 88 'and 92'. Second participation in a Euro in a row to play in the toughest group of all. Of course, it will play at home the first two games against Portugal and France."
    },
    {
        id: 24,
        logo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/por.png',
        country: 'Portugal',
        cups: 1,
        group: 'F',
        desc: "The current champions have fallen in the toughest group, with Germany and France, so they will have to sweat the classification. If in France 2016 they stood out for their defensive strength, they come to this Euro with a more creative team, with Bruno Fernandes, Joao Félix and Bernardo Silva as keys to change."
    }
];


// Variables
const blockOfItems = document.getElementById('block-items');
const divBtns = document.querySelector('.filter-buttons');


// Show items (teams)
function displayItems(arr) {
    const allTeams = arr.map(team => {
        return `<article class="menu-item">
                <img src="${team.logo}" alt="${team.country} team logo" class="image-team" />
                <header class="title-item">
                    <h2 class="team-name">${team.country}</h2>
                    <span class="trophy-icon"><i class="fas fa-trophy"></i> ${team.cups}</span>
                </header>
                <p class="text-item">${team.desc}</p>
            </article>`;
    }).join(' ');
    blockOfItems.innerHTML = allTeams;
}

// Show filter buttons
function displayBtns() {
    // Show buttons dinamically
    let categories = teams.reduce((prev, current) => {
        if (!prev.includes(current.group)) {
            prev.push(current.group);
        }

        return prev;
    }, [])
        .map(category => {
            return `<button type="button" class="btn" data-id="${category}">group ${category}</button>`;
        });
    
    categories.unshift('<button type="button" class="btn btn-f" data-id="all">alphabetical</button>', '<button type="button" class="btn btn-f" data-id="cups">cups</button>');
    
    divBtns.innerHTML = categories.join(' ');


    // Settings of event buttons
    const btns = document.querySelectorAll('.btn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.dataset.id;

            const filteredTeams = teams.filter(item => item.group === category);

            if (category === 'all') {
                displayItems(teams.sort((t1, t2) => t1.country < t2.country ? -1 : 1));
            } else if (category === 'cups') {
                displayItems(teams.sort((t1, t2) => t2.cups - t1.cups));
            } else {
                displayItems(filteredTeams);
            }
        })
    })
}


// Load all the DOM needed
window.addEventListener('DOMContentLoaded', function () {
    displayBtns();
    displayItems(teams.sort((t1, t2) => t1.country < t2.country ? -1 : 1));
})
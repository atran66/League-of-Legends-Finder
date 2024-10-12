document.addEventListener("DOMContentLoaded", function() {
    const champions = [
        {
            "name": "Ahri",
            "role": "Mage",
            "image": "images/ahri.jpg",
            "health": 526,
            "mana": 418,
            "abilities": ["Orb of Deception", "Fox-Fire", "Charm", "Spirit Rush"]
        },
        {
            "name": "Garen",
            "role": "Tank",
            "image": "images/garen.jpg",
            "health": 620,
            "abilities": ["Decisive Strike", "Courage", "Judgment", "Demacian Justice"]
        },
        {
            "name": "Zed",
            "role": "Assassin",
            "image": "images/zed.jpg",
            "health": 579,
            "abilities": ["Razor Shuriken", "Living Shadow", "Shadow Slash", "Death Mark"]
        },
        {
            "name": "Jinx",
            "role": "Marksman",
            "image": "images/jinx.jpg",
            "health": 560,
            "abilities": ["Switcheroo!", "Zap!", "Flame Chompers!", "Super Mega Death Rocket!"]
        },
        {
            "name": "Lux",
            "role": "Mage",
            "image": "images/lux.jpg",
            "health": 490,
            "abilities": ["Light Binding", "Prismatic Barrier", "Lucent Singularity", "Final Spark"]
        },
        {
            "name": "Darius",
            "role": "Fighter",
            "image": "images/darius.jpg",
            "health": 582,
            "abilities": ["Decimate", "Crippling Strike", "Apprehend", "Noxian Guillotine"]
        },
        {
            "name": "Leona",
            "role": "Tank",
            "image": "images/leona.jpg",
            "health": 576,
            "abilities": ["Shield of Daybreak", "Eclipse", "Zenith Blade", "Solar Flare"]
        },
        {
            "name": "Ezreal",
            "role": "Marksman",
            "image": "images/ezreal.jpg",
            "health": 500,
            "abilities": ["Mystic Shot", "Essence Flux", "Arcane Shift", "Trueshot Barrage"]
        }
    ];

    // Use the existing logic to display this static data
    const resultsContainer = document.getElementById("results");
    const searchBar = document.getElementById("search-bar");
    const roleFilter = document.getElementById("role-filter");

    function displayChampions(filteredChampions) {
        resultsContainer.innerHTML = "";
        filteredChampions.forEach(champion => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = champion.image;
            img.alt = champion.name;

            const name = document.createElement("h3");
            name.textContent = champion.name;

            const role = document.createElement("p");
            role.textContent = `Role: ${champion.role}`;

            const health = document.createElement("p");
            health.textContent = `Health: ${champion.health}`;

            const mana = document.createElement("p");
            mana.textContent = `Mana: ${champion.mana}`;


            const abilities = document.createElement("ul");
            abilities.textContent = "Abilities:";
            champion.abilities.forEach(ability => {
                const abilityItem = document.createElement("li");
                abilityItem.textContent = ability;
                abilities.appendChild(abilityItem);
            });

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(health);
            card.appendChild(mana);
            card.appendChild(abilities);
            

            resultsContainer.appendChild(card);
        });
    }

    function filterChampions() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedRole = roleFilter.value;

        const filteredChampions = champions.filter(champion => {
            const matchesName = champion.name.toLowerCase().includes(searchTerm);
            const matchesRole = selectedRole === "All" || champion.role === selectedRole;
            return matchesName && matchesRole;
        });

        filteredChampions.sort((a, b) => a.name.localeCompare(b.name));

        displayChampions(filteredChampions);
    }

    searchBar.addEventListener("input", filterChampions);
    roleFilter.addEventListener("change", filterChampions);

    filterChampions(); // Initial display of all champions
});
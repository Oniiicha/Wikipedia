window.addEventListener("load", () => {
    document.body.classList.remove("fade-out");
    document.body.classList.add("loaded");
});
const artists = {
    pepel: {
        name: "Pepel Nahudi",
        img: "img1.jpg",
        text: `
        Pepel Nahudi — один из самых узнаваемых артистов новой волны русского андеграунда.
        Его музыка строится на атмосфере одиночества, внутренней боли и искренних переживаниях.
        
        Он выделяется тем, что не пытается звучать «коммерчески правильно» — наоборот,
        его треки часто звучат сыро, интимно и максимально честно. Это создает ощущение,
        будто ты слушаешь не просто музыку, а чьи-то личные записи.

        В его звучании сочетаются элементы cloud rap, emo и lo-fi эстетики.
        Многие слушатели отмечают, что его музыка особенно сильно ощущается ночью,
        когда ты остаешься один со своими мыслями.

        Основная тема творчества — чувства, потерянность, любовь и внутренние конфликты.
        За счет этого у него формируется очень лояльная аудитория, которая реально
        «живет» его музыкой, а не просто слушает её фоном.
        `,
        listen: "https://music.yandex.ru/artist/8262943",
        tg: "https://t.me/pepelnahudiAB",
        yt: "https://www.youtube.com/@pepelnahudi4120",

        albums: [
            {
                title: "GARGONNA MUSIC",
                year: "2025",
                cover: "https://avatars.yandex.net/get-music-content/15142616/ae3c788a.a.37119968-1/m1000x1000"
            },
            {
                title: "AUTUMN BLUES",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/13529784/668ca210.a.33625674-1/m1000x1000"
            },
            {
                title: "PSYCHEDELIC LOVE",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/14662984/d001713c.a.30437892-2/m1000x1000"
            },
            {
                title: "KINGDOM MADE",
                year: "2023",
                cover: "https://avatars.yandex.net/get-music-content/10930741/2878a22d.a.27646090-1/m1000x1000"
            }
        ]
    },

    buda: {
        name: "OG Buda",
        img: "img2.jpg",
        text: `
        OG Buda — один из главных артистов новой школы русского рэпа,
        который смог выйти из андеграунда в мейнстрим, не потеряв свой стиль.

        Его музыка сочетает в себе мелодичность, автотюн и запоминающийся вайб.
        Он часто делает треки, которые легко заходят широкой аудитории,
        но при этом сохраняют характер и узнаваемость.

        В текстах часто присутствуют темы успеха, улицы, личного пути и отношений.
        OG Buda умеет балансировать между коммерческим звучанием и уличной эстетикой,
        благодаря чему его слушают как массовые слушатели, так и фанаты сцены.

        Он активно сотрудничает с другими артистами и формирует вокруг себя
        целую экосистему новой школы.`,
        listen: "https://music.yandex.ru/artist/5880813",
        tg: "https://t.me/budaog",
        yt: "https://www.youtube.com/@OGBUDA",

        albums: [
            {
                title: "Скучаю, Но Ещё Работаю",
                year: "2025",
                cover: "https://avatars.yandex.net/get-music-content/16450533/92e8feec.a.39393015-1/m1000x1000"
            },
            {
                title: "FREERIO 3",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/9837520/b8f4f78c.a.33611143-3/m1000x1000"
            },
            {
                title: "POX VAWË",
                year: "2023",
                cover: "https://avatars.yandex.net/get-music-content/18132539/9b1a4fc4.a.28498420-2/m1000x1000"
            },
            {
                title: "FREERIO",
                year: "2021",
                cover: "https://avatars.yandex.net/get-music-content/18172800/0b49f797.a.15237030-10/m1000x1000"
            }
        ]
    },

    thug: {
        name: "Friendly Thug 52 NGG",
        img: "img3.jpg",
        text: `
        Friendly Thug 52 NGG — представитель более жесткой и уличной стороны
        современной рэп-сцены.

        Его стиль отличается агрессией, прямолинейностью и сырой энергетикой.
        В треках чувствуется влияние классического трэпа и уличной культуры.

        Основной акцент делается не на мелодии, а на подаче, флоу и настроении.
        Его музыка часто звучит как манифест — без фильтров и попыток понравиться всем.

        Он создает образ артиста, который говорит то, что думает,
        и не подстраивается под тренды, а идет своим путем.

        Благодаря этому у него формируется сильная аудитория,
        которая ценит именно эту «настоящесть».`,
        listen: "https://music.yandex.ru/artist/12666124",
        tg: "https://t.me/softestbed",
        yt: "https://www.youtube.com/@FRIENDLYTHUG52NGG.",

        albums: [
            {
                title: "Graf Monte-Cristo / Most Valuable Pirate",
                year: "2025",
                cover: "https://avatars.yandex.net/get-music-content/14247687/0f717849.a.36376575-2/m1000x1000"
            },
            {
                title: "Cristoforo Colombo",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/17655650/fe410a6f.a.28026987-4/m1000x1000"
            },
        ]
    },

    kai: {
        name: "Kai Angel",
        img: "img4.jpg",
        text: `
        Kai Angel — артист с ярко выраженной эмоциональной и меланхоличной эстетикой.

        Его музыка часто погружает в состояние размышлений, грусти и внутреннего диалога.
        Он делает акцент на атмосфере и чувствах, а не на агрессии или скорости.

        В его треках можно услышать влияние cloud rap и альтернативной сцены.
        Звучание часто минималистичное, но за счет этого еще более глубокое.

        Основные темы — любовь, одиночество, поиск себя и внутренние переживания.
        Многие слушатели находят в его музыке отражение своих состояний.

        Это делает его артистом «для настроения», а не просто для плейлиста.`,
        listen: "https://music.yandex.ru/artist/16509384",
        tg: "https://t.me/sektakai",
        yt: "https://www.youtube.com/@kaixxxngel",

        albums: [
            {
                title: "damage",
                year: "2025",
                cover: "https://avatars.yandex.net/get-music-content/14854709/2ddaad79.a.38089920-1/m1000x1000"
            },
            {
                title: "Heavy Metal 2",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/14183125/b8b9eecf.a.33207179-1/m1000x1000"
            },
        ]
    },

    toxi: {
        name: "Toxi$",
        img: "img5.jpg",
        text: `
        Toxi$ — один из самых экспериментальных артистов новой школы.

        Его стиль сложно загнать в рамки: он сочетает разные звучания,
        играет с битами, голосом и структурой треков.

        В его музыке чувствуется влияние западной сцены,
        но при этом он формирует собственный уникальный стиль.

        Часто его треки звучат дерзко, нестандартно и даже хаотично,
        но именно это делает их интересными.

        Он представляет новое поколение артистов,
        которые не боятся ломать правила и делать что-то по-своему.`,
        listen: "https://music.yandex.ru/artist/8135481",
        tg: "https://t.me/toxisslime4",
        yt: "#https://www.youtube.com/@toxis8295",

        albums: [
            {
                title: "SLAANG",
                year: "2025",
                cover: "https://avatars.yandex.net/get-music-content/16406615/3ac16c91.a.39037296-2/m1000x1000"
            },
            {
                title: "ИЗНУТРИ",
                year: "2024",
                cover: "https://avatars.yandex.net/get-music-content/13529784/a0ea4270.a.33696836-1/m1000x1000"
            },
        ]
    }
};

function goTo(id) {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = `artist.html?id=${id}`;
    }, 400);
}

function goBack(e) {
    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 400);
}

function loadArtist() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || !artists[id]) return;

    const a = artists[id];

    let albumsHTML = "";

    a.albums.forEach(album => {
        albumsHTML += `
            <div class="album">
                <img src="${album.cover}">
                <div>
                    <b>${album.title}</b>

                    ${album.year}
                </div>
            </div>
        `;
    });

    document.getElementById("artistPage").innerHTML = `
        <div class="fade-in">
            <h1>${a.name}</h1>
            <img src="${a.img}">
            <p>${a.text}</p>

            <h2>Дискография</h2>
            <div class="albums">${albumsHTML}</div>

            <div class="buttons">
                <button class="btn listen" onclick="window.location.href='${a.listen}'">
                    <i class="fa-solid fa-headphones"></i> СЛУШАТЬ
                </button>

                <button class="btn tg" onclick="window.location.href='${a.tg}'">
                    <i class="fa-brands fa-telegram"></i> Telegram
                </button>

                <button class="btn yt" onclick="window.location.href='${a.yt}'">
                    <i class="fa-brands fa-youtube"></i> YouTube
                </button>
            </div>
        </div>
    `;
}

loadArtist();

// фикс для возврата через кнопку браузера
window.addEventListener("pageshow", (event) => {
    // если страница загружена из кеша (назад/вперёд)
    if (event.persisted) {
        document.body.classList.remove("fade-out");
        document.body.classList.add("loaded");
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        document.body.classList.remove("fade-out");
    }
});
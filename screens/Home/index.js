import React, { useState, useEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import ComicItem from "../../components/ComicItem";
import DataContext from '../../globals/context/data';
import AuthContext from '../../globals/context/auth';
import { GrantType } from "expo-auth-session";

const URI = "https://gateway.marvel.com/v1/public/comics?ts=1&limit=100&format=comic&characters=1009175,1009220&formatType=comic&orderBy=title&apikey=df334ee8a2d7cda021c027a224790cc2&hash=0013a5fb7413532411353f9d6167c6f2"

export default () => {
  const { comics, setComics, setFavorites } = useContext(DataContext);
  const { auth, setAuth, updateStoredAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredComics, setFilteredComics] = useState(comics);
  const { user, favorites: userFavorites } = auth;

  const COMICS = [
    {
        "id": 43508,
        "digitalId": 30238,
        "title": "A+X (2012) #9",
        "issueNumber": 9,
        "variantDescription": "",
        "description": "Captain America and Wolverine fight a villain unlike any you've ever seen!\nDeadpool and Hawkeye do not see eye-to-eye!",
        "modified": "2014-01-15T15:14:20-0500",
        "isbn": "",
        "upc": "75960607899800911",
        "diamondCode": "APR130666",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Captain America and Wolverine fight a villain unlike any you've ever seen!\nDeadpool and Hawkeye do not see eye-to-eye!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43508",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/43508/ax_2012_9?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/A-X-9/digital-comic/30238?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=30238&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/30238?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2013-06-19T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2013-06-05T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-12-16T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-06-19T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/584f15cfa53d0",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/584f15cfa53d0",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43508/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                    "name": "Jordan D. White",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                    "name": "Vc Clayton Cowles",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                    "name": "Edgar Delgado",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/593",
                    "name": "Lee Loughridge",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                    "name": "Gerry Duggan",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11799",
                    "name": "Nathan Edmondson",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1227",
                    "name": "David Lapham",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/840",
                    "name": "Adam Warren",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11757",
                    "name": "Salvador Larroca",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/447",
                    "name": "Victor Olazaba",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
                    "name": "Humberto Ramos",
                    "role": "penciller"
                }
            ],
            "returned": 13
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43508/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011179",
                    "name": "Pixie"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009387",
                    "name": "Quentin Quire"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43508/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97202",
                    "name": "A+X (2012) #9",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97203",
                    "name": "story from All-New X-Men (2012) #12",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43508/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 43488,
        "digitalId": 27911,
        "title": "A+X (2012) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "- Spinning directly out of AVX!\n- Like AVX: VS., this book brings you two stories every month by the industry's top creators!\n- This issue features a Wolverine/Hulk story by Jeph Loeb (WOLVERINE) and Hulk-legend Dale Keown and a Captain America/Cable story by Dan Slott (AMAZING SPIDER-MAN) and Ron Garney (WOLVERINE)!",
        "modified": "2015-05-01T12:04:10-0400",
        "isbn": "",
        "upc": "75960607899800111",
        "diamondCode": "AUG120562",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "- Spinning directly out of AVX!\n- Like AVX: VS., this book brings you two stories every month by the industry's top creators!\n- This issue features a Wolverine/Hulk story by Jeph Loeb (WOLVERINE) and Hulk-legend Dale Keown and a Captain America/Cable story by Dan Slott (AMAZING SPIDER-MAN) and Ron Garney (WOLVERINE)!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/43488/ax_2012_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/A-X-1/digital-comic/27911?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=27911&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/27911?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/45763",
                "name": "A+X (2012) #1 (2nd Printing Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-10-31T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2012-10-17T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-04-29T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-10-31T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/20/584f0b479c3f8",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/20/584f0b479c3f8",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 17,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43488/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                    "name": "Jordan D. White",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                    "name": "Vc Clayton Cowles",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3603",
                    "name": "Albert Deschesne",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                    "name": "Frank D'ARMATA",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/561",
                    "name": "Wil Quintana",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/676",
                    "name": "Warren Ellis",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/18",
                    "name": "Jeph Loeb",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/120",
                    "name": "Ron Garney",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/241",
                    "name": "Dale Keown",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/552",
                    "name": "Wade Von Grawbadger",
                    "role": "inker (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/192",
                    "name": "Stuart Immonen",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13146",
                    "name": "Danny Miki",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/454",
                    "name": "Mark Morales",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/480",
                    "name": "Cam Smith",
                    "role": "inker"
                }
            ],
            "returned": 17
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43488/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009214",
                    "name": "Cable"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011328",
                    "name": "Maestro"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011360",
                    "name": "Red Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43488/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97110",
                    "name": "A+X (2012) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/102973",
                    "name": "story from A+X (2012) #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43488/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 43501,
        "digitalId": 28456,
        "title": "A+X (2012) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "<ul><li>Storm and Black Panther&rsquo;s first post-AVX encounter!</li><li>Your other two favorite characters fight your favorite villain.</li></ul>",
        "modified": "2014-01-15T14:41:01-0500",
        "isbn": "",
        "upc": "75960607899800411",
        "diamondCode": "NOV120669",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "<ul><li>Storm and Black Panther&rsquo;s first post-AVX encounter!</li><li>Your other two favorite characters fight your favorite villain.</li></ul>"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/43501/ax_2012_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/A-X-4/digital-comic/28456?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=28456&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/28456?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43502",
                "name": "A+X (2012) #4 (Mcguinness Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43503",
                "name": "A+X (2012) #4 (Mcguinness Sketch Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/45765",
                "name": "A+X (2012) #4 (Brooks Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2013-01-23T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2013-01-09T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-07-22T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-01-23T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/584f0ec518b24",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/584f0ec518b24",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 14,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43501/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                    "name": "Jordan D. White",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                    "name": "Kaare Andrews",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11294",
                    "name": "David Jason Latour",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11306",
                    "name": "Jason Latour",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
                    "name": "Mark Brooks",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10433",
                    "name": "Alvaro Lopez",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                    "name": "Vc Clayton Cowles",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9937",
                    "name": "Jim Charalampidis",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/593",
                    "name": "Lee Loughridge",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/365",
                    "name": "Pasqual Ferry",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                    "name": "David Lopez",
                    "role": "penciller"
                }
            ],
            "returned": 14
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43501/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009387",
                    "name": "Quentin Quire"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43501/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97188",
                    "name": "A+X (2012) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97189",
                    "name": "story from All-New X-Men (2012) #5",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43501/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 43506,
        "digitalId": 29122,
        "title": "A+X (2012) #7",
        "issueNumber": 7,
        "variantDescription": "",
        "description": "<ul><li>Artist Stefano Casseli (AVENGERS ASSEMBLE) and Mike Costa (G.I.: JOE: Cobra) show you the ever-loving blue-eyed Thing and the ever-lusting red-eyed Gambit playing the most dangerous game!</li><li>Thor and Iceman teamup in one of the most visually amazing tales you&rsquo;ve ever seen, courtesy of Christopher Yost (AVENGING SPIDER-MAN) and superstar artists-to be R&rsquo;John Bernales and Chris Turcotte!</li></ul>",
        "modified": "2014-01-15T15:07:18-0500",
        "isbn": "",
        "upc": "75960607899800711",
        "diamondCode": "FEB130539",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "<ul><li>Artist Stefano Casseli (AVENGERS ASSEMBLE) and Mike Costa (G.I.: JOE: Cobra) show you the ever-loving blue-eyed Thing and the ever-lusting red-eyed Gambit playing the most dangerous game!</li><li>Thor and Iceman teamup in one of the most visually amazing tales you&rsquo;ve ever seen, courtesy of Christopher Yost (AVENGING SPIDER-MAN) and superstar artists-to be R&rsquo;John Bernales and Chris Turcotte!</li></ul>"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/43506/ax_2012_7?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/A-X-7/digital-comic/29122?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=29122&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/29122?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47068",
                "name": "A+X (2012) #7 (Renaud Iron Man Many Armors Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2013-04-24T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2013-04-10T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-10-21T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-04-24T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/584f133319afd",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/584f133319afd",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 12,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43506/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                    "name": "Jordan D. White",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
                    "name": "Stefano Caselli",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12467",
                    "name": "Orphans Cheeps",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12850",
                    "name": "Chris Turcotte",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                    "name": "Vc Clayton Cowles",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/774",
                    "name": "Morry Hollowell",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/241",
                    "name": "Dale Keown",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/699",
                    "name": "Norman Lee",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10409",
                    "name": "Zeb Wells",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11539",
                    "name": "Christopher Yost",
                    "role": "writer"
                }
            ],
            "returned": 12
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43506/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
                    "name": "Iceman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43506/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97198",
                    "name": "A+X (2012) #7",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/97199",
                    "name": "story from All-New X-Men (2012) #10",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43506/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17746,
        "digitalId": 5064,
        "title": "A-Next (1998) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:52-0400",
        "isbn": "",
        "upc": "75960603790200511",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17746",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17746/a-next_1998_5?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5064&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-02-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-09-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/4c7d24cbd84f8",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/4c7d24cbd84f8",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17746/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17746/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17746/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37663",
                    "name": "Cover #37663",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37664",
                    "name": "The Gift",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187330",
                    "name": "cover from A-Next (1998) #5",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187331",
                    "name": "story from A-Next (1998) #5",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17746/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17739,
        "digitalId": 5060,
        "title": "A-Next (1998) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": null,
        "modified": "2019-02-19T13:04:37-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17739",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17739/a-next_1998_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5060&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1998-10-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2010-01-01T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/56d4b558ac730",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/56d4b558ac730",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17739/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1251",
                    "name": "Brett Breeding",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/375",
                    "name": "Bob Harras",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17739/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17739/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37648",
                    "name": "Cover #37648",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37649",
                    "name": "Second Coming!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37650",
                    "name": "Call the Kid....J2",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/113220",
                    "name": "Cover from title (1938) #1",
                    "type": "cover"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17739/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17748,
        "digitalId": 12546,
        "title": "A-Next (1998) #7",
        "issueNumber": 7,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:53-0400",
        "isbn": "",
        "upc": "75960603790200711",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17748",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17748/a-next_1998_7?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=12546&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-04-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-05-27T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/40/55c106b0200f5",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/40/55c106b0200f5",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17748/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17748/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17748/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37667",
                    "name": "Cover #37667",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37668",
                    "name": "After the Fall",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146388",
                    "name": "story from A-Next (1998) #7",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17748/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17741,
        "digitalId": 39833,
        "title": "A-Next (1998) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": "The Avengers defeat their evil counterparts.",
        "modified": "2018-06-08T09:06:21-0400",
        "isbn": "",
        "upc": "75960603790201111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The Avengers defeat their evil counterparts."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17741",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17741/a-next_1998_11?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=39833&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-08-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-03-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/56afd21ee292e",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/56afd21ee292e",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17741/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17741/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17741/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37653",
                    "name": "Cover #37653",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37654",
                    "name": "Crucible",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146392",
                    "name": "story from A-Next (1998) #11",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17741/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17750,
        "digitalId": 39831,
        "title": "A-Next (1998) #9",
        "issueNumber": 9,
        "variantDescription": "",
        "description": "Thunderstrike and Blacklight vs. the Soldiers of the Serpent!",
        "modified": "2018-06-08T09:06:19-0400",
        "isbn": "",
        "upc": "75960603790200911",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Thunderstrike and Blacklight vs. the Soldiers of the Serpent!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17750",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17750/a-next_1998_9?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=39831&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-06-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-03-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/56afcc80b12e9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/56afcc80b12e9",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17750/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17750/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17750/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37671",
                    "name": "Cover #37671",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37672",
                    "name": "Team Matters",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146390",
                    "name": "story from A-Next (1998) #9",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17750/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17743,
        "digitalId": 5061,
        "title": "A-Next (1998) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:49-0400",
        "isbn": "",
        "upc": "75960603790200211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17743",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17743/a-next_1998_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5061&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1998-11-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-09-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb6f9a01fcbc",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb6f9a01fcbc",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17743/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1251",
                    "name": "Brett Breeding",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17743/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17743/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37657",
                    "name": "Cover #37657",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37658",
                    "name": "Suddenly.... The Sentry",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187324",
                    "name": "cover from A-Next (1998) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187325",
                    "name": "story from A-Next (1998) #2",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17743/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17745,
        "digitalId": 5063,
        "title": "A-Next (1998) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:51-0400",
        "isbn": "",
        "upc": "75960603790200411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17745",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17745/a-next_1998_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5063&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-01-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-09-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bb6f99b094ee",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bb6f99b094ee",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17745/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1251",
                    "name": "Brett Breeding",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17745/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17745/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37661",
                    "name": "Cover #37661",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37662",
                    "name": "Who Shall Be Worthy?",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187328",
                    "name": "cover from A-Next (1998) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187329",
                    "name": "story from A-Next (1998) #4",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17745/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17747,
        "digitalId": 5065,
        "title": "A-Next (1998) #6",
        "issueNumber": 6,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:53-0400",
        "isbn": "",
        "upc": "75960603790200611",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17747",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17747/a-next_1998_6?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5065&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-03-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-09-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bb6f99082cb1",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bb6f99082cb1",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17747/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17747/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17747/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37665",
                    "name": "Cover #37665",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37666",
                    "name": "And Now Argo the Almighty",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187332",
                    "name": "cover from A-Next (1998) #6",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187333",
                    "name": "story from A-Next (1998) #6",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17747/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17740,
        "digitalId": 39832,
        "title": "A-Next (1998) #10",
        "issueNumber": 10,
        "variantDescription": "",
        "description": "In their quest to find out what happened to the original Avengers, our heroes travel to a parallel reality where Dr. Doom is the supreme leader!",
        "modified": "2018-06-08T09:06:20-0400",
        "isbn": "",
        "upc": "75960603790201011",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "In their quest to find out what happened to the original Avengers, our heroes travel to a parallel reality where Dr. Doom is the supreme leader!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17740",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17740/a-next_1998_10?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=39832&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-07-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-03-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/56afcdb507f95",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/56afcdb507f95",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17740/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17740/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17740/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37651",
                    "name": "Cover #37651",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37652",
                    "name": "Ragnarok!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146391",
                    "name": "story from A-Next (1998) #10",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17740/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17749,
        "digitalId": 39830,
        "title": "A-Next (1998) #8",
        "issueNumber": 8,
        "variantDescription": "",
        "description": "While Ant-Man and Stinger assist Mainframe, the rest of the team finds out where Scarlet Witch has been hiding!",
        "modified": "2018-06-08T09:06:17-0400",
        "isbn": "",
        "upc": "75960603790200811",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "While Ant-Man and Stinger assist Mainframe, the rest of the team finds out where Scarlet Witch has been hiding!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17749",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17749/a-next_1998_8?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=39830&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-05-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-03-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/90/56afcb0bcda25",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/90/56afcb0bcda25",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17749/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17749/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17749/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37669",
                    "name": "Cover #37669",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37670",
                    "name": "Into the Depths!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146389",
                    "name": "story from A-Next (1998) #8",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17749/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17742,
        "digitalId": 39834,
        "title": "A-Next (1998) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": "The daughter of the original Ant-Man and Wasp seeks retribution against the Avengers.",
        "modified": "2018-06-08T09:06:22-0400",
        "isbn": "",
        "upc": "75960603790201211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The daughter of the original Ant-Man and Wasp seeks retribution against the Avengers."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17742",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17742/a-next_1998_12?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=39834&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1999-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-03-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/5f0c60f91f491",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/5f0c60f91f491",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17742/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                    "name": "Al Milgrom",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17742/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17742/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37655",
                    "name": "Cover #37655",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37656",
                    "name": "The End of the Avengers",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146393",
                    "name": "story from A-Next (1998) #12",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17742/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 17744,
        "digitalId": 5062,
        "title": "A-Next (1998) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-23T09:02:50-0400",
        "isbn": "",
        "upc": "75960603790200311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17744",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/17744/a-next_1998_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5062&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4776",
                "name": "SPIDER-GIRL PRESENTS AVENGERS NEXT VOL. 1: SECOND COMING DIGEST (Digest)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1998-12-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-09-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/5f04833c25e80",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/5f04833c25e80",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17744/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1251",
                    "name": "Brett Breeding",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                    "name": "Ron Frenz",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17744/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010801",
                    "name": "Ant-Man (Scott Lang)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009381",
                    "name": "Jubilee"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17744/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37659",
                    "name": "Cover #37659",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/37660",
                    "name": "Down 'N' Dirty With the Defenders",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187326",
                    "name": "cover from A-Next (1998) #3",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187327",
                    "name": "story from A-Next (1998) #3",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/17744/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 66978,
        "digitalId": 47830,
        "title": "Adventures of Captain America (1991) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Relive the monumental origins of Marvel's Sentinel of Liberty, retold for the modern age -- with new secrets revealed! As Captain America is born, so does the rise of the Red Skull begin…but who is the mysterious Agent X?",
        "modified": "2018-02-15T15:30:04-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Relive the monumental origins of Marvel's Sentinel of Liberty, retold for the modern age -- with new secrets revealed! As Captain America is born, so does the rise of the Red Skull begin…but who is the mysterious Agent X?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66978",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/66978/adventures_of_captain_america_1991_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=47830&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
            "name": "Adventures of Captain America (1991 - 1992)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1991-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2018-02-19T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5a85e75237ab9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/5a85e75237ab9",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66978/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4769",
                    "name": "Tom Christopher",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6650",
                    "name": "Josef Rubinstein",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/780",
                    "name": "Kevin Maguire",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                    "name": "Paul Mounts",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6001",
                    "name": "Fabian Nicieza",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
                    "name": "Richard Starkings",
                    "role": "letterer"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66978/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66978/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145125",
                    "name": "cover from Adventures of Captain America (1991) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145126",
                    "name": "story from Adventures of Captain America (1991) #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66978/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 66980,
        "digitalId": 47832,
        "title": "Adventures of Captain America (1991) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": "As Cap and Bucky get ever closer to confronting the Red Skull, the mystery identity of the evil Agent X is revealed -- and it shatters the world that Steve Rogers thought he knew forever!",
        "modified": "2018-02-15T15:33:32-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "As Cap and Bucky get ever closer to confronting the Red Skull, the mystery identity of the evil Agent X is revealed -- and it shatters the world that Steve Rogers thought he knew forever!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66980",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/66980/adventures_of_captain_america_1991_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=47832&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
            "name": "Adventures of Captain America (1991 - 1992)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1991-12-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2018-02-19T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/5a85e768a3649",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/5a85e768a3649",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66980/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
                    "name": "Terry Kevin Austin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/780",
                    "name": "Kevin Maguire",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                    "name": "Paul Mounts",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6001",
                    "name": "Fabian Nicieza",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
                    "name": "Richard Starkings",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1397",
                    "name": "Kevin West",
                    "role": "penciler"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66980/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66980/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145129",
                    "name": "cover from Adventures of Captain America (1991) #3",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145130",
                    "name": "story from Adventures of Captain America (1991) #3",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66980/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 66979,
        "digitalId": 47831,
        "title": "Adventures of Captain America (1991) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "Cap's war against fascism begins at last! Watch as Steve Rogers and Bucky Barnes meet for the first time! Marvel as Cap dons his costume and takes up his original shield!",
        "modified": "2018-02-15T15:31:54-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Cap's war against fascism begins at last! Watch as Steve Rogers and Bucky Barnes meet for the first time! Marvel as Cap dons his costume and takes up his original shield!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66979",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/66979/adventures_of_captain_america_1991_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=47831&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
            "name": "Adventures of Captain America (1991 - 1992)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1991-11-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2018-02-19T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/5a85e7930cd17",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/5a85e7930cd17",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66979/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
                    "name": "Terry Kevin Austin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/780",
                    "name": "Kevin Maguire",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                    "name": "Paul Mounts",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6001",
                    "name": "Fabian Nicieza",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
                    "name": "Richard Starkings",
                    "role": "letterer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66979/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66979/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145127",
                    "name": "cover from Adventures of Captain America (1991) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145128",
                    "name": "story from Adventures of Captain America (1991) #2",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66979/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 66981,
        "digitalId": 47833,
        "title": "Adventures of Captain America (1991) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "The final showdown between Cap and the Red Skull at last! But even if Cap comes out on top, will he be able to cope with the devastating revelations this victory has brought?",
        "modified": "2018-02-15T15:36:05-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The final showdown between Cap and the Red Skull at last! But even if Cap comes out on top, will he be able to cope with the devastating revelations this victory has brought?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66981",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/66981/adventures_of_captain_america_1991_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=47833&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
            "name": "Adventures of Captain America (1991 - 1992)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1992-01-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2018-02-19T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5a85e7fd422a0",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5a85e7fd422a0",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66981/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
                    "name": "Terry Kevin Austin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4794",
                    "name": "Steve Carr",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1397",
                    "name": "Kevin West",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/780",
                    "name": "Kevin Maguire",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                    "name": "Paul Mounts",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6001",
                    "name": "Fabian Nicieza",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
                    "name": "Richard Starkings",
                    "role": "letterer"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66981/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66981/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145131",
                    "name": "cover from Adventures of Captain America (1991) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/145132",
                    "name": "story from Adventures of Captain America (1991) #4",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/66981/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 42539,
        "digitalId": 0,
        "title": "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)",
        "issueNumber": 2,
        "variantDescription": "Avengers Art Appreciation Variant",
        "description": null,
        "modified": "2012-04-05T12:10:24-0400",
        "isbn": "",
        "upc": "5960607747-00221",
        "diamondCode": "FEB120634",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/42539",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/42539/age_of_apocalypse_2011_2_avengers_art_appreciation_variant/avengers_art_appreciation_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
            "name": "Age of Apocalypse (2011 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/41270",
                "name": "Age of Apocalypse (2011) #2"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-04-04T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2012-03-21T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4f7dc3b18d6cb",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4f7dc3b18d6cb",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/42539/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1227",
                    "name": "David Lapham",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11525",
                    "name": "Christian Nauck",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 2
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/42539/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/42539/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/95883",
                    "name": "Age of Apocalypse (2011) #2, Avengers Art Appreciation Variant",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/95884",
                    "name": "Interior #95884",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/42539/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 33566,
        "digitalId": 14927,
        "title": "Age of Heroes (2010) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "THE HEROIC AGE IS HERE!\r\nThe Heroic Age continues in this next set of star-studded stories told in the Mighty Marvel Manner! In a special YOUNG ALLIES prelude story, Greg Willis makes the Wisconsin-to-Manhattan trek once more--but will he be leaving GRAVITY behind this time? Spider-Man encounters the new super hero in town...Norman Osborn's AMERICAN SON?! But the man wearing the armor is the last guy Spidey expects! In the Age of Heroes, the YOUNG MASTERS must decide whose side they're on and, with the Dark Reign lifted, THE GAUNTLET soldiers on--all the way to Afghanistan.\r\nRated T  ...$3.99",
        "modified": "2013-11-27T11:14:54-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "APR100561",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HEROIC AGE IS HERE!\r\nThe Heroic Age continues in this next set of star-studded stories told in the Mighty Marvel Manner! In a special YOUNG ALLIES prelude story, Greg Willis makes the Wisconsin-to-Manhattan trek once more--but will he be leaving GRAVITY behind this time? Spider-Man encounters the new super hero in town...Norman Osborn's AMERICAN SON?! But the man wearing the armor is the last guy Spidey expects! In the Age of Heroes, the YOUNG MASTERS must decide whose side they're on and, with the Dark Reign lifted, THE GAUNTLET soldiers on--all the way to Afghanistan.\r\nRated T  ...$3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33566",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/33566/age_of_heroes_2010_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=14927&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-06-16T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-05-27T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-02-01T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/f0/56afaf31b0b7f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/f0/56afaf31b0b7f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/33566/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/33566/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                    "name": "Cloud 9"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011432",
                    "name": "Enchantress (Sylvie Lushton)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009316",
                    "name": "Gauntlet (Joseph Green)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                    "name": "Gravity"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                    "name": "Maria Hill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                    "name": "Sharon Carter"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010860",
                    "name": "Squirrel Girl"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                    "name": "Taskmaster"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 13
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/33566/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/107272",
                    "name": "Interior from Age of Heroes #2",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/107273",
                    "name": "Cover from Age of Heroes #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/113200",
                    "name": "Cover from Age of Heroes (2010) #2",
                    "type": "cover"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/33566/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30090,
        "digitalId": 14633,
        "title": "Age of Heroes (2010) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Eisner-winner & fan-favorite KURT BUSIEK RETURNS TO MARVEL!\r\nTHE HEROIC AGE IS HERE!\r\nThe Heroes are restored to their rightful place in this new era, and the world is safer for them.  They defeated Osborn & his Siege on Asgard, now they have one last foe to face: the Mayor of New York -- J. Jonah Jameson!  Also, MI13 come to the US, but one of them isn't leaving--they are defecting to the AVENGERS?! Plus Dr. Voodoo's Sorcerer Supreme duties infringe on \"date night\" and how much trouble can Spider-Man get into in one day? The answer: A LOT!\r\nRated T  ...$3.99",
        "modified": "2019-06-26T10:25:43-0400",
        "isbn": "",
        "upc": "5960607125-00111",
        "diamondCode": "MAR100534",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Eisner-winner & fan-favorite KURT BUSIEK RETURNS TO MARVEL!\r\nTHE HEROIC AGE IS HERE!\r\nThe Heroes are restored to their rightful place in this new era, and the world is safer for them.  They defeated Osborn & his Siege on Asgard, now they have one last foe to face: the Mayor of New York -- J. Jonah Jameson!  Also, MI13 come to the US, but one of them isn't leaving--they are defecting to the AVENGERS?! Plus Dr. Voodoo's Sorcerer Supreme duties infringe on \"date night\" and how much trouble can Spider-Man get into in one day? The answer: A LOT!\r\nRated T  ...$3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30090/age_of_heroes_2010_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=14633&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/36522",
                "name": "Age of Heroes (2010) #1 (2ND PRINTING VARIANT)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/33323",
                "name": "Age of Heroes (2010) #1 (HEROIC AGE VARIANT)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-05-19T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-04-29T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-01-04T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/70/56afac804fff2",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/70/56afac804fff2",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/4bec467c0e660",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/4bec46760e962",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4bec46706341c",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4bec44d570070",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4bec44d212521",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/4bec44cedf4d5",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bec44cb94e2b",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30090/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/653",
                    "name": "Greg Tocchini",
                    "role": "penciler"
                }
            ],
            "returned": 1
        },
        "characters": {
            "available": 12,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30090/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011339",
                    "name": "Blue Marvel"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                    "name": "Cloud 9"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                    "name": "Gravity"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                    "name": "Maria Hill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                    "name": "Sharon Carter"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010860",
                    "name": "Squirrel Girl"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                    "name": "Taskmaster"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 12
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30090/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69006",
                    "name": "Cover #69006",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69007",
                    "name": "Interior #69007",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30090/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30093,
        "digitalId": 15721,
        "title": "Age of Heroes (2010) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "The Heroic Age continues with more titantic tales from across the mighty Marvel U! Follow Shuri, the deadly Black Panther, as she sets the world on fire crossing paths, and claws, with the rest of MU! Find out the truth behind Captain America's time on ice and the native peoples who stumbled across his frosty tomb! PLUS: Zodiac's back and ready for the Age of Villains to begin...and Steve Rogers: Super-Soldier has an all-new assignment for Initiative cadet Cloud 9!\r\nRated T  ...$3.99",
        "modified": "2011-10-05T11:10:29-0400",
        "isbn": "",
        "upc": "5960607125-00411",
        "diamondCode": "JUN100566",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The Heroic Age continues with more titantic tales from across the mighty Marvel U! Follow Shuri, the deadly Black Panther, as she sets the world on fire crossing paths, and claws, with the rest of MU! Find out the truth behind Captain America's time on ice and the native peoples who stumbled across his frosty tomb! PLUS: Zodiac's back and ready for the Age of Villains to begin...and Steve Rogers: Super-Soldier has an all-new assignment for Initiative cadet Cloud 9!\r\nRated T  ...$3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30093",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30093/age_of_heroes_2010_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=15721&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-08-18T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-07-29T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-07-12T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/70/56afb296896a9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/70/56afb296896a9",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4c7c3d49186ca",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/80/4c6198d04e0ef",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/4c6198ca28a7a",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/4c6198c41c277",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4c6198bde3210",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c619707a37e2",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c6196fb24a80",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30093/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/56",
                    "name": "Jae Lee",
                    "role": "penciller"
                }
            ],
            "returned": 1
        },
        "characters": {
            "available": 12,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30093/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011339",
                    "name": "Blue Marvel"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                    "name": "Cloud 9"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                    "name": "Gravity"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                    "name": "Maria Hill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                    "name": "Sharon Carter"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010860",
                    "name": "Squirrel Girl"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                    "name": "Taskmaster"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 12
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30093/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69012",
                    "name": "Cover #69012",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69013",
                    "name": "Interior #69013",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30093/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30092,
        "digitalId": 15247,
        "title": "Age of Heroes (2010) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": null,
        "modified": "2019-10-22T09:18:24-0400",
        "isbn": "",
        "upc": "75960607125800311",
        "diamondCode": "MAY100574",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30092",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30092/age_of_heroes_2010_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=15247&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-07-21T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-05-05T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/56afb12ce64dc",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/56afb12ce64dc",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4c3ddb1b769f7",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c3ddb154735d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c3ddb0f04436",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4c3ddb0897ac3",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c3dd944d4002",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/4c3dd93e7826d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/4c3dd937a2169",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 18,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30092/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13679",
                    "name": "Jean-Francious Beaulieu",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10105",
                    "name": "Jorge Maese",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                    "name": "Jay David Ramos",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10783",
                    "name": "John Rauch",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10320",
                    "name": "Kelly Sue Deconnick",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4990",
                    "name": "Kevin Grevioux",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13059",
                    "name": "Fred Van Lente",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10454",
                    "name": "Nathan Fairbairn",
                    "role": "colorist (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7219",
                    "name": "Michel Lacombe",
                    "role": "inker (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13148",
                    "name": "Dave Lanphear",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/447",
                    "name": "Victor Olazaba",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8728",
                    "name": "Jefte Palo",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/918",
                    "name": "Ty Templeton",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4074",
                    "name": "Walden Wong",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1129",
                    "name": "Yanick Paquette",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8138",
                    "name": "Brad Walker",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13165",
                    "name": "M.C. Wyman",
                    "role": "penciler"
                }
            ],
            "returned": 18
        },
        "characters": {
            "available": 11,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30092/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                    "name": "Cloud 9"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                    "name": "Gravity"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                    "name": "Maria Hill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                    "name": "Sharon Carter"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010860",
                    "name": "Squirrel Girl"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                    "name": "Taskmaster"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 11
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30092/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69010",
                    "name": "Cover #69010",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69011",
                    "name": "Interior #69011",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30092/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 38524,
        "digitalId": 20260,
        "title": "Age of X: Universe (2011) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "In an age without the X-Men, mutants are hated and hunted. The surviving mutants create a last bastion for their dying race: Fortress X. With this AGE OF X, humanity vows to see mutants destroyed and a team of champions find themselves united.",
        "modified": "2012-03-27T15:00:27-0400",
        "isbn": "",
        "upc": "5960607573-00111",
        "diamondCode": "JAN110795",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "And there came an Age Of X, an age unlike any other, where there were no X-Men...mutants were hated and feared. In that age, the remaining mutants created a stronghold, a last bastion for their dying race: Fortress X. And in that Age Of X, when humanity vowed to see Fortress X destroyed, a team of heroes and heroines found themselves united against this terrible mutant threat.  This is their epoch!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "In an age without the X-Men, mutants are hated and hunted. The surviving mutants create a last bastion for their dying race: Fortress X. With this AGE OF X, humanity vows to see mutants destroyed and a team of champions find themselves united."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/38524/age_of_x_universe_2011_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Age-of-X-Universe-1/digital-comic/20260?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=20260&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/20260?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-03-30T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-03-16T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-02-01T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-03-20T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5976552f09303",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5976552f09303",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/4d890f9bdb30c",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4d6e7706285db",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/4d6e773b63895",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4d8910d446ddd",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4d890fd661a32",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/4d890f4d49b4d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4d6e77ba85f03",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/00/4d6e779189847",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/4d6e77628322d",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 11,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38524/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/648",
                    "name": "Simone Bianchi",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9224",
                    "name": "Paul Davidson",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5003",
                    "name": "Simone Peruzzi",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                    "name": "Antonio Fabela",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1374",
                    "name": "Sonia Oback",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11737",
                    "name": "Daniel Ketchum",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9967",
                    "name": "Jim Mccann",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5635",
                    "name": "Simon Spurrier",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/527",
                    "name": "Tom Palmer",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1103",
                    "name": "Khoi Pham",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                }
            ],
            "returned": 11
        },
        "characters": {
            "available": 15,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38524/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009199",
                    "name": "Blob"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009229",
                    "name": "Frank Castle"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009318",
                    "name": "Ghost Rider (Johnny Blaze)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010667",
                    "name": "Jessica Drew"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009532",
                    "name": "Reaper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546",
                    "name": "Rogue"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009554",
                    "name": "Sabretooth"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 15
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38524/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90010",
                    "name": "Age of X: Universe (2011) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90040",
                    "name": "Age of X: Universe #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38524/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
                    "name": "Age of X"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 38523,
        "digitalId": 20772,
        "title": "Age of X: Universe (2011) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "The Avengers have been ordered to find Magneto and his army of fugitive mutants. But when the team is given a license to kill, not every member is up to the task. Who will kill and who will be killed?",
        "modified": "2013-03-06T10:11:52-0500",
        "isbn": "",
        "upc": "5960607573-00211",
        "diamondCode": "FEB110625",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The Avengers have been ordered to hunt down Magneto and his army of fugitive mutants. But when the team is given a license to kill, not every member is up to the task. Who will kill and who will be killed? You may just be surprised.  Also featuring an untold tale from the Age of X!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The Avengers have been ordered to find Magneto and his army of fugitive mutants. But when the team is given a license to kill, not every member is up to the task. Who will kill and who will be killed?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/38523/age_of_x_universe_2011_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Age-of-X-Universe-2/digital-comic/20772?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=20772&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/20772?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-04-27T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-04-13T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-02-08T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-03-20T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/60/59773cf861be7",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/60/59773cf861be7",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38523/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/648",
                    "name": "Simone Bianchi",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11737",
                    "name": "Daniel Ketchum",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3736",
                    "name": "Chuck Kim",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1374",
                    "name": "Sonia Oback",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/527",
                    "name": "Tom Palmer",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5003",
                    "name": "Simone Peruzzi",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1103",
                    "name": "Khoi Pham",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10146",
                    "name": "Gabriel Hernandez Walta",
                    "role": "penciler"
                }
            ],
            "returned": 9
        },
        "characters": {
            "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38523/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009229",
                    "name": "Frank Castle"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010667",
                    "name": "Jessica Drew"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                    "name": "Magneto"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009465",
                    "name": "Mystique"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009532",
                    "name": "Reaper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546",
                    "name": "Rogue"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 13
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38523/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84589",
                    "name": "Age of X: Universe (2011) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/84590",
                    "name": "Interior #84590   ",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38523/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
                    "name": "Age of X"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 24371,
        "digitalId": 15978,
        "title": "All Winners Comics 70th Anniversary Special (2009) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Captain America and Bucky...the Human Torch and Toro...the Sub-Mariner...Miss America...the Whizzer...THE ALL-WINNERS SQUAD! It's 1946 and World War 2 is over, but the memory of those lost in the War haunts everyone- especially when Times Square is overrun by undead soldiers wanting their lives back! And leading this tattered battalion are the two casualties the All-Winners Squad can't fight- the original Captain America and Bucky! Plus: a surprise romance that has all the tabloids a-twitter!\r\n\"Old Soldiers Never Die...\" by Karl Kesel (MARVEL APES) and Steve Uy (AVENGERS: THE INITIATIVE)\r\nBuy Bonds! And this comic!\t\r\nOne-Shot/New and Reprint/Rated A ...$3.99",
        "modified": "2019-09-19T17:32:28-0400",
        "isbn": "",
        "upc": "5960606765-00111",
        "diamondCode": "JUN090450",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 48,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Captain America and Bucky...the Human Torch and Toro...the Sub-Mariner...Miss America...the Whizzer...THE ALL-WINNERS SQUAD! It's 1946 and World War 2 is over, but the memory of those lost in the War haunts everyone- especially when Times Square is overrun by undead soldiers wanting their lives back! And leading this tattered battalion are the two casualties the All-Winners Squad can't fight- the original Captain America and Bucky! Plus: a surprise romance that has all the tabloids a-twitter!\r\n\"Old Soldiers Never Die...\" by Karl Kesel (MARVEL APES) and Steve Uy (AVENGERS: THE INITIATIVE)\r\nBuy Bonds! And this comic!\t\r\nOne-Shot/New and Reprint/Rated A ...$3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24371",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/24371/all_winners_comics_70th_anniversary_special_2009_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=15978&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7534",
            "name": "All Winners Comics 70th Anniversary Special (2009)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2009-08-05T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2009-07-16T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-03-15T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bb43f12a8fff",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bb43f12a8fff",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/f0/4bb4939979956",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/4bb43f0d8f132",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4bb43f086fc9d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/e0/4bb43f0377115",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4bb43efe6d817",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bb43ef93f13c",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4bb43ef457a55",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/24371/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1004",
                    "name": "Daniel Acuna",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4508",
                    "name": "Steve Uy",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8678",
                    "name": "Jared K. Fletcher",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/438",
                    "name": "Karl Kesel",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7843",
                    "name": "Todd Klein",
                    "role": "other"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/24371/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009211",
                    "name": "Bucky"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011024",
                    "name": "Invaders"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009466",
                    "name": "Namor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/24371/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/53910",
                    "name": "Cover #53910",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/53911",
                    "name": "Interior #53911",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/24371/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 56442,
        "digitalId": 42294,
        "title": "All-New Wolverine (2015) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": "CIVIL WAR II TIE-IN! DESTINY COMES KNOCKING FOR WOLVERINE! LAURA KINNEY has fought all her life to avoid a destiny she did not want. She has fought against instincts that would make her nothing more than a weapon to be used by others, instead becoming a hero — becoming WOLVERINE. But now, destiny intrudes again, this time threatening those dearest to her. And with a SUPER HERO CIVIL WAR tearing her world apart, is there any hope that Wolverine will emerge victorious? Or will she finally succumb to destiny?",
        "modified": "2016-08-08T15:08:36-0400",
        "isbn": "",
        "upc": "75960608359601111",
        "diamondCode": "JUN160814",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "CIVIL WAR II TIE-IN! DESTINY COMES KNOCKING FOR WOLVERINE! LAURA KINNEY has fought all her life to avoid a destiny she did not want. She has fought against instincts that would make her nothing more than a weapon to be used by others, instead becoming a hero — becoming WOLVERINE. But now, destiny intrudes again, this time threatening those dearest to her. And with a SUPER HERO CIVIL WAR tearing her world apart, is there any hope that Wolverine will emerge victorious? Or will she finally succumb to destiny?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56442",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/56442/all-new_wolverine_2015_11?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-New-Wolverine-11/digital-comic/42294?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=42294&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/42294?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
            "name": "All-New Wolverine (2015 - 2018)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/60195",
                "name": "All-New Wolverine (2015) #11 (Parker Marvel Tsum Tsum Takeover Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2016-08-17T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2016-08-03T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2017-02-20T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2016-08-17T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/57a8b4f6af78a",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/57a8b4f6af78a",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/56442/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8098",
                    "name": "Bengal",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                    "name": "Ig Guara",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                    "name": "Mark Paniccia",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12447",
                    "name": "Tom Taylor",
                    "role": "writer"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/56442/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017810",
                    "name": "Old Man Logan (Earth-807128)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009722",
                    "name": "X-23"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/56442/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/123739",
                    "name": "cover from All-New Wolverine (2015) #11",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/123740",
                    "name": "story from All-New Wolverine (2015) #11",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/56442/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 44580,
        "digitalId": 0,
        "title": "All-New X-Men (2012) #3 (Mcguinness Variant)",
        "issueNumber": 3,
        "variantDescription": "Mcguinness Variant",
        "description": "- The flagship X-Book marches on!\n- The original 5 X-Men are back, but that's not all that's happening.\n- What happened to the Phoenix 5 from AVENGERS VS. X-MEN?",
        "modified": "2013-02-01T20:31:26-0500",
        "isbn": "",
        "upc": "75960607900100321",
        "diamondCode": "OCT120590",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "- The flagship X-Book marches on!\n- The original 5 X-Men are back, but that's not all that's happening.\n- What happened to the Phoenix 5 from AVENGERS VS. X-MEN?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/44580",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/44580/all-new_x-men_2012_3_mcguinness_variant/mcguinness_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
            "name": "All-New X-Men (2012 - 2015)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47627",
                "name": "All-New X-Men (2012) #3 (3rd Printing Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47337",
                "name": "All-New X-Men (2012) #3 (2nd Printing Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43468",
                "name": "All-New X-Men (2012) #3"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-12-05T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2012-11-20T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/510c69a357a5e",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/510c69a357a5e",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/50be6d5c87b29",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/44580/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                    "name": "Ed Mcguinness",
                    "role": "penciler (cover)"
                }
            ],
            "returned": 1
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/44580/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/44580/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/100443",
                    "name": "cover from All-New X-Men (2012) #3 (TBD ARTIST VARIANT)",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/100444",
                    "name": "story from All-New X-Men (2012) #3 (TBD ARTIST VARIANT)",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/44580/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12574,
        "digitalId": 10608,
        "title": "All-Winners Comics (1941) #9",
        "issueNumber": 9,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 60,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12574",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12574/all-winners_comics_1941_9?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10608&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1943-06-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-11-11T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bb6167d5eaad",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bb6167d5eaad",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12574/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12574/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12574/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9182",
                    "name": "Cover #9182",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9183",
                    "name": "[The Gorilla Men]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9184",
                    "name": "Case of the Sinister Hun",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9185",
                    "name": "Namor Cracks the Whip",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9186",
                    "name": "The Flight From Peril",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9187",
                    "name": "[The Bakery Spy Ring]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146456",
                    "name": "story from All-Winners Comics (1941) #9",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12574/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12566,
        "digitalId": 4555,
        "title": "All-Winners Comics (1941) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12566",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12566/all-winners_comics_1941_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4555&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3172",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL WINNERS COMICS VOL. 1 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1941-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4bc3783bcc0d3",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4bc3783bcc0d3",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12566/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1456",
                    "name": "Jack Binder",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
                    "name": "Jack Kirby",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
                    "name": "Stan Lee",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/947",
                    "name": "Joe Simon",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1306",
                    "name": "Paul Reinman",
                    "role": "inker"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12566/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 4
        },
        "stories": {
            "available": 10,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12566/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9124",
                    "name": "Cover #9124",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9125",
                    "name": "Carnival of Death!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9126",
                    "name": "The Strange Case of the Malay Idol",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9127",
                    "name": "[Bombs of Doom]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9128",
                    "name": "Winners All",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9129",
                    "name": "[Plague of the Poisoned Jewelry]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9130",
                    "name": "Unsolved Mysteries",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9131",
                    "name": "The Ghost Fleet",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186891",
                    "name": "cover from All-Winners Comics (1941) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186892",
                    "name": "story from All-Winners Comics (1941) #2",
                    "type": "interiorStory"
                }
            ],
            "returned": 10
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12566/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12569,
        "digitalId": 4557,
        "title": "All-Winners Comics (1941) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12569",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12569/all-winners_comics_1941_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4557&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3172",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL WINNERS COMICS VOL. 1 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1942-03-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc37845b3ced",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc37845b3ced",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12569/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1358",
                    "name": "Al Avison",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/408",
                    "name": "Carl Burgos",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1355",
                    "name": "Howard James",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1449",
                    "name": "George Klein",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1357",
                    "name": "Harry Sahle",
                    "role": "inker"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12569/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12569/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9148",
                    "name": "Cover #9148",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9149",
                    "name": "The Terror of the Slimy Japs!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9150",
                    "name": "The Sorceror's Sinister Secret!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9151",
                    "name": "Crime On the Rampage",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9152",
                    "name": "Miser's Gold!",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9153",
                    "name": "Sub-Mariner Combats the Sinister Horde!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9154",
                    "name": "Death To the Nazi Scourge!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186895",
                    "name": "cover from All-Winners Comics (1941) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186896",
                    "name": "story from All-Winners Comics (1941) #4",
                    "type": "interiorStory"
                }
            ],
            "returned": 9
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12569/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12558,
        "digitalId": 10891,
        "title": "All-Winners Comics (1941) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": null,
        "modified": "2015-10-15T11:09:49-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 52,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12558",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12558/all-winners_comics_1941_12?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10891&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1944-04-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-01-01T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/10/4bb47aa24ac10",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/10/4bb47aa24ac10",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12558/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12558/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                    "name": "Red Skull"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 4
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12558/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9074",
                    "name": "The Beachhead Blitz",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9075",
                    "name": "The Horror of the Ghost Fiend",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9076",
                    "name": "The Four Trials of Justice",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9077",
                    "name": "Ashes",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9078",
                    "name": "Smash the Tunnel of Terror",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9079",
                    "name": "The Beachhead Blitz",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146459",
                    "name": "story from All-Winners Comics (1941) #12",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12558/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12571,
        "digitalId": 4558,
        "title": "All-Winners Comics (1941) #6",
        "issueNumber": 6,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12571",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12571/all-winners_comics_1941_6?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4558&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/5135",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 2 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1942-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bc3784a8a401",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bc3784a8a401",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12571/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13313",
                    "name": "Ed Ashe",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1449",
                    "name": "George Klein",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1442",
                    "name": "Ed Robbins",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5323",
                    "name": "Fred Bell",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13314",
                    "name": "Carl Pfeuffer",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1181",
                    "name": "Mike Sekowsky",
                    "role": "penciler"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12571/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 10,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12571/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9162",
                    "name": "Cover #9162",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9163",
                    "name": "Hot Stamp Mob",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9164",
                    "name": "The Stone-Man Slayer",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9165",
                    "name": "The Woim Toins",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9166",
                    "name": "Interior #9166",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9167",
                    "name": "Interior #9167",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9168",
                    "name": "Spies Use Their Heads",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9169",
                    "name": "Man In The Moon",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146452",
                    "name": "cover from All-Winners Comics (1941) #6",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146453",
                    "name": "story from All-Winners Comics (1941) #6",
                    "type": "interiorStory"
                }
            ],
            "returned": 10
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12571/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12556,
        "digitalId": 10889,
        "title": "All-Winners Comics (1941) #10",
        "issueNumber": 10,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 60,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12556",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12556/all-winners_comics_1941_10?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10889&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1943-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4bb540b0d4880",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4bb540b0d4880",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12556/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12556/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12556/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9060",
                    "name": "Cover #9060",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9061",
                    "name": "Bloody Talons of the Feathered Fiends",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9062",
                    "name": "Kioto, the Mad Jap",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9063",
                    "name": "Alibi For Grim Deceit",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9064",
                    "name": "[The Rescue of the Partisan's Sister]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9065",
                    "name": "The Terror of Triple Destruction",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146457",
                    "name": "story from All-Winners Comics (1941) #10",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12556/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12573,
        "digitalId": 4560,
        "title": "All-Winners Comics (1941) #8",
        "issueNumber": 8,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12573",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12573/all-winners_comics_1941_8?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4560&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/5135",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 2 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1943-04-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/4bc3785499f26",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/4bc3785499f26",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12573/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13313",
                    "name": "Ed Ashe",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1449",
                    "name": "George Klein",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13315",
                    "name": "Mort Leav",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13314",
                    "name": "Carl Pfeuffer",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1351",
                    "name": "Bob Powell",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1358",
                    "name": "Al Avison",
                    "role": "penciler"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12573/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12573/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9176",
                    "name": "Cover #9176",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9177",
                    "name": "Invasion of Ice",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9178",
                    "name": "[The Plot To Kill MacArthur]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9179",
                    "name": "Sub-Mariner Changes the Face of the Earth",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9180",
                    "name": "[To Hitler, From Hell]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9181",
                    "name": "Holdup!  Robbery!  Murder!",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146455",
                    "name": "story from All-Winners Comics (1941) #8",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12573/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12560,
        "digitalId": 10893,
        "title": "All-Winners Comics (1941) #14",
        "issueNumber": 14,
        "variantDescription": "",
        "description": null,
        "modified": "2020-08-27T12:36:49-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12560",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12560/all-winners_comics_1941_14?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10893&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1944-11-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-01-01T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3eaa781f686",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3eaa781f686",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12560/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12560/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12560/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9086",
                    "name": "Cover #9086",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9087",
                    "name": "Twenty Million Missing",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9088",
                    "name": "Monstro, the Mad Jap",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9089",
                    "name": "Hill-Billy Tactics",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9090",
                    "name": "Kidnapper's Folly",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146461",
                    "name": "story from All-Winners Comics (1941) #14",
                    "type": "interiorStory"
                }
            ],
            "returned": 6
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12560/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12568,
        "digitalId": 4556,
        "title": "All-Winners Comics (1941) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12568",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12568/all-winners_comics_1941_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4556&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3172",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL WINNERS COMICS VOL. 1 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1941-12-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc37840b65cc",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc37840b65cc",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12568/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/297",
                    "name": "Bill Everett",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1493",
                    "name": "Chad Grothkopf",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1449",
                    "name": "George Klein",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
                    "name": "Stan Lee",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1181",
                    "name": "Mike Sekowsky",
                    "role": "penciler"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12568/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12568/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9141",
                    "name": "Cover #9141",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9142",
                    "name": "Case of the Black Dragon Society",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9143",
                    "name": "The Canvas of Doom!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9144",
                    "name": "Terror Prison",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9145",
                    "name": "Jungle Drums",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9146",
                    "name": "The Ship of Horrors",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9147",
                    "name": "The Secret Tunnel of Death!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186893",
                    "name": "cover from All-Winners Comics (1941) #3",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186894",
                    "name": "story from All-Winners Comics (1941) #3",
                    "type": "interiorStory"
                }
            ],
            "returned": 9
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12568/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12559,
        "digitalId": 10892,
        "title": "All-Winners Comics (1941) #13",
        "issueNumber": 13,
        "variantDescription": "",
        "description": null,
        "modified": "2020-08-27T12:36:28-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12559",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12559/all-winners_comics_1941_13?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10892&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1944-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-01-01T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/f0/5f3eaa76a3da3",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/f0/5f3eaa76a3da3",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12559/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12559/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12559/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9080",
                    "name": "Cover #9080",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9081",
                    "name": "The Case of the Masked Strangler",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9082",
                    "name": "Gardens of Doom",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9083",
                    "name": "Hoofs of Doom",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9084",
                    "name": "Waterfront Terror",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9085",
                    "name": "The Maze of Madness",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146460",
                    "name": "story from All-Winners Comics (1941) #13",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12559/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12570,
        "digitalId": 1331,
        "title": "All-Winners Comics (1941) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12570",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12570/all-winners_comics_1941_5?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1331&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/5135",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 2 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1942-06-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/4bc3361b292ef",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/4bc3361b292ef",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12570/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13313",
                    "name": "Ed Ashe",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1506",
                    "name": "Red Holmdale",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1355",
                    "name": "Howard James",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1513",
                    "name": "Lou Paige",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1356",
                    "name": "John Forte",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13314",
                    "name": "Carl Pfeuffer",
                    "role": "penciler"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12570/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12570/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9155",
                    "name": "Cover #9155",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9156",
                    "name": "Invading the Nazis' Secret Plan",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9157",
                    "name": "The Vampire Strikes",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9158",
                    "name": "Speed On the Rampage",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9159",
                    "name": "?",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9160",
                    "name": "The Hermit's Island of Glittering Gold",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9161",
                    "name": "The Demon's Deadly Secret",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146451",
                    "name": "story from All-Winners Comics (1941) #5",
                    "type": "interiorStory"
                }
            ],
            "returned": 8
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12570/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12557,
        "digitalId": 10890,
        "title": "All-Winners Comics (1941) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 60,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12557",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12557/all-winners_comics_1941_11?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10890&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22608",
                "name": "Marvel Masterworks: Golden Age All-Winners Vol. 3 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22609",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 3 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1943-11-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4bb554ea4de9c",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4bb554ea4de9c",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12557/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12557/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12557/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9066",
                    "name": "Cover #9066",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9067",
                    "name": "Sky Demons Over America",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9068",
                    "name": "The Case of the Yellow Fire Monster",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9069",
                    "name": "Terror In Tokyo",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9070",
                    "name": "Return Engagement",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9071",
                    "name": "[The Real Hitler]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9072",
                    "name": "The Mystery of the Ghost Killer",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9073",
                    "name": "[The Three Chances of Cadet Cox]",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146458",
                    "name": "story from All-Winners Comics (1941) #11",
                    "type": "interiorStory"
                }
            ],
            "returned": 9
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12557/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12572,
        "digitalId": 4559,
        "title": "All-Winners Comics (1941) #7",
        "issueNumber": 7,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12572",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12572/all-winners_comics_1941_7?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4559&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/5135",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL-WINNERS VOL. 2 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1942-11-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/4bc3784f67a15",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/4bc3784f67a15",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12572/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13313",
                    "name": "Ed Ashe",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1495",
                    "name": "Louis Ferstadt",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13315",
                    "name": "Mort Leav",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13314",
                    "name": "Carl Pfeuffer",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12572/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12572/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9170",
                    "name": "Cover #9170",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9171",
                    "name": "Death For Breakfast",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9172",
                    "name": "Return of Doctor Crime",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9173",
                    "name": "Smashing the Jap Trap",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9174",
                    "name": "",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9175",
                    "name": "",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146454",
                    "name": "story from All-Winners Comics (1941) #7",
                    "type": "interiorStory"
                }
            ],
            "returned": 7
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12572/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12555,
        "digitalId": 1330,
        "title": "All-Winners Comics (1941) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": null,
        "modified": "2013-03-06T08:54:26-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12555",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12555/all-winners_comics_1941_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1330&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3172",
                "name": "MARVEL MASTERWORKS: GOLDEN AGE ALL WINNERS COMICS VOL. 1 HC (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1941-06-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bc38112ca3bf",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bc38112ca3bf",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12555/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1358",
                    "name": "Al Avison",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
                    "name": "Jack Kirby",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/408",
                    "name": "Carl Burgos",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/297",
                    "name": "Bill Everett",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1439",
                    "name": "Al Gabriele",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1491",
                    "name": "Ed Winiarski",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
                    "name": "Stan Lee",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/947",
                    "name": "Joe Simon",
                    "role": "writer"
                }
            ],
            "returned": 8
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12555/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                    "name": "Archangel"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12555/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9053",
                    "name": "Cover #9053",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9054",
                    "name": "Carnival of Fiends",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9055",
                    "name": "The Order of the Hood",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9056",
                    "name": "The Case of the Hollow Men",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9057",
                    "name": "All Winners",
                    "type": "text story"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9058",
                    "name": "[The Torpedo Boat Terror]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/9059",
                    "name": "The Case of the Mad Gargoyle",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186889",
                    "name": "cover from All-Winners Comics (1941) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186890",
                    "name": "story from All-Winners Comics (1941) #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 9
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12555/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 29737,
        "digitalId": 24276,
        "title": "All-Winners Squad: Band of Heroes (2011) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": "Operation: Firefly - a project so top-secret, not even Captain America was briefed. But how did it involve the super-powered soldiers of the U.S. Army? And why is it still a mystery in the present day? Guest-starring Captain America!",
        "modified": "2011-10-13T15:41:28-0400",
        "isbn": "",
        "upc": "5960607063-00511",
        "diamondCode": "AUG110620",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Guest-starring Captain America! One of the biggest initiatives of World War II was Operation: Firefly - a project so top-secret, not even Captain America was briefed. But how did it involve the super-powered soldiers of the U.S. Army? And why is it still a mystery in the present day, when Cap, its own survivors, and even Loki, the Norse god of mischief, are all looking for answers? By Paul Jenkins (X-MEN: PRELUDE TO SCHISM) and Carmine Di Giandomenico (INVINCIBLE IRON MAN)."
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Operation: Firefly - a project so top-secret, not even Captain America was briefed. But how did it involve the super-powered soldiers of the U.S. Army? And why is it still a mystery in the present day? Guest-starring Captain America!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29737",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/29737/all-winners_squad_band_of_heroes_2011_5?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-Winners-Squad-Band-of-Heroes-5/digital-comic/24276?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=24276&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/24276?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-10-12T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-09-28T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-04-24T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-11-15T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/4e860f105f205",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/4e860f105f205",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4e244ffd6492a",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29737/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/827",
                    "name": "Carmine DI Giandomenico",
                    "role": "Other"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
                    "name": "Paul Jenkins",
                    "role": "Other"
                }
            ],
            "returned": 2
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29737/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29737/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64620",
                    "name": "Band of Heroes (2011) #5",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64621",
                    "name": "Interior #64621",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29737/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 29735,
        "digitalId": 23311,
        "title": "All-Winners Squad: Band of Heroes (2011) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": "Discover the shocking truth behind the World War II adventures of Marvel's original heroes, as Captain America, Bucky, and the valiant men of the military's all-superhuman squadron give all to defeat the Axis! But a sinister secret lies behind their mission...and it takes no less a meddler than Loki, the God of Trickery, to bring it to light!",
        "modified": "2011-08-05T16:17:36-0400",
        "isbn": "",
        "upc": "5960607063-00311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Discover the shocking truth behind the World War II adventures of Marvel's original heroes, as Captain America, Bucky, and the valiant men of the military's all-superhuman squadron give all to defeat the Axis! But a sinister secret lies behind their mission...and it takes no less a meddler than Loki, the God of Trickery, to bring it to light!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29735",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/29735/all-winners_squad_band_of_heroes_2011_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-Winners-Squad-Band-of-Heroes-3/digital-comic/23311?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=23311&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/23311?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-08-10T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-07-27T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-04-17T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-09-13T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/50/56b21f4988287",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/50/56b21f4988287",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29735/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/827",
                    "name": "Carmine DI Giandomenico",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
                    "name": "Paul Jenkins",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1372",
                    "name": "Mico Suayan",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 3
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29735/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009407",
                    "name": "Loki"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29735/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64616",
                    "name": "Cover #64616",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64617",
                    "name": "Interior #64617",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29735/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 29733,
        "digitalId": 22207,
        "title": "All-Winners Squad: Band of Heroes (2011) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "It's World War II super-action as Captain America heads up a top-secret, all-hero unit of the U.S. military! But a mystery surrounding the Band of Heroes rears its ugly head in the present...and you won't believe how deep it goes.",
        "modified": "2011-07-01T14:50:11-0400",
        "isbn": "",
        "upc": "5960607063-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "It's World War II super-action as Captain America heads up a top-secret, all-hero unit of the U.S. military! But a mystery surrounding the Band of Heroes rears its ugly head in the present...and you won't believe how deep it goes. Join the wartime adventures of the toughest, most exceptional band of soldiers in American military history, in this series by acclaimed writer Paul Jenkins (SENTRY: FALLEN SUN) and rising star Carmine Di Giandomenico (INVINCIBLE IRON MAN ANNUAL, IRON MAN 2.0)!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "It's World War II super-action as Captain America heads up a top-secret, all-hero unit of the U.S. military! But a mystery surrounding the Band of Heroes rears its ugly head in the present...and you won't believe how deep it goes."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29733",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/29733/all-winners_squad_band_of_heroes_2011_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-Winners-Squad-Band-of-Heroes-1/digital-comic/22207?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=22207&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/22207?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-06-29T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-06-14T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-04-17T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-08-02T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/56b21c9d2baf9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/56b21c9d2baf9",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4de5521e0973d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/90/4de551c3bb23a",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4de55167aafca",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/4de54f498b830",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4de54e1297a65",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29733/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8000",
                    "name": "Alejandro Arbona",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/827",
                    "name": "Carmine DI Giandomenico",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
                    "name": "Paul Jenkins",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1372",
                    "name": "Mico Suayan",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29733/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29733/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64613",
                    "name": "Interior #64613",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/79544",
                    "name": "All-Winners Squad: Band of Heroes #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/79545",
                    "name": "Cover #79545",
                    "type": "cover"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29733/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 29734,
        "digitalId": 22516,
        "title": "All-Winners Squad: Band of Heroes (2011) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "The super-powered veterans of World War II are facing a deadly mystery and it goes all the way back to the top-secret missions they ran behind enemy lines under Captain America's command!",
        "modified": "2013-03-06T10:11:52-0500",
        "isbn": "",
        "upc": "5960607063-00211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The super-powered veterans of World War II are facing a deadly mystery...and it goes all the way back to the top-secret missions they ran behind enemy lines under Captain America's command! Help in unraveling the mystery will come from a very tricky source - and nothing is what it seems!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The super-powered veterans of World War II are facing a deadly mystery and it goes all the way back to the top-secret missions they ran behind enemy lines under Captain America's command!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29734",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/29734/all-winners_squad_band_of_heroes_2011_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-Winners-Squad-Band-of-Heroes-2/digital-comic/22516?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=22516&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/22516?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-07-13T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-06-28T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-04-17T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-08-23T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/56b21e81a4487",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/56b21e81a4487",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29734/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8000",
                    "name": "Alejandro Arbona",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/827",
                    "name": "Carmine DI Giandomenico",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
                    "name": "Paul Jenkins",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1372",
                    "name": "Mico Suayan",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29734/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29734/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64614",
                    "name": "Cover #64614",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64615",
                    "name": "Interior #64615",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29734/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 29736,
        "digitalId": 23865,
        "title": "All-Winners Squad: Band of Heroes (2011) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "America's heroes at war! Slo-Mo discovers a secret among his band of brothers that threatens to unravel everything. Why does it remain a mystery today?",
        "modified": "2012-04-23T10:28:09-0400",
        "isbn": "",
        "upc": "5960607063-00411",
        "diamondCode": "JUL110642",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "America's heroes at war! Slo-Mo discovers a secret among his band of brothers that threatens to unravel everything. And why does it remain a mystery today? By Paul Jenkins (THOR: HEAVEN & EARTH) and Carmine Di Giandomenico (INVINCIBLE IRON MAN)!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "America's heroes at war! Slo-Mo discovers a secret among his band of brothers that threatens to unravel everything. Why does it remain a mystery today?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29736",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/29736/all-winners_squad_band_of_heroes_2011_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/All-Winners-Squad-Band-of-Heroes-4/digital-comic/23865?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=23865&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/23865?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-09-14T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-08-31T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-04-24T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-10-18T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/4e67d3485e69f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/4e67d3485e69f",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/70/4e67d27f579ec",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/4e67d1d469d14",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4dee854af3a27",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29736/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/827",
                    "name": "Carmine DI Giandomenico",
                    "role": "Penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
                    "name": "Paul Jenkins",
                    "role": "Writer"
                }
            ],
            "returned": 2
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29736/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29736/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64618",
                    "name": "All Winners Squad: Band of Heroes (2011) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/64619",
                    "name": "All Winners Squad: Band of Heroes (2011) #4 - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/29736/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12651,
        "digitalId": 0,
        "title": "Alpha Flight (1983) #111",
        "issueNumber": 111,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12651",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12651/alpha_flight_1983_111?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1992-08-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
        },
        "images": [],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12651/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1185",
                    "name": "Pat Broderick",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/368",
                    "name": "Simon Furman",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1420",
                    "name": "Bruce Patterson",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 17,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12651/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                    "name": "Archangel"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009163",
                    "name": "Aurora"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
                    "name": "Human Torch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009476",
                    "name": "Northstar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009504",
                    "name": "Professor X"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009513",
                    "name": "Puck"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009560",
                    "name": "Sasquatch (Walter Langkowski)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
                    "name": "Scarlet Witch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
                    "name": "Shaman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009583",
                    "name": "She-Hulk (Jennifer Walters)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009646",
                    "name": "Talisman (Elizabeth Twoyoungmen)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009652",
                    "name": "Thanos"
                }
            ],
            "returned": 17
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12651/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21127",
                    "name": "Weapon Omega vs. Himself?!",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21128",
                    "name": "Bare Bones Part II",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146507",
                    "name": "cover from Alpha Flight (1983) #111",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146508",
                    "name": "story from Alpha Flight (1983) #111",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12651/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                    "name": "Infinity War"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 12700,
        "digitalId": 42003,
        "title": "Alpha Flight (1983) #39",
        "issueNumber": 39,
        "variantDescription": "",
        "description": "Atlantis is under the thrall of the warlord Attuma! Namor the Sub-Mariner, the rightful ruler of Atlantis, recruits Alpha Flight to help him take it back! And they'll have help doing it, from none other than Earth's Mightiest heroes, the Avengers!",
        "modified": "2017-06-13T16:19:07-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Atlantis is under the thrall of the warlord Attuma! Namor the Sub-Mariner, the rightful ruler of Atlantis, recruits Alpha Flight to help him take it back! And they'll have help doing it, from none other than Earth's Mightiest heroes, the Avengers!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12700",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12700/alpha_flight_1983_39?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=42003&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1986-10-10T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2017-06-19T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0.75
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/5941b9efcb596",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/5941b9efcb596",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12700/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13769",
                    "name": "Bill Mantlo",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1926",
                    "name": "Mike Mignola",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10824",
                    "name": "Whilce Portacio",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1235",
                    "name": "Craig Russell",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1863",
                    "name": "Carl Potts",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6588",
                    "name": "David Ross",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 8
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12700/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011758",
                    "name": "Attuma"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
                    "name": "Sub-Mariner"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12700/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21234",
                    "name": "Cover #21234",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21235",
                    "name": "The Invasion of Atlantis",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12700/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12650,
        "digitalId": 0,
        "title": "Alpha Flight (1983) #110",
        "issueNumber": 110,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12650",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12650/alpha_flight_1983_110?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1992-07-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
        },
        "images": [],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12650/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1185",
                    "name": "Pat Broderick",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/368",
                    "name": "Simon Furman",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2261",
                    "name": "Chris Ivy",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1420",
                    "name": "Bruce Patterson",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 11,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12650/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009163",
                    "name": "Aurora"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009186",
                    "name": "Black Knight (Sir Percy of Scandia)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009343",
                    "name": "Hercules"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009476",
                    "name": "Northstar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009513",
                    "name": "Puck"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009560",
                    "name": "Sasquatch (Walter Langkowski)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009646",
                    "name": "Talisman (Elizabeth Twoyoungmen)"
                }
            ],
            "returned": 11
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12650/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21125",
                    "name": "Meet the All-New All-Deadly Omega Flight",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21126",
                    "name": "Bare Bones",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146505",
                    "name": "cover from Alpha Flight (1983) #110",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146506",
                    "name": "story from Alpha Flight (1983) #110",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12650/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                    "name": "Infinity War"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 12668,
        "digitalId": 55922,
        "title": "Alpha Flight (1983) #127",
        "issueNumber": 127,
        "variantDescription": "",
        "description": null,
        "modified": "2021-01-06T12:34:04-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12668/alpha_flight_1983_127?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=55922&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1993-12-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2021-01-07T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/5ff5ed13191af",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/5ff5ed13191af",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12668/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3404",
                    "name": "Dario Carrasco Jr.",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/368",
                    "name": "Simon Furman",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/558",
                    "name": "Mark Mckenna",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1420",
                    "name": "Bruce Patterson",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1267",
                    "name": "Keith Pollard",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 20,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12668/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009163",
                    "name": "Aurora"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                    "name": "Daredevil"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009306",
                    "name": "Firestar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009476",
                    "name": "Northstar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009513",
                    "name": "Puck"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009560",
                    "name": "Sasquatch (Walter Langkowski)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
                    "name": "Shaman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009583",
                    "name": "She-Hulk (Jennifer Walters)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
                    "name": "Storm"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009646",
                    "name": "Talisman (Elizabeth Twoyoungmen)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009697",
                    "name": "Vision"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009719",
                    "name": "Wonder Man"
                }
            ],
            "returned": 20
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12668/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21164",
                    "name": "Alpha Flight #127",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21165",
                    "name": "Faith!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21166",
                    "name": "Blind Fury",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/209493",
                    "name": "story from Alpha Flight (1983) #127",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12668/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 12637,
        "digitalId": 1332,
        "title": "Alpha Flight (1983) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Introducing Canada's premiere superhero team, Alpha Flight, as they take on the dimensional beast Tundra!\n",
        "modified": "2016-04-26T17:23:23-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 52,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Introducing Canada's premiere superhero team, Alpha Flight, as they take on the dimensional beast Tundra!\n"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/12637/alpha_flight_1983_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Alpha-Flight-1/digital-comic/1332?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1332&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/1332?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
                "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1983-08-10T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-01-22T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/04/5bd9a9d95efc9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/04/5bd9a9d95efc9",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12637/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
                    "name": "Terry Kevin Austin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1827",
                    "name": "John Byrne",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1226",
                    "name": "Dennis Oneil",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1759",
                    "name": "Joe Rosen",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2036",
                    "name": "Andy Yanchus",
                    "role": "colorist"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 17,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12637/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
                    "name": "Alpha Flight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009163",
                    "name": "Aurora"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                    "name": "Daredevil"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
                    "name": "Invisible Woman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
                    "name": "Mr. Fantastic"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009472",
                    "name": "Nightcrawler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009476",
                    "name": "Northstar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009513",
                    "name": "Puck"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009560",
                    "name": "Sasquatch (Walter Langkowski)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
                    "name": "Shaman"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009606",
                    "name": "Snowbird"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
                    "name": "Thing"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009695",
                    "name": "Vindicator"
                }
            ],
            "returned": 17
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12637/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21096",
                    "name": "Alpha Flight (1983) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/21097",
                    "name": "Tundra!",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/12637/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23248,
        "digitalId": 11912,
        "title": "Amazing Adventures (1970) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23248",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23248/amazing_adventures_1970_12?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11912&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1972-05-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/4bb53ab5bd79f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/4bb53ab5bd79f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23248/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/955",
                    "name": "Mike Ploog",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13093",
                    "name": "Art Simek",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23248/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23248/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51610",
                    "name": "One Avenger: Dead on Arrival!",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51611",
                    "name": "Iron Man:  D.O.A.",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146522",
                    "name": "cover from Amazing Adventures (1970) #12",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146523",
                    "name": "story from Amazing Adventures (1970) #12",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23248/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23250,
        "digitalId": 11914,
        "title": "Amazing Adventures (1970) #14",
        "issueNumber": 14,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23250",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23250/amazing_adventures_1970_14?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11914&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1972-09-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bb53c3ecc9a6",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bb53c3ecc9a6",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23250/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1746",
                    "name": "John Costanza",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/389",
                    "name": "Jim Mooney",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23250/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23250/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51614",
                    "name": "Behind the Mask...a Monster!",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51615",
                    "name": "The Vampire Machine",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146524",
                    "name": "cover from Amazing Adventures (1970) #14",
                    "type": "cover"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23250/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23252,
        "digitalId": 11916,
        "title": "Amazing Adventures (1970) #16",
        "issueNumber": 16,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23252",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23252/amazing_adventures_1970_16?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11916&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1973-01-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/a0/4bb53aad3b08f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/a0/4bb53aad3b08f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23252/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/106",
                    "name": "Bob Brown",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2136",
                    "name": "Frank Mclaughlin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1872",
                    "name": "Glynis Oliver",
                    "role": "colorist"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23252/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009382",
                    "name": "Juggernaut"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23252/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51618",
                    "name": "Cover #51618",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51619",
                    "name": "And the Juggernaut Will Get You If You Don't Watch Out",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23252/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23247,
        "digitalId": 20545,
        "title": "Amazing Adventures (1970) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": null,
        "modified": "2010-11-01T15:42:28-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23247",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23247/amazing_adventures_1970_11?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=20545&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1972-03-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2014-05-28T16:14:12-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/70/5ed6abbe592bf",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/70/5ed6abbe592bf",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23247/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/954",
                    "name": "Gerry Conway",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1553",
                    "name": "Sam Rosen",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1256",
                    "name": "Syd Shores",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23247/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23247/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51608",
                    "name": "Cover #51608",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51609",
                    "name": "Lo!  A Beast Is Born",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186932",
                    "name": "cover from Amazing Adventures (1970) #11",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/186933",
                    "name": "story from Amazing Adventures (1970) #11",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23247/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23249,
        "digitalId": 11913,
        "title": "Amazing Adventures (1970) #13",
        "issueNumber": 13,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23249",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23249/amazing_adventures_1970_13?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11913&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1972-07-01T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4bb53c4c253e0",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4bb53c4c253e0",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23249/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1746",
                    "name": "John Costanza",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1519",
                    "name": "Frank Giacoia",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23249/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009434",
                    "name": "Mastermind"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009687",
                    "name": "Unus"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23249/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51612",
                    "name": "Cover #51612",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51613",
                    "name": "Evil Is All In Your Mind!",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23249/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23251,
        "digitalId": 11915,
        "title": "Amazing Adventures (1970) #15",
        "issueNumber": 15,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23251",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23251/amazing_adventures_1970_15?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11915&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1972-11-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4bb59cad73f3f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4bb59cad73f3f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23251/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1519",
                    "name": "Frank Giacoia",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1529",
                    "name": "John Tartaglione",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciler"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23251/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                }
            ],
            "returned": 1
        },
        "stories": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23251/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51616",
                    "name": "The Coming of...The Griffin!",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51617",
                    "name": "Murder In Mid-Air",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146525",
                    "name": "cover from Amazing Adventures (1970) #15",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146526",
                    "name": "story from Amazing Adventures (1970) #15",
                    "type": "interiorStory"
                }
            ],
            "returned": 4
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23251/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23253,
        "digitalId": 11917,
        "title": "Amazing Adventures (1970) #17",
        "issueNumber": 17,
        "variantDescription": "",
        "description": null,
        "modified": "2018-05-25T09:26:57-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23253",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23253/amazing_adventures_1970_17?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=11917&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22417",
                "name": "Marvel Masterworks: The X-Men Vol. 7 (Hardcover)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1973-03-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-10-09T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4bb4deae9574c",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4bb4deae9574c",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23253/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/104",
                    "name": "Steve Englehart",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1295",
                    "name": "Mike Esposito",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/146",
                    "name": "Jim Starlin",
                    "role": "penciler"
                }
            ],
            "returned": 3
        },
        "characters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23253/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 2
        },
        "stories": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23253/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51620",
                    "name": "Origin of the Beast!",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51621",
                    "name": "Birth of the Beast",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51622",
                    "name": "[A Beast Is Born]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51623",
                    "name": "[This Boy, This Bombshell]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51624",
                    "name": "[The Lure of the Beast-Nappers]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51625",
                    "name": "[The Crimes of the Conquistador]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51626",
                    "name": "[Welcome To the Club, Beast]",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146527",
                    "name": "cover from Amazing Adventures (1970) #17",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/146528",
                    "name": "story from Amazing Adventures (1970) #17",
                    "type": "interiorStory"
                }
            ],
            "returned": 9
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23253/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 71246,
        "digitalId": 0,
        "title": "Amazing Fantasy (2021) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": null,
        "modified": "2021-04-02T09:02:57-0400",
        "isbn": "",
        "upc": "75960609104100211",
        "diamondCode": "JUN210606",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/71246",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/71246/amazing_fantasy_2021_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Fantasy-2/digital-comic/57153?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/25984",
            "name": "Amazing Fantasy (2021 - Present)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95955",
                "name": "Amazing Fantasy (2021) #2 (Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95957",
                "name": "Amazing Fantasy (2021) #2 (Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95956",
                "name": "Amazing Fantasy (2021) #2 (Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2021-08-25T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2021-08-02T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 4.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/60e5e1550f50e",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/60e5e1550f50e",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71246/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                    "name": "Kaare Andrews",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                }
            ],
            "returned": 3
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71246/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71246/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158468",
                    "name": "cover from Amazing Fantasy (2029) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158469",
                    "name": "story from Amazing Fantasy (2029) #2",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71246/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 71245,
        "digitalId": 57024,
        "title": "Amazing Fantasy (2021) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": null,
        "modified": "2021-04-02T09:02:53-0400",
        "isbn": "",
        "upc": "75960609104100111",
        "diamondCode": "MAY210478",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/71245",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/71245/amazing_fantasy_2021_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Fantasy-1/digital-comic/57024?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=57024&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/57024?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/25984",
            "name": "Amazing Fantasy (2021 - Present)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95522",
                "name": "Amazing Fantasy (2021) #1 (Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95521",
                "name": "Amazing Fantasy (2021) #1 (Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/95523",
                "name": "Amazing Fantasy (2021) #1 (Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2021-07-28T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2021-06-28T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2021-11-01T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2021-07-28T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 4.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 4.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/60fad35951e29",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/60fad35951e29",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71245/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                    "name": "Kaare Andrews",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                }
            ],
            "returned": 3
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71245/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71245/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158466",
                    "name": "cover from Amazing Fantasy (2029) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158467",
                    "name": "story from Amazing Fantasy (2029) #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71245/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 71248,
        "digitalId": 0,
        "title": "Amazing Fantasy (2021) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": null,
        "modified": "2021-07-03T09:03:10-0400",
        "isbn": "",
        "upc": "75960609104100411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/71248",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/71248/amazing_fantasy_2021_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Fantasy-4/digital-comic/57764?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/25984",
            "name": "Amazing Fantasy (2021 - Present)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/96126",
                "name": "Amazing Fantasy (2021) #4 (Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/97893",
                "name": "Amazing Fantasy (2021) #4 (Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2021-11-03T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2021-10-04T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 4.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/03/6169ef0892110",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/03/6169ef0892110",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71248/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                    "name": "Kaare Andrews",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/582",
                    "name": "Brian Reber",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                    "name": "Vc Joe Sabino",
                    "role": "letterer"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71248/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
                    "name": "Black Widow"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71248/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158472",
                    "name": "cover from Amazing Fantasy (2029) #4",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/158473",
                    "name": "story from Amazing Fantasy (2029) #4",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/71248/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 35876,
        "digitalId": 0,
        "title": "Amazing Spider-Man (1999) #646 (RIVERA VARIANT)",
        "issueNumber": 646,
        "variantDescription": "RIVERA VARIANT",
        "description": "THE HEARTBREAKING CONCLUSION OF ORIGIN OF THE SPECIES! The odds are stacked against Spider-Man as he and Harry Osborn fight side-by-side in a battle to save Harry's child.  The people Peter Parker cares about most are in danger, and someone won't live to tell the tale! Save everyone; never insist on resting!\nRated A $2.99",
        "modified": "2011-09-20T11:47:41-0400",
        "isbn": "",
        "upc": "5960604716-64621",
        "diamondCode": "AUG100557",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HEARTBREAKING CONCLUSION OF ORIGIN OF THE SPECIES! The odds are stacked against Spider-Man as he and Harry Osborn fight side-by-side in a battle to save Harry's child.  The people Peter Parker cares about most are in danger, and someone won't live to tell the tale! Save everyone; never insist on resting!\nRated A $2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35876",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/35876/amazing_spider-man_1999_646_rivera_variant/rivera_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/30321",
                "name": "Amazing Spider-Man (1999) #646"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/36717",
                "name": "Amazing Spider-Man (1999) #646 (VAMPIRE VARIANT)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-10-27T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-10-07T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4e78b5c5c4066",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4e78b5c5c4066",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35876/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/465",
                    "name": "Paul Azaceta",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                    "name": "Tom Brennan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
                    "name": "Mark Waid",
                    "role": "writer"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35876/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009276",
                    "name": "Doctor Octopus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009486",
                    "name": "Harry Osborn"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009404",
                    "name": "Lizard"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011241",
                    "name": "Menace"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35876/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/79439",
                    "name": "Interior #79439",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/94767",
                    "name": "Amazing Spider-Man (1999) #646, RIVERA VARIANT",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35876/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 2069,
        "digitalId": 1416,
        "title": "Amazing Spider-Man (1999) #521",
        "issueNumber": 521,
        "variantDescription": "",
        "description": "Spidey just can't seem to catch a break these days. He's got a great new pad and a cool new clique - so what's the big problem?  Oh, not much-- just a nefarious worldwide organization with an ingenious plan to conquer the world!  Hail HYDRA!",
        "modified": "2010-12-03T15:38:51-0500",
        "isbn": "",
        "upc": "5960604716-52111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Spidey just can't seem to catch a break these days. He's got a great new pad and a cool new clique - so what's the big problem?  Oh, not much-- just a nefarious worldwide organization with an ingenious plan to conquer the world!  Hail HYDRA!"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"MOVING UP\" \r\nSpidey just can't seem to catch a break these days. He's got a great new pad and a cool new clique - so what's the big problem?  Oh, not much-- just a nefarious worldwide organization with an ingenious plan to conquer the world!  Hail HYDRA!  Part 3 (of 6).\r\n32 PGS./T  Suggested for Teens and Up ...$2.50"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2069",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/2069/amazing_spider-man_1999_521?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-521/digital-comic/1416?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1416&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/1416?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3019",
                "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2005-06-29T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-11-12T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.5
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/56cde65f20251",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/56cde65f20251",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2069/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2069/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                    "name": "Hydra"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2069/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1167",
                    "name": "Amazing Spider-Man (1999) #521",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1168",
                    "name": "3 of 5 - New Avengers",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2069/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 36717,
        "digitalId": 0,
        "title": "Amazing Spider-Man (1999) #646 (VAMPIRE VARIANT)",
        "issueNumber": 646,
        "variantDescription": "VAMPIRE VARIANT",
        "description": "THE HEARTBREAKING CONCLUSION OF ORIGIN OF THE SPECIES! The odds are stacked against Spider-Man as he and Harry Osborn fight side-by-side in a battle to save Harry's child.  The people Peter Parker cares about most are in danger, and someone won't live to tell the tale! Save everyone; never insist on resting!\nRated A $2.99",
        "modified": "2011-09-20T11:35:49-0400",
        "isbn": "",
        "upc": "5960604716-64631",
        "diamondCode": "AUG100556",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HEARTBREAKING CONCLUSION OF ORIGIN OF THE SPECIES! The odds are stacked against Spider-Man as he and Harry Osborn fight side-by-side in a battle to save Harry's child.  The people Peter Parker cares about most are in danger, and someone won't live to tell the tale! Save everyone; never insist on resting!\nRated A $2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36717",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/36717/amazing_spider-man_1999_646_vampire_variant/vampire_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/30321",
                "name": "Amazing Spider-Man (1999) #646"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/35876",
                "name": "Amazing Spider-Man (1999) #646 (RIVERA VARIANT)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-10-27T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-10-07T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/4e78b3063925f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/4e78b3063925f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/36717/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/465",
                    "name": "Paul Azaceta",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                    "name": "Tom Brennan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
                    "name": "Mark Waid",
                    "role": "writer"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/36717/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009276",
                    "name": "Doctor Octopus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009486",
                    "name": "Harry Osborn"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009404",
                    "name": "Lizard"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011241",
                    "name": "Menace"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/36717/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/81447",
                    "name": "Interior #81447",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/94766",
                    "name": "Amazing Spider-Man (1999) #646, VAMPIRE VARIANT",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/36717/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 4431,
        "digitalId": 5024,
        "title": "Amazing Spider-Man (1999) #534",
        "issueNumber": 534,
        "variantDescription": "",
        "description": "CIVIL WAR TIE-IN!  Life couldn't be more complicated -- or more dangerous -- for Peter Parker.  Spider-Man has picked a side in the Civil War that's tearing apart the super hero community, and the decision has ripped apart some of his strongest bonds.  When one of the War's leaders comes to recruit Spidey for his troops, will Spidey stay true to that decision?",
        "modified": "2016-06-06T16:47:18-0400",
        "isbn": "",
        "upc": "5960604716-53411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "CIVIL WAR TIE-IN!  Life couldn't be more complicated -- or more dangerous -- for Peter Parker.  Spider-Man has picked a side in the Civil War that's tearing apart the super hero community, and the decision has ripped apart some of his strongest bonds.  When one of the War's leaders comes to recruit Spidey for his troops, will Spidey stay true to that decision?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "CIVIL WAR Tie-in!\r\n\"THE WAR AT HOME\" \r\nLife couldn't be more complicated -- or more dangerous -- for Peter Parker.  Spider-Man has picked a side in the Civil War that's tearing apart the super hero community, and the decision has ripped apart some of his strongest bonds.  When one of the War's leaders comes to recruit Spidey for his troops, will Spidey stay true to that decision?\r\nPart of 3 (of 6).\r\n32 PGS./Rated A ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4431",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/4431/amazing_spider-man_1999_534?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-534/digital-comic/5024?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5024&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/5024?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6445",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6167",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2006-07-26T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-04-06T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-11-25T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/56fd2cd1d3111",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/56fd2cd1d3111",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/4431/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/120",
                    "name": "Ron Garney",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                    "name": "Matt Milla",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
                    "name": "Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/523",
                    "name": "Bill Reinhold",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4",
                    "name": "J. Michael Straczynski",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/4431/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/4431/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1193",
                    "name": "Amazing Spider-Man (1999) #534",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1194",
                    "name": "3 of 6 - The War at Home",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/4431/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                    "name": "Civil War"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 38625,
        "digitalId": 0,
        "title": "Amazing Spider-Man (1999) #656 (CAPTAIN AMERICA 70TH ANNIVERSARY VARIANT)",
        "issueNumber": 656,
        "variantDescription": "CAPTAIN AMERICA 70TH ANNIVERSARY VARIANT",
        "description": "The debut of the NEW SPIDER-ARMOR!\nIf Spider-Man hopes to find a way to defeat his new nemesis MASSACRE, he'll need the help of his all new, all-power costume! But will protecting the people of New York mean that Spider-Man finally takes the last measure-- killing a bloodthirsty madman when there are no other options? (by the way, your first answer is wrong!)",
        "modified": "2011-03-15T01:31:50-0400",
        "isbn": "",
        "upc": "75960604716165621",
        "diamondCode": "JAN110723",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The debut of the NEW SPIDER-ARMOR!\nIf Spider-Man hopes to find a way to defeat his new nemesis MASSACRE, he'll need the help of his all new, all-power costume! But will protecting the people of New York mean that Spider-Man finally takes the last measure-- killing a bloodthirsty madman when there are no other options? (by the way, your first answer is wrong!)"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38625",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/38625/amazing_spider-man_1999_656_captain_america_70th_anniversary_variant/captain_america_70th_anniversary_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/40881",
                "name": "Amazing Spider-Man (1999) #656 (2nd Printing Variant  )"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/35520",
                "name": "Amazing Spider-Man (1999) #656"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-03-16T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/50/4e984ebf5529d",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/50/4e984ebf5529d",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/4d7a52f97c5f1",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38625/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13055",
                    "name": "Richard Isanove",
                    "role": "colorist (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/894",
                    "name": "Marcos Martin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13146",
                    "name": "Danny Miki",
                    "role": "inker (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13152",
                    "name": "Joe Quesada",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11038",
                    "name": "Muntsa Vicente",
                    "role": "colorist"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38625/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010873",
                    "name": "Paladin"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 4
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38625/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90115",
                    "name": "Amazing Spider-Man (1999) #656, Captain America 70th Anniversary Variant",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90116",
                    "name": "Amazing Spider-Man (1999) #656, Captain America 70th Anniversary Variant - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38625/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 5808,
        "digitalId": 7961,
        "title": "Amazing Spider-Man (1999) #538",
        "issueNumber": 538,
        "variantDescription": "",
        "description": "Conclusion to THE WAR AT HOME, an official tie-in to CIVIL WAR. The Civil War shaking the Marvel Universe races to its climax - with Spider-Man caught right in the middle. Where else would we expect to find him?",
        "modified": "2015-09-15T13:55:52-0400",
        "isbn": "",
        "upc": "5960604716-53811",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Conclusion to THE WAR AT HOME, an official tie-in to CIVIL WAR. The Civil War shaking the Marvel Universe races to its climax - with Spider-Man caught right in the middle. Where else would we expect to find him?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Conclusion to \"THE WAR AT HOME,\" an official tie-in to \"Civil War.\"\r\nThe Civil War shaking the Marvel Universe races to its climax -- with Spider-Man caught right in the middle.  Where else would we expect to find him?\r\n32 PGS./Rated A ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/5808/amazing_spider-man_1999_538?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-538/digital-comic/7961?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=7961&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/7961?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6445",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6167",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2007-02-21T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-01-21T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-09-11T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/57fbe2d33e28a",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/f0/57fcff4f7988c",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/57fbe2d33e28a",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/56fd2f680a2fd",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5808/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/120",
                    "name": "Ron Garney",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                    "name": "Matt Milla",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
                    "name": "Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/523",
                    "name": "Bill Reinhold",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4",
                    "name": "J. Michael Straczynski",
                    "role": "writer"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5808/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                    "name": "Daredevil"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009389",
                    "name": "Kingpin"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                    "name": "Spider-Woman (Jessica Drew)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 9
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5808/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1203",
                    "name": "Amazing Spider-Man (1999) #538",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1204",
                    "name": "Amazing Spider-Man (1999) #538",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5808/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                    "name": "Civil War"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 38841,
        "digitalId": 0,
        "title": "Amazing Spider-Man (1999) #649 (2ND PRINTING VARIANT)",
        "issueNumber": 649,
        "variantDescription": "2ND PRINTING VARIANT",
        "description": "THE HOBGOBLIN'S BACK! You wanted him, you got him!  And he's ready to hit the BIG TIME too - with a whole new bag of tricks!  Who's under the mask this time?  Is it Roderick Kingsley, Jason Macendale, or somebody else? Ready for another long, unfolding mystery with months of clues, red herrings, and shocking twists? Well tough! We're showing you who he is in THIS ISSUE! Plus: What's wrong with Mac Gargan? More trouble for Norah Winters. And Peter Parker makes good on a promise that goes back to AMAZING SPIDER-MAN #1! Guest-starring the BLACK CAT! 40 pages/32 pages of Story/Rated A  $3.99",
        "modified": "2011-08-01T10:39:44-0400",
        "isbn": "",
        "upc": "5960604716-64921",
        "diamondCode": "NOV108183",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HOBGOBLIN'S BACK! You wanted him, you got him!  And he's ready to hit the BIG TIME too - with a whole new bag of tricks!  Who's under the mask this time?  Is it Roderick Kingsley, Jason Macendale, or somebody else? Ready for another long, unfolding mystery with months of clues, red herrings, and shocking twists? Well tough! We're showing you who he is in THIS ISSUE! Plus: What's wrong with Mac Gargan? More trouble for Norah Winters. And Peter Parker makes good on a promise that goes back to AMAZING SPIDER-MAN #1! Guest-starring the BLACK CAT! 40 pages/32 pages of Story/Rated A  $3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38841",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/38841/amazing_spider-man_1999_649_2nd_printing_variant/2nd_printing_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/30324",
                "name": "Amazing Spider-Man (1999) #649"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-01-26T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2011-01-11T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/4e9740b77ff78",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/4e9740b77ff78",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38841/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13323",
                    "name": "Carlos Cuevas",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                    "name": "Edgar Delgado",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
                    "name": "Humberto Ramos",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 10,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38841/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009185",
                    "name": "Black Cat"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011258",
                    "name": "Carlie Cooper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009347",
                    "name": "Hobgoblin (Roderick Kingsley)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009389",
                    "name": "Kingpin"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010811",
                    "name": "Man-Wolf"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009490",
                    "name": "May Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010788",
                    "name": "Venom (Mac Gargan)"
                }
            ],
            "returned": 10
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38841/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69475",
                    "name": "Amazing Spider-Man (1999) #649 - Int",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/95273",
                    "name": "Amazing Spider-Man (1999) #649, 2nd Printing Variant",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38841/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30324,
        "digitalId": 17904,
        "title": "Amazing Spider-Man (1999) #649",
        "issueNumber": 649,
        "variantDescription": "",
        "description": "The Hobgoblin's back! And he's ready to hit the BIG TIME too - with a whole new bag of tricks! Who's under the mask this time? Is it Roderick Kingsley, Jason Macendale, or somebody else?",
        "modified": "2014-05-01T12:49:42-0400",
        "isbn": "",
        "upc": "5960604716-64911",
        "diamondCode": "SEP100574",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The Hobgoblin's back! And he's ready to hit the BIG TIME too - with a whole new bag of tricks! Who's under the mask this time? Is it Roderick Kingsley, Jason Macendale, or somebody else?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HOBGOBLIN'S BACK! You wanted him, you got him!  And he's ready to hit the BIG TIME too - with a whole new bag of tricks!  Who's under the mask this time?  Is it Roderick Kingsley, Jason Macendale, or somebody else? Ready for another long, unfolding mystery with months of clues, red herrings, and shocking twists? Well tough! We're showing you who he is in THIS ISSUE! Plus: What's wrong with Mac Gargan? More trouble for Norah Winters. And Peter Parker makes good on a promise that goes back to AMAZING SPIDER-MAN #1! Guest-starring the BLACK CAT! 40 pages/32 pages of Story/Rated A  $3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30324",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30324/amazing_spider-man_1999_649?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-649/digital-comic/17904?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=17904&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/17904?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/38841",
                "name": "Amazing Spider-Man (1999) #649 (2ND PRINTING VARIANT)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-11-24T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2010-11-04T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-10-18T09:29:30-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-10-18T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/58173f1742f1a",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/58173f1742f1a",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30324/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                    "name": "Tom Brennan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13152",
                    "name": "Joe Quesada",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13323",
                    "name": "Carlos Cuevas",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                    "name": "Edgar Delgado",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
                    "name": "Humberto Ramos",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                }
            ],
            "returned": 9
        },
        "characters": {
            "available": 11,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30324/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009185",
                    "name": "Black Cat"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011258",
                    "name": "Carlie Cooper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009347",
                    "name": "Hobgoblin (Roderick Kingsley)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009389",
                    "name": "Kingpin"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010811",
                    "name": "Man-Wolf"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009490",
                    "name": "May Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009491",
                    "name": "Peter Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010788",
                    "name": "Venom (Mac Gargan)"
                }
            ],
            "returned": 11
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30324/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69474",
                    "name": "Amazing Spider-Man (1999) #649",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69475",
                    "name": "Amazing Spider-Man (1999) #649 - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30324/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 40125,
        "digitalId": 27723,
        "title": "Amazing Spider-Man (1999) #694",
        "issueNumber": 694,
        "variantDescription": "",
        "description": "* Spider-Man's 50th Anniversary adventure ratchets up as an old foe returns!\n* And an ALL-NEW character joins the Marvel Universe! \n* WHO IS ALPHA?!",
        "modified": "2016-07-06T12:35:25-0400",
        "isbn": "",
        "upc": "5960604716-69411",
        "diamondCode": "",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "* Spider-Man's 50th Anniversary adventure ratchets up as an old foe returns!\n* And an ALL-NEW character joins the Marvel Universe! \n* WHO IS ALPHA?!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40125",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/40125/amazing_spider-man_1999_694?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-694/digital-comic/27723?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=27723&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/27723?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-09-26T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2012-09-03T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-07-22T11:32:16-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-09-26T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/56d480bb93cc9",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/56d480bb93cc9",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40125/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                    "name": "Edgar Delgado",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                    "name": "Chris Eliopoulos",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/447",
                    "name": "Victor Olazaba",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
                    "name": "Humberto Ramos",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40125/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40125/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91047",
                    "name": "Amazing Spider-Man (1999) #694",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91048",
                    "name": "Interior #91048",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40125/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 1966,
        "digitalId": 1415,
        "title": "Amazing Spider-Man (1999) #520",
        "issueNumber": 520,
        "variantDescription": "",
        "description": "Peter and the family are forced to deal with the radical changes in their lives.  How has Peter's decisions as Spider-Man affected his family life?",
        "modified": "2010-12-03T15:38:05-0500",
        "isbn": "",
        "upc": "5960604716-52011",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Peter and the family are forced to deal with the radical changes in their lives.  How has Peter's decisions as Spider-Man affected his family life?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"NEW AVENGERS\"\r<br>An explosive story in the Mighty Marvel Manner! \r<br>In this tale for the ages, written by Stupendous J. Michael Straczynski and penciled by Magnificent Mike Deodato, Peter and the family are forced to deal with the radical changes in their lives.\r<br>Straight from the pages of the New Avengers!  PART 2 (of 5).\r<br>32 PGS./Marvel PSR ...$2.25\r<br>"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1966",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/1966/amazing_spider-man_1999_520?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-520/digital-comic/1415?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1415&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/1415?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3019",
                "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2005-05-25T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-11-12T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.25
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/57f7b322bebd8",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/57f7b322bebd8",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1966/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1966/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009215",
                    "name": "Luke Cage"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                    "name": "Spider-Woman (Jessica Drew)"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1966/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1165",
                    "name": "Amazing Spider-Man (1999) #520",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1166",
                    "name": "2 of 5 - New Avengers",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1966/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 35517,
        "digitalId": 19680,
        "title": "Amazing Spider-Man (1999) #655",
        "issueNumber": 655,
        "variantDescription": "",
        "description": "NO ONE DIES PART 1 As the fallout of recent events continues to rock Peter Parker's world, he makes a choice-- a promise-- that even he might not be able to fulfill...",
        "modified": "2014-05-01T12:50:02-0400",
        "isbn": "",
        "upc": "5960604716-65511",
        "diamondCode": "DEC100572",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "This February may be the shortest month of the year, but this time it's the BIGGEST month for AMAZING SPIDER-MAN! \"Awakening\" We can't tell you what's in this issue without spoiling the end of AMAZING SPIDER-MAN #654.  But we can say this: Marcos Martin returns to AMAZING SPIDER-MAN in a full-length 30 page story that will haunt you.  As the fallout of recent events continues to rock Peter Parker's world, he makes a choice-- a promise-- that even he might not be able to fulfill..."
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "NO ONE DIES PART 1 As the fallout of recent events continues to rock Peter Parker's world, he makes a choice-- a promise-- that even he might not be able to fulfill..."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35517",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/35517/amazing_spider-man_1999_655?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-655/digital-comic/19680?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=19680&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/19680?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/40886",
                "name": "Amazing Spider-Man (1999) #655 (2nd Printing Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-02-23T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2011-02-09T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-01-02T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-11-01T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/4e983f36743b2",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/4e983f36743b2",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35517/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/894",
                    "name": "Marcos Martin",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11038",
                    "name": "Muntsa Vicente",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35517/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009489",
                    "name": "Ben Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                    "name": "Betty Brant"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011258",
                    "name": "Carlie Cooper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009619",
                    "name": "Gwen Stacy"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009490",
                    "name": "May Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009325",
                    "name": "Norman Osborn"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515",
                    "name": "Punisher"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009571",
                    "name": "Sentry (Robert Reynolds)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 13
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35517/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/78541",
                    "name": "Amazing Spider-Man (1999) #655",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/78542",
                    "name": "Amazing Spider-Man (1999) #655 - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/35517/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 2980,
        "digitalId": 1418,
        "title": "Amazing Spider-Man (1999) #523",
        "issueNumber": 523,
        "variantDescription": "",
        "description": "\"MOVING UP\" It's the sensational Spider-Man versus the horrendous hordes of Hydra as the villainous organization makes its final push to seize control of the country!  Standing in the way?  Everyone's favorite wall-crawler.  But will Spidey have enough left in the tank to take out the group of terrorists and save the day?",
        "modified": "2015-04-28T12:15:19-0400",
        "isbn": "",
        "upc": "5960604716-52311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "\"MOVING UP\" It's the sensational Spider-Man versus the horrendous hordes of Hydra as the villainous organization makes its final push to seize control of the country!  Standing in the way?  Everyone's favorite wall-crawler.  But will Spidey have enough left in the tank to take out the group of terrorists and save the day?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"MOVING UP\"\r\nIt's the sensational Spider-Man versus the horrendous hordes of Hydra as the villainous organization makes its final push to seize control of the country!  Standing in the way?  Everyone's favorite wall-crawler.  But will Spidey have enough left in the tank to take out the group of terrorists and save the day? Part 5 (of 6).\r\n32 PGS./T  SUGGESTED FOR TEENS AND UP ...$2.50"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2980",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/2980/amazing_spider-man_1999_523?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-523/digital-comic/1418?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1418&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/1418?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3019",
                "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2005-08-31T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-11-12T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.5
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/20/56cde741caceb",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/20/56cde741caceb",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2980/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2980/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                    "name": "Hydra"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009215",
                    "name": "Luke Cage"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                    "name": "Spider-Woman (Jessica Drew)"
                }
            ],
            "returned": 6
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2980/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1175",
                    "name": "Amazing Spider-Man (1999) #523",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1176",
                    "name": "5 of 6 - New Avengers",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2980/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 40120,
        "digitalId": 28038,
        "title": "Amazing Spider-Man (1999) #698",
        "issueNumber": 698,
        "variantDescription": "",
        "description": "The end of Spider-Man's world begins when Doctor Octopus discovers who Peter Parker really is.",
        "modified": "2018-08-27T15:21:09-0400",
        "isbn": "",
        "upc": "75960604716169811",
        "diamondCode": "SEP120621",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "The end of Spider-Man&rsquo;s world begins when Doctor Octopus discovers who Peter Parker really is.\n\n<ul><li>(Fifty years goes by much...too...fast.)</li></ul>"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The end of Spider-Man's world begins when Doctor Octopus discovers who Peter Parker really is."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40120",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/40120/amazing_spider-man_1999_698?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-698/digital-comic/28038?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=28038&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/28038?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47348",
                "name": "Amazing Spider-Man (1999) #698 (3rd Printing Variant)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47146",
                "name": "Amazing Spider-Man (1999) #698 (2nd Printing Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-11-21T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2012-11-07T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-05-20T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-11-21T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/00/57ed3544796b2",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/00/57ed3544796b2",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40120/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                    "name": "Chris Eliopoulos",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9317",
                    "name": "Richard Elson",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                    "name": "Antonio Fabela",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/272",
                    "name": "Paolo Rivera",
                    "role": "colorist (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40120/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40120/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91037",
                    "name": "Amazing Spider-Man (1999) #698",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/91038",
                    "name": "Interior #91038",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40120/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 5245,
        "digitalId": 7960,
        "title": "Amazing Spider-Man (1999) #537",
        "issueNumber": 537,
        "variantDescription": "",
        "description": "CIVIL WAR tie-in: THE WAR AT HOME! Spider-Man's about to embark on what very well might be the most important offensive of the Civil War that's rocking the Marvel Universe.",
        "modified": "2015-09-15T13:55:51-0400",
        "isbn": "",
        "upc": "5960604716-53711",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "CIVIL WAR tie-in: THE WAR AT HOME! Spider-Man's about to embark on what very well might be the most important offensive of the Civil War that's rocking the Marvel Universe."
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "CIVIL WAR Tie-In!\r\n\"THE WAR AT HOME\"\r\nSpider-Man's about to embark on what very well might be the most important offensive of the Civil War that's rocking the Marvel Universe. Part 6 (of 8).\r\n32 PGS./Rated A ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5245",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/5245/amazing_spider-man_1999_537?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-537/digital-comic/7960?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=7960&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/7960?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6167",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6445",
                "name": "Civil War: Amazing Spider-Man (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2007-01-03T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-04-27T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-09-11T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/56fd2ec251d97",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/70/57fcfec492f77",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/57fbdc3b90961",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/56fd2ec251d97",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5245/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/120",
                    "name": "Ron Garney",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                    "name": "Matt Milla",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
                    "name": "Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/523",
                    "name": "Bill Reinhold",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4",
                    "name": "J. Michael Straczynski",
                    "role": "writer"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5245/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515",
                    "name": "Punisher"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                    "name": "Winter Soldier"
                }
            ],
            "returned": 4
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5245/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1199",
                    "name": "Amazing Spider-Man (1999) #537",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1200",
                    "name": "Amazing Spider-Man (1999) #537",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5245/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                    "name": "Civil War"
                }
            ],
            "returned": 1
        }
    },
    {
        "id": 40886,
        "digitalId": 0,
        "title": "Amazing Spider-Man (1999) #655 (2nd Printing Variant)",
        "issueNumber": 655,
        "variantDescription": "2nd Printing Variant",
        "description": "This February may be the shortest month of the year, but this time it's the BIGGEST month for AMAZING SPIDER-MAN! \"Awakening\" We can't tell you what's in this issue without spoiling the end of AMAZING SPIDER-MAN #654. But we can say this: Marcos Martin returns to AMAZING SPIDER-MAN in a full-length 30 page story that will haunt you. As the fallout of recent events continues to rock Peter Parker's world, he makes a choice-- a promise-- that even he might not be able to fulfill...",
        "modified": "2011-06-03T11:09:23-0400",
        "isbn": "",
        "upc": "5960604716-65521",
        "diamondCode": "MAR118210",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "This February may be the shortest month of the year, but this time it's the BIGGEST month for AMAZING SPIDER-MAN! \"Awakening\" We can't tell you what's in this issue without spoiling the end of AMAZING SPIDER-MAN #654. But we can say this: Marcos Martin returns to AMAZING SPIDER-MAN in a full-length 30 page story that will haunt you. As the fallout of recent events continues to rock Peter Parker's world, he makes a choice-- a promise-- that even he might not be able to fulfill..."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40886",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/40886/amazing_spider-man_1999_655_2nd_printing_variant/2nd_printing_variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/35517",
                "name": "Amazing Spider-Man (1999) #655"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-06-08T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-05-24T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/00/4e98480a42657",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/00/4e98480a42657",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4de8f6cae1284",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40886/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/894",
                    "name": "Marcos Martin",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
                    "name": "Dan Slott",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11038",
                    "name": "Muntsa Vicente",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 12,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40886/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009489",
                    "name": "Ben Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                    "name": "Betty Brant"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011258",
                    "name": "Carlie Cooper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009619",
                    "name": "Gwen Stacy"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009325",
                    "name": "Norman Osborn"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515",
                    "name": "Punisher"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009571",
                    "name": "Sentry (Robert Reynolds)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 12
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40886/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/92597",
                    "name": "Amazing Spider-Man (1999) #655, 2nd Printing Variant - Int",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/93421",
                    "name": "Amazing Spider-Man (1999) #655, 2nd Printing Variant   ",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40886/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30321,
        "digitalId": 17034,
        "title": "Amazing Spider-Man (1999) #646",
        "issueNumber": 646,
        "variantDescription": "",
        "description": "ORIGIN OF THE SPECIES CONCLUSION The final showdown is here! Who will claim the Osborn baby?",
        "modified": "2014-03-20T13:50:10-0400",
        "isbn": "",
        "upc": "5960604716-64611",
        "diamondCode": "AUG100555",
        "ean": "",
        "issn": "0274-5232",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "ORIGIN OF THE SPECIES CONCLUSION The final showdown is here! Who will claim the Osborn baby?"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE HEARTBREAKING CONCLUSION OF ORIGIN OF THE \r\nSPECIES! The odds are stacked against Spider-Man as he and Harry Osborn fight side-by-side in a battle to save Harry's child.  The people Peter Parker cares about most are in danger, and someone won't live to tell the tale! 'Save everyone; never insist on resting!'\r\nRated A '$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30321",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30321/amazing_spider-man_1999_646?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-646/digital-comic/17034?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=17034&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/17034?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/35876",
                "name": "Amazing Spider-Man (1999) #646 (RIVERA VARIANT)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/36717",
                "name": "Amazing Spider-Man (1999) #646 (VAMPIRE VARIANT)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-10-27T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-10-07T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-10-03T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-10-04T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/60/5813b0335c1ab",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/60/5813b0335c1ab",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 10,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30321/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/465",
                    "name": "Paul Azaceta",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11978",
                    "name": "Richard Matthew Southworth",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11647",
                    "name": "Tom Brennan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13152",
                    "name": "Joe Quesada",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10288",
                    "name": "Marko Djurdjevic",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1117",
                    "name": "Javier Rodriguez",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
                    "name": "Mark Waid",
                    "role": "writer"
                }
            ],
            "returned": 10
        },
        "characters": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30321/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011258",
                    "name": "Carlie Cooper"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009234",
                    "name": "Chameleon"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009276",
                    "name": "Doctor Octopus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009486",
                    "name": "Harry Osborn"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009404",
                    "name": "Lizard"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011241",
                    "name": "Menace"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 9
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30321/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69468",
                    "name": "Amazing Spider-Man (1999) #646",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69469",
                    "name": "Amazing Spider-Man (1999) #646 - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30321/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 1868,
        "digitalId": 1414,
        "title": "Amazing Spider-Man (1999) #519",
        "issueNumber": 519,
        "variantDescription": "",
        "description": "Trump Tower has nothing on Spider-Man... Hold onto your hats, True Believers!  You won't believe what the fickle hand of fate has in store for Peter Parker, Mary Jane, and Aunt May...",
        "modified": "2010-12-03T15:37:21-0500",
        "isbn": "",
        "upc": "5960604716-51911",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Trump Tower has nothing on Spider-Man... Hold onto your hats, True Believers!  You won't believe what the fickle hand of fate has in store for Peter Parker, Mary Jane, and Aunt May..."
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"NEW AVENGERS\" Part 1 (of 6)\r\nTrump Tower has nothing on Spider-Man...\r\nHold onto your hats, True Believers!  Springing out of the pages of NEW AVENGERS, you won't believe what the fickle hand of fate has in store for Peter Parker, Mary Jane, and Aunt May..."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1868",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/1868/amazing_spider-man_1999_519?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-519/digital-comic/1414?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=1414&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/1414?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/3019",
                "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2005-04-20T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-11-12T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.25
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/57f7ac2fdbf24",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/57f7ac2fdbf24",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1868/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1868/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009215",
                    "name": "Luke Cage"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                    "name": "Spider-Woman (Jessica Drew)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1868/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1163",
                    "name": "Amazing Spider-Man (1999) #519",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/1164",
                    "name": "1 of 5 - New Avengers",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/1868/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 43163,
        "digitalId": 30169,
        "title": "Amazing Spider-Man (1999) #50",
        "issueNumber": 50,
        "variantDescription": "",
        "description": null,
        "modified": "2015-09-21T09:17:13-0400",
        "isbn": "",
        "upc": "75960604716105011",
        "diamondCode": "DEC022079",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43163",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/43163/amazing_spider-man_1999_50?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=30169&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2003-02-26T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2013-06-10T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/57e952d3b3a86",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/57e952d3b3a86",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43163/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/362",
                    "name": "Scott Hanna",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13366",
                    "name": "Avalon Dan Kemp",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                    "name": "John Romita Jr.",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
                    "name": "Richard Starkings",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4",
                    "name": "J. Michael Straczynski",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43163/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43163/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/113184",
                    "name": "Amazing Spider-Man (1999) #50",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/161827",
                    "name": "story from Amazing Spider-Man (1999) #50",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/43163/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 16890,
        "digitalId": 12188,
        "title": "Amazing Spider-Man Annual (1964) #16",
        "issueNumber": 16,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 52,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/16890/amazing_spider-man_annual_1964_16?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-Annual-16/digital-comic/12188?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=12188&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/12188?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1982-12-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-02-04T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2014-05-27T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/56d72043e5926",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/56d72043e5926",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bb554f679b42",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16890/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/962",
                    "name": "Stan Goldberg",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                    "name": "John Romita Jr.",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13272",
                    "name": "John Romita Sr.",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/958",
                    "name": "Roger Stern",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 13,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16890/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010782",
                    "name": "Ben Urich"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                    "name": "Betty Brant"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011095",
                    "name": "Captain Marvel (Monica Rambeau)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010774",
                    "name": "Daily Bugle"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009619",
                    "name": "Gwen Stacy"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009708",
                    "name": "Mary Jane Watson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
                    "name": "Thing"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 13
        },
        "stories": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16890/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35404",
                    "name": "Amazing Spider-Man Annual (1964) #16",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35405",
                    "name": "Who's That Lady?",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35406",
                    "name": "",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35407",
                    "name": "",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/187342",
                    "name": "story from Amazing Spider-Man Annual (1964) #16",
                    "type": "interiorStory"
                }
            ],
            "returned": 5
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16890/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 41661,
        "digitalId": 26531,
        "title": "Amazing Spider-Man Annual (1964) #39",
        "issueNumber": 39,
        "variantDescription": "",
        "description": "<ul><li> Spider-Man is stuck in a world where Peter Parker never existed!</li><li> And reality is coming apart!</li><li> Guest staring the Avengers! </li></ul>",
        "modified": "2016-10-26T16:19:33-0400",
        "isbn": "",
        "upc": "5960607773-00111",
        "diamondCode": "MAR120569",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 48,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "<ul><li> Spider-Man is stuck in a world where Peter Parker never existed!</li><li> And reality is coming apart!</li><li> Guest staring the Avengers! </li></ul>"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41661",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/41661/amazing_spider-man_annual_1964_39?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-Annual-39/digital-comic/26531?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=26531&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/26531?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2012-05-30T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2012-05-16T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2016-01-25T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2012-05-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/a0/569e9a6949d3c",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/a0/569e9a6949d3c",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41661/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "Letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                    "name": "Antonio Fabela",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                    "name": "Lee Garbett",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/753",
                    "name": "John Lucas",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/721",
                    "name": "Brian Reed",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                    "name": "Stephen Wacker",
                    "role": "editor"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41661/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009489",
                    "name": "Ben Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009215",
                    "name": "Luke Cage"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                    "name": "Spider-Woman (Jessica Drew)"
                }
            ],
            "returned": 6
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41661/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/94255",
                    "name": "Amazing Spider-Man Annual (2012) #39",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/94256",
                    "name": "Interior #94256",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41661/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30196,
        "digitalId": 14745,
        "title": "Amazing Spider-Man Annual (2010) #37",
        "issueNumber": 37,
        "variantDescription": "",
        "description": "REVEALED AT LAST- SPIDER-MAN'S FIRST MEETING WITH CAPTAIN AMERICA!\r\nAn Untold Tale of Spider-Man reveals the web-head's very first meeting with the Star-Spangled Avenger! Find out the secret history of how the Marvel Universe's two biggest icons save the world from the deadly brains of the ROGUE SCHOLARS!\r\nRated A ...$3.99",
        "modified": "2011-10-11T11:13:30-0400",
        "isbn": "",
        "upc": "5960607137-00111",
        "diamondCode": "MAR100505",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 48,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "REVEALED AT LAST- SPIDER-MAN'S FIRST MEETING WITH CAPTAIN AMERICA!\r\nAn Untold Tale of Spider-Man reveals the web-head's very first meeting with the Star-Spangled Avenger! Find out the secret history of how the Marvel Universe's two biggest icons save the world from the deadly brains of the ROGUE SCHOLARS!\r\nRated A ...$3.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30196",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30196/amazing_spider-man_annual_2010_37?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=14745&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9802",
            "name": "Amazing Spider-Man Annual (2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-05-26T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-05-06T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-01-17T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/03/56d724791075e",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/03/56d724791075e",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/40/4bfabdd57ed07",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/90/4bfabdd24a8aa",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/90/4bfabc36b0b36",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/c0/4bfabc3384bad",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/80/4bfabc3040d4f",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bfabc2d25765",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/4bfabc271972f",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/4bfabc23d2b9b",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/00/4bfabc207f239",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4baa72fc24366",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30196/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10106",
                    "name": "Fabio D'AURIA",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/438",
                    "name": "Karl Kesel",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7413",
                    "name": "Paulo Siqueira",
                    "role": "artist"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30196/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010325",
                    "name": "Betty Brant"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009320",
                    "name": "Giant Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009490",
                    "name": "May Parker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30196/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69218",
                    "name": "Amazing Spider-Man Annual (2010) #37",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69219",
                    "name": "Interior #69219",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30196/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 16889,
        "digitalId": 53085,
        "title": "Amazing Spider-Man Annual (1964) #15",
        "issueNumber": 15,
        "variantDescription": "",
        "description": "Spidey takes on The Punisher in an incredible showdown!",
        "modified": "2019-10-28T18:24:17-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 52,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Spidey takes on The Punisher in an incredible showdown!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16889",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/16889/amazing_spider-man_annual_1964_15?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=53085&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1981-01-15T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2019-10-28T18:24:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0.75
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/5db76aa63622b",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/5db76aa63622b",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 16,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16889/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
                    "name": "Terry Kevin Austin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1519",
                    "name": "Frank Giacoia",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/570",
                    "name": "Klaus Janson",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1247",
                    "name": "Bob Layton",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                    "name": "Tom Defalco",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/259",
                    "name": "Mark Gruenwald",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1353",
                    "name": "Greg Larocque",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/17",
                    "name": "Frank Miller",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1267",
                    "name": "Keith Pollard",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/198",
                    "name": "Marie Severin",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/399",
                    "name": "Jim Novak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1759",
                    "name": "Joe Rosen",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1754",
                    "name": "Gaspar Saladino",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1226",
                    "name": "Dennis Oneil",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/958",
                    "name": "Roger Stern",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1832",
                    "name": "Bob Sharen",
                    "role": "colorist"
                }
            ],
            "returned": 16
        },
        "characters": {
            "available": 14,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16889/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010782",
                    "name": "Ben Urich"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                    "name": "Black Panther"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                    "name": "Daredevil"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009297",
                    "name": "Falcon"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009372",
                    "name": "J. Jonah Jameson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011081",
                    "name": "Ka-Zar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010811",
                    "name": "Man-Wolf"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009452",
                    "name": "Moon Knight"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515",
                    "name": "Punisher"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009545",
                    "name": "Robbie Robertson"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010713",
                    "name": "Tarantula (Luis Alvarez)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 14
        },
        "stories": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16889/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35396",
                    "name": "Cover #35396",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35397",
                    "name": "Spider-Man: Threat Or Menace?",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35398",
                    "name": "Just How Strong Is...Spider-Man?",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35399",
                    "name": "Peter Parker's Apartment!",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35400",
                    "name": "Man-Wolf",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35401",
                    "name": "The Jackal",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35402",
                    "name": "Punisher",
                    "type": "profile"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35403",
                    "name": "Tarantula",
                    "type": "profile"
                }
            ],
            "returned": 8
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16889/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 16904,
        "digitalId": 4732,
        "title": "Amazing Spider-Man Annual (1964) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": null,
        "modified": "2011-10-11T11:13:34-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 68,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/16904/amazing_spider-man_annual_1964_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-Spider-Man-Annual-3/digital-comic/4732?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4732&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/4732?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "1966-11-01T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-11-26T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/56d721c41706c",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/56d721c41706c",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16904/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1295",
                    "name": "Mike Esposito",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/305",
                    "name": "Don Heck",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13272",
                    "name": "John Romita Sr.",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
                    "name": "Stan Lee",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13093",
                    "name": "Art Simek",
                    "role": "letterer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16904/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                    "name": "Avengers"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
                    "name": "Daredevil"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                    "name": "Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                    "name": "Spider-Man (Peter Parker)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
                    "name": "Thor"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16904/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35449",
                    "name": "Amazing Spider-Man Annual (1964) #3",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35450",
                    "name": "...To Become An Avenger!",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35451",
                    "name": "Turning Point",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/35452",
                    "name": "Unmasked By Dr. Octopus",
                    "type": ""
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/161339",
                    "name": "story from Amazing Spider-Man Annual (1964) #3",
                    "type": "interiorStory"
                }
            ],
            "returned": 5
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/16904/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 48021,
        "digitalId": 32796,
        "title": "Amazing X-Men (2013) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": "- BEAST UNLEASHED! Dr. McCoy is pushed over the edge and gives into his savage side like never before!\n- The X-Men, split between heaven and hell, are in way over their heads!\n- Can they get to Nightcrawler before evil Azazel does?",
        "modified": "2014-01-13T15:29:28-0500",
        "isbn": "",
        "upc": "75960607957500311",
        "diamondCode": "NOV130683",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "- BEAST UNLEASHED! Dr. McCoy is pushed over the edge and gives into his savage side like never before!\n- The X-Men, split between heaven and hell, are in way over their heads!\n- Can they get to Nightcrawler before evil Azazel does?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48021",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/48021/amazing_x-men_2013_3?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Amazing-X-Men-3/digital-comic/32796?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=32796&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/32796?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/18142",
            "name": "Amazing X-Men (2013 - 2015)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2014-01-15T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2013-12-29T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2014-07-07T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2014-01-15T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/52cc3333e039a",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/52d443bb0fe71",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/03/52d44375c2564",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/52d4433ca7f96",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/52d442e1b80bb",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/52cc3333e039a",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/52616240ace8a",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/48021/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                    "name": "Ed Mcguinness",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 2
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/48021/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009306",
                    "name": "Firestar"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/48021/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/108283",
                    "name": "cover from New X-Men (2013) #3",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/108284",
                    "name": "story from New X-Men (2013) #3",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/48021/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 41284,
        "digitalId": 0,
        "title": "Annihilators: Earthfall (2011) #1 (Variant)",
        "issueNumber": 1,
        "variantDescription": "Variant",
        "description": "",
        "modified": "2011-09-26T16:10:07-0400",
        "isbn": "",
        "upc": "5960607681-00121",
        "diamondCode": "JUL110670",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": ""
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41284",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/41284/annihilators_earthfall_2011_1_variant/variant?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/39982",
                "name": "Annihilators: Earthfall (2011) #1"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-09-28T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-09-14T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4e80dd419f80c",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4e80dd419f80c",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41284/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1107",
                    "name": "Dan Abnett",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                    "name": "Andy Lanning",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                    "name": "Andrew Hennessy",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5636",
                    "name": "Tan Eng Huat",
                    "role": "penciller (cover)"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41284/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009180",
                    "name": "Beta-Ray Bill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009321",
                    "name": "Gladiator (Kallark)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010344",
                    "name": "Ronan"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                }
            ],
            "returned": 5
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41284/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/93427",
                    "name": "Annihilators: Earthfall (2011) #1, Variant",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/93428",
                    "name": "Interior #93428",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/41284/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 39982,
        "digitalId": 24026,
        "title": "Annihilators: Earthfall (2011) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "MARVEL'S COSMIC HEAVY HITTERS COME TO EARTH-AND FIGHT THE AVENGERS! What has brought Gladiator, Quasar, Ronan, Ikon and Beta-Ray Bill to our planet...and why are they at odds with Earth's Mightiest Heroes? All this, plus each issue will feature a five-page chapter of an all-new, all-hilarious Rocket Raccoon & Groot story!",
        "modified": "2011-09-26T15:46:57-0400",
        "isbn": "",
        "upc": "5960607681-00111",
        "diamondCode": "JUL110669",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "MARVEL'S COSMIC HEAVY HITTERS COME TO EARTH-AND FIGHT THE AVENGERS! What has brought Gladiator, Quasar, Ronan, Ikon and Beta-Ray Bill to our planet...and why are they at odds with Earth's Mightiest Heroes? All this, plus each issue will feature a five-page chapter of an all-new, all-hilarious Rocket Raccoon & Groot story!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39982",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/39982/annihilators_earthfall_2011_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Annihilators-Earthfall-1/digital-comic/24026?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=24026&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/24026?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/41284",
                "name": "Annihilators: Earthfall (2011) #1 (Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-09-28T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-09-14T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-10-12T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-06-25T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/30/578533577248b",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/30/578533577248b",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39982/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1107",
                    "name": "Dan Abnett",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                    "name": "Andy Lanning",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                    "name": "John Tyler Christopher",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                    "name": "Andrew Hennessy",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5636",
                    "name": "Tan Eng Huat",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                    "name": "Mark Paniccia",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/123",
                    "name": "Bill Rosemann",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/561",
                    "name": "Wil Quintana",
                    "role": "colorist"
                }
            ],
            "returned": 9
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39982/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009180",
                    "name": "Beta-Ray Bill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011353",
                    "name": "Cosmo (dog)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009321",
                    "name": "Gladiator (Kallark)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010743",
                    "name": "Groot"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010778",
                    "name": "Quasar (Wendell Vaughn)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010744",
                    "name": "Rocket Raccoon"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010344",
                    "name": "Ronan"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39982/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90731",
                    "name": "Annihilators: Earthfall (2011) #1 Cover",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90732",
                    "name": "Annihilators: Earthfall (2011) #1",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39982/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 39979,
        "digitalId": 25224,
        "title": "Annihilators: Earthfall (2011) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "Earth is the setting for the final battle as the combined might of the Annihilators and the Avengers go up against the world-corrupting Magus. What kind of sacrifices must be made to defeat a foe THIS dangerous? And - when the entire Universe is at stake - what is 'too great a cost\"?",
        "modified": "2011-12-27T01:31:24-0500",
        "isbn": "",
        "upc": "5960607681-00411",
        "diamondCode": "OCT110640",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "Earth is the setting for the final battle as the combined might of the Annihilators and the Avengers go up against the world-corrupting Magus. What kind of sacrifices must be made to defeat a foe THIS dangerous? And - when the entire Universe is at stake - what is 'too great a cost\"?"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39979",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/39979/annihilators_earthfall_2011_4?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Annihilators-Earthfall-4/digital-comic/25224?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=25224&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/25224?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-12-28T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2011-12-14T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-10-12T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-06-25T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/57853a57694fc",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/57853a57694fc",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39979/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1107",
                    "name": "Dan Abnett",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                    "name": "Andy Lanning",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                    "name": "John Tyler Christopher",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                    "name": "Andrew Hennessy",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5636",
                    "name": "Tan Eng Huat",
                    "role": "artist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/561",
                    "name": "Wil Quintana",
                    "role": "colorist"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39979/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                    "name": "Iron Man"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010778",
                    "name": "Quasar (Wendell Vaughn)"
                }
            ],
            "returned": 3
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39979/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90725",
                    "name": "Cover #90725",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90726",
                    "name": "Interior #90726",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39979/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 39981,
        "digitalId": 24494,
        "title": "Annihilators: Earthfall (2011) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "THE GALAXY'S MOST MAGNIFICENT!From the fallout of ANNIHILATION and the end of the GUARDIANS OF THE GALAXY, an all-too-familiar cosmic threat has returned, this time with Earth as his beachhead. His followers span a thousand worlds, awaiting only the word to begin new wars in his name... unless the ANNIHILATORS can silence him first! So why do THE AVENGERS stand in their way, and what are the true stakes if either side fails? Plus, continuing our backup adventure, it's MOJO versus ROCKET RACCOON & GROOT onstage for a high-stakes campy cosmic free-for-all!",
        "modified": "2011-10-26T16:12:00-0400",
        "isbn": "",
        "upc": "5960607681-00211",
        "diamondCode": "AUG110638",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "THE GALAXY'S MOST MAGNIFICENT!From the fallout of ANNIHILATION and the end of the GUARDIANS OF THE GALAXY, an all-too-familiar cosmic threat has returned, this time with Earth as his beachhead. His followers span a thousand worlds, awaiting only the word to begin new wars in his name... unless the ANNIHILATORS can silence him first! So why do THE AVENGERS stand in their way, and what are the true stakes if either side fails? Plus, continuing our backup adventure, it's MOJO versus ROCKET RACCOON & GROOT onstage for a high-stakes campy cosmic free-for-all!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39981",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/39981/annihilators_earthfall_2011_2?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Annihilators-Earthfall-2/digital-comic/24494?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=24494&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/24494?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-10-26T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-10-12T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-10-12T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2013-06-25T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5785390cbe1c2",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5785390cbe1c2",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/4e27451b97e11",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39981/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1107",
                    "name": "Dan Abnett",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                    "name": "Andy Lanning",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4426",
                    "name": "Dan Buckley",
                    "role": "other"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                    "name": "John Tyler Christopher",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                    "name": "Andrew Hennessy",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5636",
                    "name": "Tan Eng Huat",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                    "name": "Mark Paniccia",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/561",
                    "name": "Wil Quintana",
                    "role": "colorist"
                }
            ],
            "returned": 9
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39981/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009180",
                    "name": "Beta-Ray Bill"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                    "name": "Captain America"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010338",
                    "name": "Captain Marvel (Carol Danvers)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010743",
                    "name": "Groot"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
                    "name": "Hawkeye"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011360",
                    "name": "Red Hulk"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010744",
                    "name": "Rocket Raccoon"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010344",
                    "name": "Ronan"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39981/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90729",
                    "name": "Annihilators: Earthfall (2011) #2",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90730",
                    "name": "Annihilators: Earthfall (2011) #2 - Int",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/39981/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 660,
        "digitalId": 93,
        "title": "Astonishing X-Men (2004) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Dream team creators JOSS WHEDON and JOHN CASSADAY bring you the explosive #1 issue of the all-new flagship X-Men series! This issue marks a return to classic greatness and the beginning of a brand-new era for the X-Men.",
        "modified": "2017-08-01T10:33:03-0400",
        "isbn": "",
        "upc": "75960605543200111",
        "diamondCode": "MAR041647",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Dream team creators JOSS WHEDON and JOHN CASSADAY bring you the explosive #1 issue of the all-new flagship X-Men series! This issue marks a return to classic greatness and the beginning of a brand-new era for the X-Men."
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"GIFTED\" PART 1 (OF 6) Dream-team creators JOSS WHEDON (creator of TV's Buffy the Vampire Slayer) and JOHN CASSADAY (Planetary, CAPTAIN AMERICA) bring you the explosive #1 issue of the all-new flagship X-Men series! As part of X-MEN: RELOAD, this issue marks a return to classic greatness and the beginning of a brand-new era for the X-Men."
            },
            {
                "type": "70th_winner_desc",
                "language": "en-us",
                "text": "Expectations for Joss Whedon and John Cassaday's first X-Men issue were high. Really high. Luckily, they nailed it, hitting all the classic X-Men beats, yet giving Marvel's Merry Mutants a solid update."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/660",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/660/astonishing_x-men_2004_1?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-1/digital-comic/93?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=93&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/93?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/662",
                "name": "Astonishing X-Men (2004) #1 (Variant)"
            }
        ],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24514",
                "name": "Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4021",
                "name": "Astonishing X-Men Vol. 1 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/1456",
                "name": "Astonishing X-Men Vol. 1: Gifted (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2004-05-26T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-01-01T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-10-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 0
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/d0/58f6636798c27",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/d0/58f6636798c27",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/00/4bae3d1b031d1",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4bae3d168b106",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4bae198a72338",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/4bae19858a558",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bae197a22f79",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/60/4bae12cb48401",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/660/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/162",
                    "name": "John Cassaday",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                    "name": "Chris Eliopoulos",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4306",
                    "name": "Laura Martin",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/799",
                    "name": "Joss Whedon",
                    "role": "writer"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/660/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011202",
                    "name": "Ord"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011323",
                    "name": "Sentinels"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/660/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3309",
                    "name": "Astonishing X-Men (2004) #1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3310",
                    "name": "Interior #3310",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/660/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 5417,
        "digitalId": 5104,
        "title": "Astonishing X-Men (2004) #19",
        "issueNumber": 19,
        "variantDescription": "",
        "description": "\"UNSTOPPABLE!\" Part 1 (of 6) Strap yourselves in, folks! It's the beginning of Joss Whedon and John Cassaday's final arc on Astonishing X-Men! After the shocking and brain-smashing events of last issue, the X-Men are off to protect the Earth from its destruction at the hands of the Breakworld. And when it's all over, nothing will ever be the same! No really, we mean it! Whedon & Cassaday prove they are more than Astonishing: They are UNSTOPPABLE! 32 PGS./Rated T  ...$2.99",
        "modified": "2014-07-16T12:28:55-0400",
        "isbn": "",
        "upc": "5960605543-01911",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "\"UNSTOPPABLE!\" Part 1 (of 6) Strap yourselves in, folks! It's the beginning of Joss Whedon and John Cassaday's final arc on Astonishing X-Men! After the shocking and brain-smashing events of last issue, the X-Men are off to protect the Earth from its destruction at the hands of the Breakworld. And when it's all over, nothing will ever be the same! No really, we mean it! Whedon & Cassaday prove they are more than Astonishing: They are UNSTOPPABLE! 32 PGS./Rated T  ...$2.99"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"UNSTOPPABLE!\" Part 1 (of 6)\r\nStrap yourselves in, folks! It's the beginning of Joss Whedon and John Cassaday's final arc on Astonishing X-Men! After the shocking and brain-smashing events of last issue, the X-Men are off to protect the Earth from its destruction at the hands of the Breakworld. And when it's all over, nothing will ever be the same! No really, we mean it! Whedon & Cassaday prove they are more than Astonishing: They are UNSTOPPABLE!\r\n32 PGS./Rated T  ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5417",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/5417/astonishing_x-men_2004_19?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-19/digital-comic/5104?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=5104&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/5104?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21422",
                "name": "Astonishing X-Men Vol. 4: Unstoppable (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2006-12-27T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2008-06-02T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-10-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/58f4d60224543",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/58f4d60224543",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5417/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/162",
                    "name": "John Cassaday",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4306",
                    "name": "Laura Martin",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/799",
                    "name": "Joss Whedon",
                    "role": "writer"
                }
            ],
            "returned": 4
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5417/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009504",
                    "name": "Professor X"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5417/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3350",
                    "name": "1 of 6 - Unstoppable",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3351",
                    "name": "1 of 6 - Unstoppable",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/5417/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 30332,
        "digitalId": 15786,
        "title": "Astonishing X-Men (2004) #35",
        "issueNumber": 35,
        "variantDescription": "",
        "description": "EXOGENETIC PART CONCLUSION The X-Men finally come face to face with the man responsible for their troubles. And now he's preparing to unleash one more genetic nightmare upon the world before his time runs out.",
        "modified": "2018-03-17T09:11:00-0400",
        "isbn": "",
        "upc": "5960605543-03511",
        "diamondCode": "JAN100616",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "EXOGENETIC PART CONCLUSION The X-Men finally come face to face with the man responsible for their troubles. And now he's preparing to unleash one more genetic nightmare upon the world before his time runs out."
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"eXogenetic\" Conclusion!\r\nAfter wading through a swarm of bio-mechanically engineered monstrosities modeled after some of their fiercest foes, the X-Men finally come face to face with the man responsible. He's given his life to designing the death of the mutant race and with the X-Men at his doorstep, he's preparing to unleash one more genetic nightmare upon the world before his time runs out.\r\nRated T  ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30332",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/30332/astonishing_x-men_2004_35?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-35/digital-comic/15786?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=15786&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/15786?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2010-08-25T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2010-08-05T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2011-07-20T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-09-06T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/58f8dbbe41230",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/58f8dbbe41230",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4c6adfa4a0843",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/4c6adf9e99321",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/4c6adf97afca7",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/70/4c6adf91aaa0a",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/40/4c6adf8b886f5",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30332/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                    "name": "Frank D'ARMATA",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/676",
                    "name": "Warren Ellis",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/306",
                    "name": "Phil Jimenez",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                    "name": "Andy Lanning",
                    "role": "inker"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30332/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011298",
                    "name": "Armor (Hisako Ichiki)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
                    "name": "Storm"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 6
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30332/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69490",
                    "name": "ASTONISHING X-MEN (2004) #35",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/69491",
                    "name": "Interior #69491",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/30332/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 2842,
        "digitalId": 4130,
        "title": "Astonishing X-Men (2004) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": "The X-Men are put to the test by an enemy within and a secret of Professor X may put the entire team at risk.",
        "modified": "2017-05-02T14:53:10-0400",
        "isbn": "",
        "upc": "5960605543-01121",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The X-Men are put to the test by an enemy within and a secret of Professor X may put the entire team at risk."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2842",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/2842/astonishing_x-men_2004_11?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-11/digital-comic/4130?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=4130&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/4130?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24514",
                "name": "Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4021",
                "name": "Astonishing X-Men Vol. 1 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/2628",
                "name": "Astonishing X-Men Vol. 2: Dangerous (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2005-06-05T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2009-09-09T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-10-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/58f4d090a5156",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/58f4d090a5156",
                "extension": "jpg"
            },
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/60/50a3ebb6412f0",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2842/creators",
            "items": [],
            "returned": 0
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2842/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009504",
                    "name": "Professor X"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2842/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3337",
                    "name": "Interior #3337",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/65457",
                    "name": "ASTONISHING X-MEN 11 cover",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/2842/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 23087,
        "digitalId": 13869,
        "title": "Astonishing X-Men (2004) #28",
        "issueNumber": 28,
        "variantDescription": "",
        "description": "GHOST BOX PART 4 Upon arriving in Tian, China, the X-Men encounter a team of hostile mutants, mutants who have a connection to one of their own: former X-Man Forge!",
        "modified": "2014-05-01T15:16:09-0400",
        "isbn": "",
        "upc": "5960605543-02811",
        "diamondCode": "NOV082409",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "GHOST BOX PART 4 Upon arriving in Tian, China, the X-Men encounter a team of hostile mutants, mutants who have a connection to one of their own: former X-Man Forge!"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"GHOST BOX,\" PART 4 \r\nBig action. Big Science.  And a Big Mystery to solve!  The superstar team of Warren Ellis and Simone Bianchi take the X-Men on a mission that will take them into mind-bending and previously uncharted territory -- one that will test them -- and their leader Cyclops -- to their very core.\r\nRated T  ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23087",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/23087/astonishing_x-men_2004_28?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-28/digital-comic/13869?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=13869&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/13869?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2009-01-21T00:00:00-0500"
            },
            {
                "type": "focDate",
                "date": "2008-12-18T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2010-01-01T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2011-02-16T00:00:00-0500"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/58f7c091de4a1",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/58f7c091de4a1",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23087/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4014",
                    "name": "Axel Alonso",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/648",
                    "name": "Simone Bianchi",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "other"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/676",
                    "name": "Warren Ellis",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5003",
                    "name": "Simone Peruzzi",
                    "role": "colorist"
                }
            ],
            "returned": 6
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23087/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
                    "name": "Storm"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23087/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51201",
                    "name": "ASTONISHING X-MEN (2004) #28",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/51202",
                    "name": "4 of 6 Ghost Box",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/23087/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 843,
        "digitalId": 3287,
        "title": "Astonishing X-Men (2004) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": "As demand for the \"mutant cure\" reaches near-riot levels, the X-Men finally go head to head with Ord, with an unexpected ally -- and some unexpected adversaries -- tipping the scales.",
        "modified": "2013-02-05T14:00:04-0500",
        "isbn": "",
        "upc": "5960605543-00511",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "As demand for the \"mutant cure\" reaches near-riot levels, the X-Men finally go head to head with Ord, with an unexpected ally -- and some unexpected adversaries -- tipping the scales."
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"GIFTED\" 5 (OF 6)  As demand for the \"mutant cure\" reaches near-riot levels, the X-Men finally go head to head with Ord, with an unexpected ally -- and some unexpected adversaries -- tipping the scales."
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/843",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/843/astonishing_x-men_2004_5?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-5/digital-comic/3287?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=3287&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/3287?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24514",
                "name": "Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/4021",
                "name": "Astonishing X-Men Vol. 1 (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/1456",
                "name": "Astonishing X-Men Vol. 1: Gifted (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2004-09-22T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2007-11-13T00:00:00-0500"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-10-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/10/58f6692ab3385",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/10/58f6692ab3385",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/843/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/162",
                    "name": "John Cassaday",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4306",
                    "name": "Laura Martin",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4174",
                    "name": "Mike Marts",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/799",
                    "name": "Joss Whedon",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 9,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/843/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
                    "name": "Cyclops"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                    "name": "Nick Fury"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011202",
                    "name": "Ord"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 9
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/843/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3321",
                    "name": "Astonishing X-Men (2004) #5",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/3322",
                    "name": "“GIFTED” 5 (OF 6)  As demand for the",
                    "type": "interiorStory"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/843/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 6120,
        "digitalId": 7989,
        "title": "Astonishing X-Men (2004) #21",
        "issueNumber": 21,
        "variantDescription": "",
        "description": "\"UNSTOPPABLE\" PART 3 (OF 6)! Ord and his people of Breakworld lead the charge to take down the X-Men and S.W.O.R.D. And when this fight's over... Not everyone is coming back!  32 PGS./Rated T  ...$2.99",
        "modified": "2017-04-17T15:24:40-0400",
        "isbn": "",
        "upc": "5960605543-02111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "\"UNSTOPPABLE\" PART 3 (OF 6)! Ord and his people of Breakworld lead the charge to take down the X-Men and S.W.O.R.D. And when this fight's over... Not everyone is coming back!  32 PGS./Rated T  ...$2.99"
            },
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"UNSTOPPABLE\" PART 3 (OF 6)!\r\nOrd and his people of Breakworld lead the charge to take down the X-Men and S.W.O.R.D. And when this fight's over... Not everyone is coming back! \r\n32 PGS./Rated T  ...$2.99"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6120",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/6120/astonishing_x-men_2004_21?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Astonishing-X-Men-21/digital-comic/7989?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=7989&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/7989?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/5876",
                "name": "Astonishing X-Men (2004) #21 (Variant)"
            }
        ],
        "collections": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24514",
                "name": "Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21422",
                "name": "Astonishing X-Men Vol. 4: Unstoppable (Trade Paperback)"
            }
        ],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2007-05-02T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "1961-01-01T00:00:00-0500"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-06-27T00:00:00-0400"
            },
            {
                "type": "digitalPurchaseDate",
                "date": "2009-10-30T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 2.99
            },
            {
                "type": "digitalPurchasePrice",
                "price": 1.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bb8846d89d2f",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bb8846d89d2f",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/6120/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                    "name": "Virtual Calligr",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                    "name": "Chris Eliopoulos",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/162",
                    "name": "John Cassaday",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4306",
                    "name": "Laura Martin",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/799",
                    "name": "Joss Whedon",
                    "role": "writer"
                }
            ],
            "returned": 5
        },
        "characters": {
            "available": 8,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/6120/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
                    "name": "Agent Brand"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009310",
                    "name": "Emma Frost"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011202",
                    "name": "Ord"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 8
        },
        "stories": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/6120/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/7670",
                    "name": "ASTONISHING X-MEN (2004) #21",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/7671",
                    "name": "3 of 6 - Unstoppable",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/8141",
                    "name": "3 of 6 - Unstoppable",
                    "type": "interiorStory"
                }
            ],
            "returned": 3
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/6120/events",
            "items": [],
            "returned": 0
        }
    },
    {
        "id": 38319,
        "digitalId": 22856,
        "title": "Astonishing X-Men (2004) #40",
        "issueNumber": 40,
        "variantDescription": "",
        "description": "The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn't an option as they are an endangered species. Also, Agent Brand has been infected!",
        "modified": "2012-07-25T12:16:54-0400",
        "isbn": "",
        "upc": "5960605543-04011",
        "diamondCode": "",
        "ean": "",
        "issn": "1549-8638",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
            {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "\"MEANWHILE\" Part 2 (of 3). The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn't an option as they are an Endangered Species. Oh, and Agent Brand has been infected. Christos Gage (AVENGERS ACADEMY) and Juan Bobillo (SHE-HULK) bring you part 2 of the alternating story arc of the most thought-provoking X-Book!"
            },
            {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn't an option as they are an endangered species. Also, Agent Brand has been infected!"
            }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38319",
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/38319/astonishing_x-men_2004_40?utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            },
            {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=22856&utm_campaign=apiRef&utm_source=df334ee8a2d7cda021c027a224790cc2"
            }
        ],
        "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
        },
        "variants": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/40024",
                "name": "Astonishing X-Men (2004) #40 (I Am Captain America Variant)"
            }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
            {
                "type": "onsaleDate",
                "date": "2011-07-27T00:00:00-0400"
            },
            {
                "type": "focDate",
                "date": "2011-07-13T00:00:00-0400"
            },
            {
                "type": "unlimitedDate",
                "date": "2012-05-16T00:00:00-0400"
            }
        ],
        "prices": [
            {
                "type": "printPrice",
                "price": 3.99
            }
        ],
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/00/56e6e5a2abd14",
            "extension": "jpg"
        },
        "images": [
            {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/00/56e6e5a2abd14",
                "extension": "jpg"
            }
        ],
        "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38319/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/239",
                    "name": "Juan Bobillo",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                    "name": "Vc Joe Caramagna",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                    "name": "Christos Gage",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11757",
                    "name": "Salvador Larroca",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/240",
                    "name": "Marcelo Sosa",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/500",
                    "name": "Christopher Sotomayor",
                    "role": "colorist"
                }
            ],
            "returned": 7
        },
        "characters": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38319/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
                    "name": "Agent Brand"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
                    "name": "Beast"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                    "name": "Colossus"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009508",
                    "name": "Kitty Pryde"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
                    "name": "Storm"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                    "name": "Wolverine"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                    "name": "X-Men"
                }
            ],
            "returned": 7
        },
        "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38319/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90853",
                    "name": " Interior  Astonishing X-Men (2004) #40",
                    "type": "interiorStory"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/90944",
                    "name": "ASTONISHING X-MEN (2004) #40",
                    "type": "cover"
                }
            ],
            "returned": 2
        },
        "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38319/events",
            "items": [],
            "returned": 0
        }
    }
]

  const handleFavorite = (id) => {
    let filteredFavorites;

    userFavorites.includes(id) 
      ? filteredFavorites = userFavorites.filter(comicId => comicId !== id)
      : filteredFavorites = [...userFavorites, id]

    setAuth({ user, favorites: filteredFavorites })
    setFavorites(comics.filter(comic => filteredFavorites.includes(comic.id)))
    updateStoredAuth({ user: user, favorites: filteredFavorites })
  }

  const handleFilterComics = (text) => {
    setSearchText(text)
    setFilteredComics(comics.filter(comic => (
        comic.title.toLowerCase().includes(text.toLowerCase())
      )
    ))
  }
  
  useEffect(async () => {
    setLoading(true)
    // const response = await fetch(URI)
    // const data = await response.json()
    // setComics(data.data.results)
    // setFavorites(data.data.results.filter(comic => userFavorites.includes(comic.id)))
    // setLoading(false)
    setComics(COMICS)
    setFavorites(COMICS.filter(comic => userFavorites.includes(comic.id)))
    setLoading(false)
  }, [])

  useEffect(() => {
  }, [userFavorites])

  useEffect(() => {
    setFilteredComics(comics)
  }, [comics])

  return (
    <View style={styles.container}>
      {
        loading
          ? (<Text>Cargando</Text>)
          : (
            <>
              <TextInput
                style={styles.searchBar}
                placeholder="🔍 Type here to Search!"
                onChangeText={text => handleFilterComics(text)}
                defaultValue={searchText}
              />
              {
                filteredComics.length > 0
                  ? (
                    <FlatList
                      data={filteredComics}
                      initialNumToRender={20}
                      renderItem={({item}) => (
                        <ComicItem
                          thumbnail={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                          title={item.title}
                          price={item.prices[0].price}
                          author={item.creators.items[0]?.name}
                          pages={item.pageCount}
                          saleDate={item.dates[0].date}
                          comic={item}
                          favorite={userFavorites.includes(item.id)}
                          updateFavorite={handleFavorite}
                        />
                      )}
                    />
                  )
                  : (<Text>No se encontraron coincidencias</Text>)
              }
              
            </>
            )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6ff",
  },
  searchBar: {
    height: 30,
    lineHeight: 30,
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  }
});
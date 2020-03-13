const usersData = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      img:'https://randomuser.me/api/portraits/men/51.jpg',
      income:18049,
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      img:'https://randomuser.me/api/portraits/men/20.jpg',
      income:13005,
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        }
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      img:'https://randomuser.me/api/portraits/men/9.jpg',
      income:18500,
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653'
        }
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications'
      }
    },
    {
      id: 4,
      name: 'Patric Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      img:'https://randomuser.me/api/portraits/men/47.jpg',
      income:10510,
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990'
        }
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services'
      }
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      img:'https://randomuser.me/api/portraits/men/24.jpg',
      income:11300,
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342'
        }
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems'
      }
    },
    {
      id: 6,
      name: 'Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      img:'https://randomuser.me/api/portraits/men/17.jpg',
      income:13200,
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478'
        }
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications'
      }
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      img:'https://randomuser.me/api/portraits/men/94.jpg',
      income:10400,
      address: {
        street: 'Rex Trail',
        suite: 'Suite 280',
        city: 'Howemouth',
        zipcode: '58804-1099',
        geo: {
          lat: '24.8918',
          lng: '21.8984'
        }
      },
      phone: '210.067.6132',
      website: 'elvis.io',
      company: {
        name: 'Johns Group',
        catchPhrase: 'Configurable multimedia task-force',
        bs: 'generate enterprise e-tailers'
      }
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      img:'https://randomuser.me/api/portraits/men/36.jpg',
      income:9000,
      address: {
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        geo: {
          lat: '-14.3990',
          lng: '-120.7677'
        }
      },
      phone: '586-4936943-140',
      website: 'jacynthe.com',
      company: {
        name: 'Abernathy Group',
        catchPhrase: 'Implemented secondary concept',
        bs: 'e-enable extensible e-tailers'
      }
    },
    {
      id: 9,
      name: 'Glenn Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      img:'https://randomuser.me/api/portraits/men/67.jpg',
      income:49300,
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889'
        }
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies'
      }
    },
    {
      id: 10,
      name: 'Robert DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      img:'https://randomuser.me/api/portraits/men/75.jpg',
      income:38020,
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232'
        }
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models'
      }
    },
    {
        id: 11,
        name: 'John cina',
        username: 'Moriah.Stanton',
        email: 'johncina@karina.biz',
        img:'https://randomuser.me/api/portraits/men/52.jpg',
        income:19000,
        address: {
          street: 'Mirpur 2',
          suite: 'Suite 198',
          city: 'Dhaka',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-948-9804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      },
      {
        id: 12,
        name: 'Mitchele starc',
        username: 'Moriah.Stanton',
        email: 'Richa@chadda.biz',
        img:'https://randomuser.me/api/portraits/men/78.jpg',
        income:8000,
        address: {
          street: 'Dhanmondi',
          suite: 'Suite 198',
          city: 'Dhaka',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-948-9854',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      },

      {
        id: 13,
        name: 'Kane williamson',
        username: 'Moriah.Stanton',
        email: 'salman@khan.biz',
        img:'https://randomuser.me/api/portraits/men/85.jpg',
        income:99000,
        address: {
          street: 'Bandra',
          suite: 'Suite 198',
          city: 'Mumbai',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-951-9874',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      },
      {
        id: 14,
        name: 'Robert perry',
        username: 'Moriah.Stanton',
        email: 'robin@khan.biz',
        img:'https://randomuser.me/api/portraits/men/33.jpg',
        income:79000,
        address: {
          street: 'Uttara',
          suite: 'Suite 198',
          city: 'Dhaka',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-948-1134',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      },

      {
        id: 15,
        name: 'John wick',
        username: 'Moriah.Stanton',
        email: 'sumon@khan.biz',
        img:'https://randomuser.me/api/portraits/men/1.jpg',
        income:61000,
        address: {
          street: 'Gulshan',
          suite: 'Suite 198',
          city: 'Dhaka',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-5381-1134',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
    }
      

  ]


  export default usersData;
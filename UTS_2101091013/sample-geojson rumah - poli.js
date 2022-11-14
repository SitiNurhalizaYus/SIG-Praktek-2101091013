var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.00341892242432, 39.75383843460583],
                    [-105.0008225440979, 39.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.0008225440979, 39.751891803969535],
                    [-104.99820470809937, 39.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-104.99820470809937, 39.74979664004068],
                    [-104.98689651489258, 39.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98999178409576, 39.74683938093904]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98689115047453, 39.747924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                  100.37658359636288,
                  -0.923120467585349
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Mesjid Raya Ampang"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates":[
                  100.37865050777668,
                  -0.9227072527333178
                ],
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Mesjid Al-Firdaus"
            },
            "id": 53
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates":[
                  100.38380729225725,
                  -0.922816087438747
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Mesjid Al-falah"
            },
            "id": 54
        }
    ]
};


var campus = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "popupContent": "Wilayah sekitar rumah"
    },
      "geometry": {
        "coordinates": [
          [
            [
              100.38156454163004,
              -0.9224571355740636
            ],
            [
              100.38163162287992,
              -0.9227429229708548
            ],
            [
              100.3819582793958,
              -0.9227283419818377
            ],
            [
              100.38187953184269,
              -0.9223871468194034
            ],
            [
              100.38156454163004,
              -0.9224571355740636
            ]
          ]
        ],
        "type": "Polygon",
      }
    },
    {
      "type": "Feature",
      "properties": {
          "popupContent": "Rumah saya"
      },
      "geometry": {
        "coordinates": [
          100.38177745168088,
          -0.9224600517718926
        ],
        "type": "Point"
      },
      
      "id": 58
    },
    {
      "type": "Feature",
      "properties": {
        "popupContent": "Jalan menuju kampus politeknik negeri padang"
    },
      "geometry": {
        "coordinates": [
          [
            100.38173541075776,
            -0.9223262681332187
          ],
          [
            100.38507132440606,
            -0.9216861490720447
          ],
          [
            100.38831006303485,
            -0.9210219625124267
          ],
          [
            100.39343365283764,
            -0.9232512210375887
          ],
          [
            100.39540152894574,
            -0.9240862599383206
          ],
          [
            100.39712942016422,
            -0.9245373728264781
          ],
          [
            100.3979933657726,
            -0.9247389338853651
          ],
          [
            100.39937508163564,
            -0.925159833199416
          ],
          [
            100.40370440907583,
            -0.9260332642203934
          ],
          [
            100.41022600209084,
            -0.9273686066556763
          ],
          [
            100.41294344447647,
            -0.9278516087391893
          ],
          [
            100.4132681377061,
            -0.9280137841149809
          ],
          [
            100.41405681473901,
            -0.9285708498144913
          ],
          [
            100.41505938699055,
            -0.9293722772229103
          ],
          [
            100.4157180938899,
            -0.9299514087718705
          ],
          [
            100.41678565334854,
            -0.9309279833245938
          ],
          [
            100.41936313603168,
            -0.9304337068754194
          ],
          [
            100.42199308669916,
            -0.9302296182087986
          ],
          [
            100.42386361476969,
            -0.9301255869133769
          ],
          [
            100.42497839982894,
            -0.9300235425718455
          ],
          [
            100.42615598968098,
            -0.9296860112687853
          ],
          [
            100.42714376112735,
            -0.9292778338347745
          ],
          [
            100.43150903518807,
            -0.9270484425992152
          ],
          [
            100.43470630590855,
            -0.9259483487342095
          ],
          [
            100.43562482599378,
            -0.9258227555503851
          ],
          [
            100.43696031765205,
            -0.9259089229247763
          ],
          [
            100.43897792159697,
            -0.9248256815565412
          ],
          [
            100.43985753085411,
            -0.9244799580540644
          ],
          [
            100.44225981415138,
            -0.9240874791772598
          ],
          [
            100.44512570777727,
            -0.9236322036261413
          ],
          [
            100.44809323420196,
            -0.9232004767574438
          ],
          [
            100.45066038007815,
            -0.9215520645910402
          ],
          [
            100.45387915993399,
            -0.9191444874331722
          ],
          [
            100.45456902992322,
            -0.9199464281142298
          ],
          [
            100.45606094388296,
            -0.9186958492115878
          ],
          [
            100.45672645097733,
            -0.9184541220519975
          ],
          [
            100.45724245129418,
            -0.9183307465234662
          ],
          [
            100.45764698176248,
            -0.9184653380083745
          ],
          [
            100.45774232964777,
            -0.9183700023733223
          ],
          [
            100.45787132972691,
            -0.9183924342880658
          ],
          [
            100.45793302541824,
            -0.9185662816198175
          ],
          [
            100.45904915653767,
            -0.9189980959250619
          ],
          [
            100.45964367864173,
            -0.9190429597454539
          ],
          [
            100.46013163546314,
            -0.9189532321030924
          ],
          [
            100.46076541846185,
            -0.9186896571412291
          ],
          [
            100.46129961952556,
            -0.9182578427991075
          ],
          [
            100.46170344585909,
            -0.917725084772087
          ],
          [
            100.46196705471817,
            -0.9171755027245609
          ],
          [
            100.46209695014517,
            -0.915533523574183
          ],
          [
            100.46264816703803,
            -0.9148354045767633
          ],
          [
            100.4633022777507,
            -0.9147104780056878
          ],
          [
            100.46517647103582,
            -0.9147030176902575
          ],
          [
            100.46562479411028,
            -0.9147324121782248
          ],
          [
            100.46624215702644,
            -0.914798549774531
          ],
          [
            100.46625097638895,
            -0.9141883372521278
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupContent": "Daerah kampus"
    },
      "geometry": {
        "coordinates": [
          [
            [
              100.46591010973293,
              -0.912440037465899
            ],
            [
              100.46563333976758,
              -0.9145643839311504
            ],
            [
              100.46633340497272,
              -0.9148004223494297
            ],
            [
              100.46682996285199,
              -0.9148411186274075
            ],
            [
              100.4675056071784,
              -0.9149550682017775
            ],
            [
              100.46817311121231,
              -0.9150039037324547
            ],
            [
              100.46866966909158,
              -0.9147515868160099
            ],
            [
              100.46893015847064,
              -0.9146132194670997
            ],
            [
              100.46906040316009,
              -0.9142062566460254
            ],
            [
              100.46919878814208,
              -0.9133109382755862
            ],
            [
              100.46910924491777,
              -0.9129772286441664
            ],
            [
              100.46884061524634,
              -0.9127656078869109
            ],
            [
              100.46591010973293,
              -0.912440037465899
            ]
          ]
        ],
        "type": "Polygon"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "popupContent": "Politeknik Negeri Padang"
    },
      "geometry": {
        "coordinates": [
          100.46622492345978,
          -0.9138806978198062
        ],
        "type": "Point"
      }
    }
  ]
}

var tempat = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          100.37658359636288,
          -0.923120467585349
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          100.37865050777668,
          -0.9227072527333178
        ],
        "type": "Point"
      }
    },
  
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          100.38380729225725,
          -0.922816087438747
        ],
        "type": "Point"
      }
    },
  ]
};


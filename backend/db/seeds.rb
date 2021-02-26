# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Plant.create([
    {sci_name: "Philodendron hederaceum",
    care: "Philodendron hederaceum (common name: heartleaf philodendron synonym: Philodendron scandens) is a species of flowering plant in the family Araceae, native to Central America and the Caribbean.",
    common_name: "Heartleaf philodendron",
    img_src: "https://img.sundaygardener.net/heartleaf-philodendron"
    },
    {sci_name: "Scindapsus pictus ",
    care: "Satin Pothos is just as easy to grow as its relative, golden pothos (Epipremnum aureum). Keep it warm and take care not to overwater this house plant. Cold drafts and soggy soil are two things it won't tolerate. You'll see the best leaf color and variegation by keeping it in bright, indirect light. You'll also keep the plant healthy by boosting the humidity around it. In fact, its variegated foliage makes Satin Pothos a beautiful addition to a terrarium.",
    common_name: "Satin Pothos",
    img_src: "https://www.primrose.co.uk/images/P50475_main.jpg"
    },

])

tropics = Plant.create([
    {sci_name: "Ficus elastica",
    care: "Thrives in medium to bright indirect light, and can tolerate bright direct light. Water every 1-2 weeks, allowing soil to dry out between waterings. Increase frequency with increased light.",
    common_name: "Rubber Plant",
    img_src: "https://s3.amazonaws.com/mygardenlife.com/plant-library/full/5426_26.jpg"
    },
    {sci_name: "Epipremnum",
    care: "Epipremnum is a genus of flowering plants in the family Araceae, found in tropical forests from China, the Himalayas, and Southeast Asia to Australia the western Pacific. They are evergreen perennial vines climbing with the aid of aerial roots. They may be confused with other Monstereae such as Rhaphidophora, Scindapsus and Amydrium. All parts of the plants are toxic, mostly due to trichosclereids (long sharp cells) and raphides. Plants can grow to over 40 m (131 ft) with leaves up to 3 m (10 ft) long, but in containers the size is much reduced. The plants, commonly known as centipede tongavine, pothos or devil's ivy, depending on species, are typically grown as houseplants in temperate regions. Juvenile leaves are bright green, often with irregularly variegated patterns of yellow or white. They may find host trees by the use of Skototropism.",
    common_name: "Devil's ivy",
    img_src: "http://cdn.shopify.com/s/files/1/0847/2842/products/Devils-Ivy-Highgate-Flowers_2_grande.jpg?v=1561024604"
    }
])

easy = Plant.create([   
    {sci_name: "Sansevieria",
    care: "Can handle low or bright light. Let soil dry completely between waterings or roots will rot.",
    common_name: "Snake Plant",
    img_src: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Nursery-Pot-4_Sansevieria-Zeylanica-4.jpg?v=1544499843"
    },
    {sci_name: "Monstera deliciosa",
    care: "Because of its origin in the tropical rainforests of Central and South America, the Swiss cheese plant is best suited to indoor growth in North America, as it cannot withstand temperatures below 55 degrees Fahrenheit. When planting a Monstera, select a deep pot with good drainage, and a peaty potting soil. Fill the bottom third of the pot with soil, and establish a stake in the pot as these plants are climbers. Cover the roots with soil and use plant ties to secure the stem to the stake. Place in a location that receives bright, indirect sunlight. Monsteras do best with moderate watering about once a week during the growing season, and less frequently during the fall and winter.",
    common_name: "Swiss Cheese ",
    img_src: "https://smartgardenguide.com/wp-content/uploads/2019/09/monstera-deliciosa-care-2.jpg"
    },
    {sci_name: "Maranta leuconeura",
    care: "Prayer plants are low-growing, spreading plants that thrive best when provided with greenhouse-like conditions, including warm, moist, gentle airflow, and plenty of fertilizer. Plants that are kept too cool or too dry are likely to lose their leaves or suffer from fungal infections that can cause the plant to die from root rot or collapse. Likewise, plants that are exposed to too much sun can become washed out and develop brown blotches on their leaves.",
    common_name: "Prayer Plant",
    img_src: "https://www.trees.com/wp-content/uploads/2018/06/Maranta-leuconeura-scaled.jpg"
    },
    {sci_name: "Aspidistra elatior",
    care: " Tolerant of neglect, it is widely cultivated as a houseplant. It is tolerant of low light, low humidity, temperature fluctuation and irregular watering. It is best situated in a position away from direct sun to avoid leaf bleaching. Good drainage is also required for optimal growth and to avoid root rot.",
    common_name: "Cast Iron Plant",
    img_src: "https://www.florabundance.com/wp-content/uploads/2018/03/aspidistra-variegated-2.jpg"
    },
    {sci_name: "Zamioculcas",
    care: "Zamioculcas (common names Zanzibar gem, ZZ plant, Zuzu plant, aroid palm, eternity plant or emerald palm) is a genus of flowering plant in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant native to eastern Africa, from Kenya south to northeastern South Africa. Zamioculcas is grown as an ornamental plant, mainly for its attractive glossy foliage and easy care. Dutch nurseries started wide-scale commercial propagation of the plant around 1996. It was first described as Caladium zamiifolium by Loddiges in 1829, moved to his new genus Zamioculcas by Heinrich Wilhelm Schott and given its established name Zamioculcas zamiifolia by Adolf Engler.",
    common_name: "Zanzibar gem, Zz plant",
    img_src: "https://www.mydomaine.com/thmb/DIJr_inWdH5MgRYtoeoHUSTR0Uw=/1885x1414/smart/filters:no_upscale()/zz-plant-pot-f34da789c4c14ef7a247ebafcff7e9c3.jpg"
    }
])

succulents = Plant.create([

    {sci_name: "Aloe brevifolia",
    care: "Full sun to partial shade. Not suited for indoor growing",
    common_name: "Short-leaved Aloe",
    img_src: "https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/1280x1280/products/2158/3445/aloe-brevifolia-small__62237.1484605662.jpg?c=2"
    },
    {sci_name: "Haworthia",
    care: "Moderate Light Levels Avoid direct sunlight and very shady areas. Moderate Watering Once a week or so in Summer and once every two weeks in Winter. Feeding Try to fertilize once every three months when it's growing.",
    common_name: "Zebra Plant",
    img_src: "https://www.vistasucculents.com/wp-content/uploads/2020/04/Zebra_3-e1587531500273.jpeg"
    },   
])


Plant.create([
    {sci_name: "Helleborus niger",
    care: "Helleborus niger, commonly called Christmas rose or black hellebore, is an evergreen perennial flowering plant in the buttercup family, Ranunculaceae. It is poisonous. Although the flowers resemble wild roses (and despite its common name), Christmas rose does not belong to the rose family (Rosaceae).",
    common_name: "Christmas rose, Black hellebore",
    img_src: "https://static.ashwoodnurseries.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_double_resized.jpg"
    },
    {sci_name: "Philodendron bipinnatifidum",
    care: "It can tolerate deep shade but prefers bright, indirect light and moist soil. ",
    common_name: "Tree Philodendron",
    img_src: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Milton-41-4534.041-WH_Philodendron-Hope-Selloum-10.jpg?v=1590531477"
    },
    {sci_name: "Strelitzia",
    care: "Thrives in bright direct to bright indirect light. Can take full sun. Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Bird of Paradise can be sensitive to hard tap water. Try using filtered water or leaving water out overnight before using.",
    common_name: "Bird of Paradise",
    img_src: "https://images.homedepot-static.com/productImages/3803458d-d99a-45ca-ac40-69d97be9f4e9/svn/artificial-trees-lzb605-gr-64_1000.jpg"
    },
    {sci_name: "Epipremnum aureum",
    care: "These plants enjoy a wide range of environments. They do well in bright indirect light as well as low light and can be grown in dry soil or in vases of water. They will thrive in nutrient rich soil, but do almost as well in nutrient poor soil.",
    common_name: "Golden Pothos",
    img_src: "https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg"
    },
])
Collection.create([
    {name: "Tropical", user: "Claire", plants: tropics},
    {name: "Succulents", user: "Chrysanthemum", plants: succulents},
    {name: "Easy Growers", user: "Lily", plants: easy}
])

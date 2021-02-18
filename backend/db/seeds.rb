# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

succulents = Plant.create([
    {sci_name: "Sansevieria",
    care: "Can handle low or bright light. Let soil dry completely between waterings or roots will rot.",
    common_name: "Snake Plant",
    img_src: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Nursery-Pot-4_Sansevieria-Zeylanica-4.jpg?v=1544499843"
    },
    {sci_name: "Aloe brevifolia",
    care: "Full sun to partial shade. Not suited for indoor growing",
    common_name: "Short-leaved Aloe",
    img_src: "https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/1280x1280/products/2158/3445/aloe-brevifolia-small__62237.1484605662.jpg?c=2"
    }
    # {sci_name: , img_src: , common_name: , care:}
    # {sci_name: , img_src: , common_name: , care:}
])
tropics = Plant.create([
    {sci_name: "Philodendron bipinnatifidum",
    care: "It can tolerate deep shade but prefers bright, indirect light and moist soil. ",
    common_name: "Tree Philodendron",
    img_src: "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Milton-41-4534.041-WH_Philodendron-Hope-Selloum-10.jpg?v=1590531477"
    },
    {sci_name: "Ficus elastica",
    care: "Thrives in medium to bright indirect light, and can tolerate bright direct light. Water every 1-2 weeks, allowing soil to dry out between waterings. Increase frequency with increased light.",
    common_name: "Rubber Plant",
    img_src: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/09/ficus-elastica.jpg"
    },
    {sci_name: "Epipremnum aureum",
    care: "These plants enjoy a wide range of environments. They do well in bright indirect light as well as low light and can be grown in dry soil or in vases of water. They will thrive in nutrient rich soil, but do almost as well in nutrient poor soil.",
    common_name: "Golden Pothos",
    img_src: "https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg"
    },
    {sci_name: "Botanical Name: Epipremnum",
    care: "Epipremnum is a genus of flowering plants in the family Araceae, found in tropical forests from China, the Himalayas, and Southeast Asia to Australia the western Pacific. They are evergreen perennial vines climbing with the aid of aerial roots. They may be confused with other Monstereae such as Rhaphidophora, Scindapsus and Amydrium. All parts of the plants are toxic, mostly due to trichosclereids (long sharp cells) and raphides. Plants can grow to over 40 m (131 ft) with leaves up to 3 m (10 ft) long, but in containers the size is much reduced. The plants, commonly known as centipede tongavine, pothos or devil's ivy, depending on species, are typically grown as houseplants in temperate regions. Juvenile leaves are bright green, often with irregularly variegated patterns of yellow or white. They may find host trees by the use of Skototropism.",
    common_name: "Common Name(s): Centipede tongavine, Pothos, Devil's ivy",
    img_src: "http://cdn.shopify.com/s/files/1/0847/2842/products/Devils-Ivy-Highgate-Flowers_2_grande.jpg?v=1561024604"
    }
])

Plant.create([
    {sci_name: "Botanical Name: Helleborus niger",
    care: "Helleborus niger, commonly called Christmas rose or black hellebore, is an evergreen perennial flowering plant in the buttercup family, Ranunculaceae. It is poisonous. Although the flowers resemble wild roses (and despite its common name), Christmas rose does not belong to the rose family (Rosaceae).",
    common_name: "Common Name(s): Christmas rose, Black hellebore",
    img_src: "https://static.ashwoodnurseries.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_double_resized.jpg"
    },
    {sci_name: "Botanical Name: Zamioculcas",
    care: "Zamioculcas (common names Zanzibar gem, ZZ plant, Zuzu plant, aroid palm, eternity plant or emerald palm) is a genus of flowering plant in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant native to eastern Africa, from Kenya south to northeastern South Africa. Zamioculcas is grown as an ornamental plant, mainly for its attractive glossy foliage and easy care. Dutch nurseries started wide-scale commercial propagation of the plant around 1996. It was first described as Caladium zamiifolium by Loddiges in 1829, moved to his new genus Zamioculcas by Heinrich Wilhelm Schott and given its established name Zamioculcas zamiifolia by Adolf Engler.",
    common_name: "Common Name(s): Zanzibar gem, Zz plant, Zuzu plant, Aroid palm, Eternity plant, Emerald palm, Zamioculcas zamiifolia",
    img_src: "https://www.mydomaine.com/thmb/DIJr_inWdH5MgRYtoeoHUSTR0Uw=/1885x1414/smart/filters:no_upscale()/zz-plant-pot-f34da789c4c14ef7a247ebafcff7e9c3.jpg"
    },
    {sci_name: "Botanical Name: Philodendron hederaceum",
    care: "Philodendron hederaceum (common name: heartleaf philodendron synonym: Philodendron scandens) is a species of flowering plant in the family Araceae, native to Central America and the Caribbean.",
    common_name: "Common Name(s): Heartleaf philodendron",
    img_src: "https://img.sundaygardener.net/heartleaf-philodendron"
    },
    {sci_name: "Strelitzia",
    care: " Thrives in bright direct to bright indirect light. Can take full sun. Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Bird of Paradise can be sensitive to hard tap water. Try using filtered water or leaving water out overnight before using.",
    common_name: "Bird of Paradise",
    img_src: "https://images.homedepot-static.com/productImages/3803458d-d99a-45ca-ac40-69d97be9f4e9/svn/artificial-trees-lzb605-gr-64_1000.jpg"
    }
])
Collection.create([
    {name: "Succulents", user: "Claire", plants: tropics},
    {name: "Tropical", user: "Nicco", plants: succulents}
])
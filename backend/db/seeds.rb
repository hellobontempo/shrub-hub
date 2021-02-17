# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

succulents = Plant.create([
    {sci_name: "Sansevieria", img_src: "https://www.joyusgarden.com/wp-content/uploads/2017/05/snake-plant-care.jpg", common_name: "Snake Plant", care:"Can handle low or bright light. Let soil dry completely between waterings or roots will rot."},
    {sci_name: "Aloe brevifolia", img_src: "https://www.succulentsandsunshine.com/wp-content/uploads/2018/11/Aloe-brevifolia-Short-leaved-Aloe-succulent-care-and-propagation-information.jpg", common_name: "Short-leaved Aloe", care:"Full sun to partial shade. Not suited for indoor growing"}
    # {sci_name: , img_src: , common_name: , care:}
    # {sci_name: , img_src: , common_name: , care:}
])
tropics = Plant.create([
    {sci_name: "Philodendron bipinnatifidum", img_src: "https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Philodendron-selloum--Forest-and-Kim-Starr--CC-BY.jpg", common_name: "Tree Philodendron" , care: "It can tolerate deep shade but prefers bright, indirect light and moist soil. "},
    {sci_name: "Ficus elastica", img_src: "https://i.pinimg.com/originals/ff/54/fe/ff54feb5db8fcb8615cdd8220ef9053f.jpg", common_name: "Rubber Plant", care: "Thrives in medium to bright indirect light, and can tolerate bright direct light. Water every 1-2 weeks, allowing soil to dry out between waterings. Increase frequency with increased light."},
    {sci_name: "Epipremnum aureum", img_src: "https://www.thespruce.com/thmb/7DmkYtTr2cm7tGvdk8sqtvoSGDo=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KaraRileyPothos-8-26837bc7564944ed80c22044e045a264.jpg", common_name: "Golden Pothos", care: "These plants enjoy a wide range of environments. They do well in bright indirect light as well as low light and can be grown in dry soil or in vases of water. They will thrive in nutrient rich soil, but do almost as well in nutrient poor soil."}
])

Collection.create([
    {name: "Succulents", user: "Claire", plants: tropics},
    {name: "Tropical", user: "Nicco", plants: succulents}
])


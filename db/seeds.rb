# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Profile.create!(first_name: 'Jo', age: '27', zipcode: '45244', gender: 'F', user_id: 2)
Profile.create(first_name: 'Steph', age: '25', zipcode: '45244', gender: 'F', user_id: 3)

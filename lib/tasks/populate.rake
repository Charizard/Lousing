namespace :populate do
  task :shortlists => :environment do
    20.times do
      u = User.new(
        :name        => Faker::Name.name,
        :email       => Faker::Internet.email,
        :password    => Faker::Lorem.characters(10),
        :is_landlord => false
      )

      u.save()

      u.short_listed_properties<< PropertyListing.first
    end
  end
end

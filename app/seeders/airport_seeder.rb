class AirportSeeder
  @airports = [
    {
      name: "Austin-Bergstrom International Airport",
      location: "Austin, TX",
      airport_code: "AUS",
      description:
       "The primary airport for Texas's capitol city. The airport features locations of many local restaurants and has live music performances daily.",
      lat: 0.301974711e2,
      long: -0.976663529e2
    },
    {
      name: "Logan International Airport",
      location: "Boston, MA",
      airport_code: "BOS",
      description:
       "New England\'s largest airport with many affordable flights. It is a major hub for many US airlines.",
      lat: 42.3656132,
      long: -71.0095602
    },
    {
      name: "Portland International Airport",
      location: "Portland, OR",
      airport_code: "PDX",
      description:
       "Portland International Airport is a joint civil–military airport and the largest airport in the U.S. state of Oregon that accounts for 90% of passenger air travel and more than 95% of air cargo of the state.",
      lat: 45.5897694,
      long: -122.5950942
    },
    {
      name: "Los Angeles International Airport",
      location: "Los Angeles, CA",
      airport_code: "LAX",
      description:
       "LAX is the third busiest airport in the US by total flights, serving over 81 million passengers per year.",
      lat: 33.9415889,
      long: -118.40853
    },
    {
      name: "Dallas/Fort Worth International Airport",
      location: "Dallas, TX",
      airport_code: "DFW",
      description:
       "Dallas/Fort Worth International Airport is the primary international airport serving the Dallas–Fort Worth metroplex area in the U.S. state of Texas. It is the largest hub for American Airlines, which is headquartered near the airport.",
      lat: 32.8998091,
      long: -97.0403352
    },
    {
      name: "Hartsfield–Jackson Atlanta International Airport",
      location: "Atlanta, GA",
      airport_code: "ATL",
      description:
       "ATL is the busiest airport in the US, and is a major hub for the US\'s largest airlines.",
      lat: 33.6407282,
      long: -84.4277001
    },
    {
      name: "Denver International Airport",
      location: "Denver, CO",
      airport_code: "DEN",
      description:
       "This airport is known for the large bronco statue that stands at its entrance with glowing red eyes. Both during construction and after opening, DIA has set aside a portion of its construction and operation budgets for art. Gargoyles hiding in suitcases are present above exit doors from baggage claims.",
      lat: 39.8560963,
      long: -104.6737376
    },
    {
      name: "John F. Kennedy International Airport",
      location: "New York, NY",
      airport_code: "JFK",
      description:
       "While JFK is only the 6th busiest airport in the US, it is the busiest international air passenger gateway into North America. More than ninety airlines operate from the airport, with nonstop or direct flights to destinations in all six inhabited continents.",
      lat: 40.6413111,
      long: -73.7781391
    }
  ]

  def self.seed!
    @airports.each do |airport|
      seed = Airport.find_or_initialize_by(
        name: airport[:name],
        location: airport[:location],
        airport_code: airport[:airport_code],
        description: airport[:description],
        lat: airport[:lat],
        long: airport[:long]
        )
      seed.save!
    end
  end
end

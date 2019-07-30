module App
  module Models
    class Stat < Model
      property 'recent_run_totals', transform_with: ->(v) { Strava::Models::ActivityTotal.new(v) }}
      property 'ytd_run_totals', transform_with: ->(v) { Strava::Models::ActivityTotal.new(v) }
    end
  end
end

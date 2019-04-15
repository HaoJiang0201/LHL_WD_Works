# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  # Your code Here
  # puts "you are looking for id: #{id}"
  @candidates.each do |candidate|
    if candidate[:id] == id
      return candidate
    end
  end
  return nil
end

def experienced?(candidate)
  # Your code Here
  if candidate[:years_of_experience] > 2
    return true
  else
    return false
  end
end

def qualified_candidates(candidates)
  # Your code Here
  newCandidates = []
  @candidates.each do |candidate|
    puts "candidate = #{candidate}"
    if candidate[:years_of_experience] > 0
      if candidate[:github_points] > 100
        if candidate[:age] >= 18
          if candidate[:languages].include?("Ruby") || candidate[:languages].include?("Python")
            applied_date = candidate[:date_applied].to_time
            daysAgo = (Time.now-applied_date)/(24*60*60)
            if daysAgo <= 15
              newCandidates.push(candidate)
            end
          end
        end
      end
    end
  end
  return newCandidates
end

# More methods will go below
def ordered_by_qualifications(candidates)
  sortedCandidates = candidates.sort_by! { |candidate| [candidate[:years_of_experience], candidate[:github_points]] }
  return sortedCandidates.reverse! 
end

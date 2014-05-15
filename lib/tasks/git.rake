namespace :git do
  task commit: :environment do
    puts "Enter your message for commit"
    message = STDIN.gets.chomp

    `git add .`
    `git commit -m #{message}`
    `git push origin master`
  end
end
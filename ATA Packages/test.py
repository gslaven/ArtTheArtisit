# -*- coding: utf-8 -*-
   """
   Created on Mon Apr 23 09:49:37 2018
   
   @author: TCH_User
   """
   
   
   #http://api.wunderground.com/api/b237449efd64346c/conditions/q/CA/San_Francisco.json
   
   import requests
   #import os
   #clear = lambda: print("\n" * 30)    #just a hack to roll the console up 
   #so I can see what I printed
   
   #"current_observation"
   #"temp_f"
   # Make a tiny program to display the Lat, Long, eleveation and
   # temp of your api request
   
   #temp = data["current_observation"]["temp_f"]
   #elev = str(data["current_observation"]["display_location"]["elevation"])
   #location = data["current_observation"]["display_location"]["full"]
   #lat = str(data["current_observation"]["display_location"]["latitude"])
   #long = str(data["current_observation"]["display_location"]["longitude"])
   #Amble1 = ("It is currently ")
   #Amble2 = (" degrees ")
   #Amble3 = (" at an elevation of ")
   #Amble4 = (" in beautiful Latitude ")
   #Amble5 = (" and Longitude ")
   #
   #print(Amble1 + str(temp) + Amble2 + Amble3 + elev + 
   #      Amble4 + lat + Amble5 + long + " in the legal confines of " +  
   #      location)
   #
   #if temp >= 72:
   #    print("It is warm")
   #    print("I belong to warm days")
   #else:
   #    print("It is cold")
   #
   #print("The if statement is over")
   
   state = input("Enter your State: ")
   city = input("Enter your City: ")
   response = requests.get("http://api.wunderground.com"+
   "/api/b237449efd64346c/conditions/q/"+
   state + "/" + city + ".json")
   #print(response.status_code)
   data = response.json()
   
   if "current_observation" in data:
   temp = data["current_observation"]["temp_f"]
   elev = str(data["current_observation"]["display_location"]["elevation"])
   location = data["current_observation"]["display_location"]["full"]
   lat = str(data["current_observation"]["display_location"]["latitude"])
   long = str(data["current_observation"]["display_location"]["longitude"])
   print("it is currently " + str(temp) + 
 " degrees Farenheit in " +location+".")
   else:
   print(city + " is not a city in the state of " + state + ".")
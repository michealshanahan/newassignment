import React, {Component} from 'react'
import FriendCard from './FriendCard'





const Friends = () => {
    const friendos = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "hairless"
            },{
              name: "tiger",
              breed: "sphynx"
            },{
              name: "oscar",
              breed: "sphynx"
            }
          ]
        }
    ]

    const mappedFriends = friendos.map((friend, index) => {
        
        let photo ="https://loremflickr.com/320/240"
        return(
                <FriendCard key = {friend + index}  fName = {friend.name} age = {friend.age} pets = {friend.pets} profilePic = {photo + '/' + friend.name}/>
            
        )
    })
    return(mappedFriends)
}

export default Friends

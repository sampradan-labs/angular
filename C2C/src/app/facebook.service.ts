import { Injectable } from '@angular/core';

@Injectable()
export class FacebookService {
notifications = [
{id:0, text:`You are now friends with Sonal Vishwanathan`},
{id:1, text:`Suresh reacted to your post 'Amazing journey'`},
{id:2, text:`Mithali and 5 others commented on your post 'Amazing journey'`}
]
  constructor() { }

updateFbMessage(id, text){
    //Re-map the notifications object array based on the lambda expression where
    //the id in notifications object matches the id passed in the parameter, to located the correct object in the array. This is now be updated with the text passed in the parameter.
    this.notifications = this.notifications.map(n => n.id === id? {id, text}: n);
}
}

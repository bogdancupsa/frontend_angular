import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Adjust the path based on your folder structure

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {
   clients = [
    {
      name: 'User 1',
      address: 'Address 1',
      username: 'user1_username',
    },
    {
      name: 'User 2',
      address: 'Address 2',
      username: 'user2_username',
    },
    {
      name: 'User 3',
      address: 'Address 3',
      username: 'user3_username',
    },
    {
      name: 'User 4',
      address: 'Address 4',
      username: 'user4_username',
    },
    {
      name: 'User 5',
      address: 'Address 5',
      username: 'user5_username',
    },
    {
      name: 'User 6',
      address: 'Address 6',
      username: 'user6_username',
    },
    {
      name: 'User 7',
      address: 'Address 7',
      username: 'user7_username',
    },
    {
      name: 'User 8',
      address: 'Address 8',
      username: 'user8_username',
    },
    {
      name: 'User 9',
      address: 'Address 9',
      username: 'user9_username',
    },
    {
      name: 'User 10',
      address: 'Address 10',
      username: 'user10_username',
    },
    {
      name: 'User 11',
      address: 'Address 11',
      username: 'user11_username',
    },
    {
      name: 'User 12',
      address: 'Address 12',
      username: 'user12_username',
    },
    {
      name: 'User 13',
      address: 'Address 13',
      username: 'user13_username',
    },
    {
      name: 'User 14',
      address: 'Address 14',
      username: 'user14_username',
    },
    {
      name: 'User 15',
      address: 'Address 15',
      username: 'user15_username',
    },
  ];

  devices = [
    {
      name: 'Device 1',
      address: 'Location 1',
      description: 'Description for Device 1',
    },
    {
      name: 'Device 2',
      address: 'Location 2',
      description: 'Description for Device 2',
    },
    {
      name: 'Device 3',
      address: 'Location 3',
      description: 'Description for Device 3',
    },
    {
      name: 'Device 4',
      address: 'Location 4',
      description: 'Description for Device 4',
    },
    {
      name: 'Device 5',
      address: 'Location 5',
      description: 'Description for Device 5',
    },
    {
      name: 'Device 6',
      address: 'Location 6',
      description: 'Description for Device 6',
    },
    {
      name: 'Device 7',
      address: 'Location 7',
      description: 'Description for Device 7',
    },
    {
      name: 'Device 8',
      address: 'Location 8',
      description: 'Description for Device 8',
    },
    {
      name: 'Device 9',
      address: 'Location 9',
      description: 'Description for Device 9',
    },
    {
      name: 'Device 10',
      address: 'Location 10',
      description: 'Description for Device 10',
    },
    {
      name: 'Device 11',
      address: 'Location 11',
      description: 'Description for Device 11',
    },
    {
      name: 'Device 12',
      address: 'Location 12',
      description: 'Description for Device 12',
    },
    {
      name: 'Device 13',
      address: 'Location 13',
      description: 'Description for Device 13',
    },
    {
      name: 'Device 14',
      address: 'Location 14',
      description: 'Description for Device 14',
    },
    {
      name: 'Device 15',
      address: 'Location 15',
      description: 'Description for Device 15',
    },
  ];


  constructor(private userService: UserService) { }

  ngOnInit() {
    // Call your UserService method to get clients
    this.userService.getClients().subscribe(
      response => {
        this.clients = response;
      },
      error => {
        console.error('Failed to fetch clients', error);
        // Handle error, show a message, etc.
      }
    );
  }
}

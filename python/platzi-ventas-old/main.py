import sys
import csv
import os

CLIENT_TABLE = '.clients.csv'
CLIENT_SCHEMA = ['name', 'company', 'email', 'position']
clients = []

def _initialize_clients_from_storage():
    with open(CLIENT_TABLE, mode='r') as f:
        reader = csv.DictReader(f, fieldnames=CLIENT_SCHEMA)

        for row in reader:
            clients.append(row)



def _save_clients_to_storage():
    tmp_table_name = '{}.tmp'.format(CLIENT_TABLE)
    with open(tmp_table_name, mode='w') as f:
        writer = csv.DictWriter(f, fieldnames=CLIENT_SCHEMA)
        writer.writerows(clients)

        os.remove(CLIENT_TABLE)
        os.rename(tmp_table_name, CLIENT_TABLE)


def create_client (client_name):
    global clients

    if client_name not in clients:
        clients.append(client_name)
    else:
        print ('Client already is in the client\'s list')


def list_clients():
    global clients
    for i, client in enumerate(clients):
        print ("id:{}  name:{}  email:{}  company:{}  position:{}".format(i,client['name'],client['email'],client['company'],client['position']).split(','))


def update_client (client_name, updated_name):
    global clients

    if client_name in clients:
        index = clients.index(client_name)
        clients[index] = updated_name
    else:
        print ('Client is not in clients list')


def delete_client (client_name):
    global clients

    if client_name in clients:
        clients.remove(client_name)
    else:
        print('Client is not in clients list')


def search_client(client_name):
    for client in clients:
        if client != client_name:
            continue
        else:
            return True


def _print_welcome():
    print('Welcome to platzi ventas')
    print('*' * 50)
    print('What would you like to do today?')
    print('[C]reate client')
    print('[L]ist client')
    print('[U]pdate client')
    print('[D]elete client')
    print('[S]earch client')
    print('[E]xit')


def _get_client_name():
    client_name = None

    while not client_name:
        client_name = input ('What is the client name? ')

        if client_name == 'exit':
            client_name = None
            break

    if not client_name:
        sys.exit()

    return client_name


def _get_client_field(field_name):
    field = None
    while not field:
        field = input('What is the client {}? '.format(field_name))

    return field


if __name__ == '__main__':
    _initialize_clients_from_storage()

    command = 0

    while (command != 'E'):
        _print_welcome()

        command = input()
        command = command.upper()

        if command == 'C':
            client = {
                'name':     _get_client_field('name'),
                'company':  _get_client_field('company'),
                'email':    _get_client_field('email'),
                'position': _get_client_field('position'),
            }
            create_client (client)

        elif command == 'L':
            list_clients()
        elif command == 'D':
            client_name = _get_client_name()
            delete_client(client_name)
        elif command == 'U':
            client_name = _get_client_name()
            updated_client_name = input ('What is the updated client name? ')
            update_client(client_name, updated_client_name)
        elif command == 'S':
            client_name = _get_client_name()
            found = search_client(client_name)

            if found:
                print('The client is in the client\'s list')
            else:
                print('The client {} is not in the client\'s list'.format(client_name))
        elif command == 'E':
            break
        else:
            print('Invalid command')

    _save_clients_to_storage()
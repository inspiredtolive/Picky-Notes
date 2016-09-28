/* jshint esversion: 6 */
import {expect} from 'chai';
import * as actions from '../../client/src/actions/actionCreators';

describe('actions', () => {
  it('should create an action that creates a user', () => {
    const profile = { id: '10206258612098067',
      username: undefined,
      displayName: undefined,
      name:
        { familyName: 'Rathi',
         givenName: 'Kunal',
         middleName: undefined
        },
      gender: 'male',
      profileUrl: undefined,
      emails: [ { value: 'volcanic.phoenix@gmail.com' } ],
      photos: [ { value: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/735019_3760102334957_1830986009_n.jpg?oh=013867e20b591f1d7e6aa994b5d6861c&oe=587E7900' } ],
      provider: 'facebook',
      _raw: '{"id":"10206258612098067","last_name":"Rathi","first_name":"Kunal","picture":{"data":{"is_silhouette":false,"url":"https:\\/\\/scontent.xx.fbcdn.net\\/v\\/t1.0-1\\/p200x200\\/735019_3760102334957_1830986009_n.jpg?oh=013867e20b591f1d7e6aa994b5d6861c&oe=587E7900"}},"email":"volcanic.phoenix\\u0040gmail.com","gender":"male"}',
      _json:
        { id: '10206258612098067',
         last_name: 'Rathi',
         first_name: 'Kunal',
         picture: { data: [Object] },
         email: 'volcanic.phoenix@gmail.com',
         gender: 'male'
       }
     };

    const newUser = {
      facebookId: profile.id,
      name: profile._json.first_name + ' ' + profile._json.last_name,
      email: profile.emails[0].value,
      pictureUrl: profile.photos[0].value,
      gender: profile.gender
    };
    const expectedAction = {
      type: 'CREATE_USER',
      user: newUser
    };
    expect(actions.createUser(newUser).type).to.equal(expectedAction.type);
    expect(actions.createUser(newUser).user.facebookId).to.equal(expectedAction.user.facebookId);

  });
});

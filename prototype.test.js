describe('Prototype', () => {
  it('Should use Function constructor without prototype', () => {
    // TODO: implement
    function User(name) {
      this.name = name,
      this.sayHello = function () {
        return `Hello, ${this.name}`
      }
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Should use prototype', () => {
    function User(name) {
      this.name = name,
      User.prototype.sayHello = function () {
          return `Hello, ${this.name}`
      };
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
   expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    function ArticleList() {
        this.articles = [];
        ArticleList.prototype.add = function (str) {
            this.articles.push(str);
        };
        ArticleList.prototype.list = function (str) {
            return this.articles
        };
    }

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list().length).toBe(1);

    //my tests
    list1.add('aaa');
    expect(list1.list().length).toBe(2);
  });

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement
    function Component(obj) {
        this.data = {};
        for (let key in obj.data) {
            this.data[key] = obj.data[key];
        }
        Component.prototype.setData = function (obj) {
            for(let key in obj){
                if (key in this.data){
                    delete this.data[key];
                    this.data[key] = obj[key];
                }
                else {
                    this.data[key] = obj[key];
                }
            }
        };
        Component.prototype.getData = function () {
            return {name: this.data.name, msg: this.data.msg };
        };
        Component.prototype.render = function () {
            return '';
        };
    }

    /*
       UserComponent should extends Component
       override render method
       add 2 following methods:
       login - set data.name
       logout - set data.name undefined
     */


    // TODO: implement
    function UserComponent(obj) {
        Component.apply(this, arguments);
        this.render = function () {
            if(this.data.name == null){ // || this.data.name == undefined
                this.data.name = "guest";
            }
            return `${this.data.msg}, ${this.data.name}!`;
        };
        this.login  = function(name){
            this.data.name = name;
        };
        this.logout = function(){
            this.data.name = null;
        };
    }
    UserComponent.prototype = Component.prototype;

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it.only('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test

    // TODO: implement
    function extend(Child, Parent) {
        Child.prototype = Parent.prototype;
    }

    // TODO: implement
    function Component(obj) {
        this.data = {};
        for (let key in obj.data) {
            this.data[key] = obj.data[key];
        }
        Component.prototype.setData = function (obj) {
            for(let key in obj){
                if (key in this.data){
                    delete this.data[key];
                    this.data[key] = obj[key];
                }
                else {
                    this.data[key] = obj[key];
                }
            }
        };
        Component.prototype.getData = function () {
            return {name: this.data.name, msg: this.data.msg };
        };
        Component.prototype.render = function () {
            return '';
        };
    }
    
    // TODO: implement
    // NOTE: for inheritance should be used extend method
      function UserComponent(obj) {
       // Component.apply(this, arguments);
        this.render = function () {
            if(this.data.name == null){ // || this.data.name == undefined
                this.data.name = "guest";
            }
            return `${this.data.msg}, ${this.data.name}!`;
        };
        this.login  = function(name){
            this.data.name = name;
        };
        this.logout = function(){
             this.data.name = null;
        };
      }
    extend(UserComponent, Component);

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    console.log(component);
    console.log(Component);
    console.log(Component.prototype);

    console.log(userComponent);
    console.log(UserComponent);
    console.log(UserComponent.prototype);

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    // TODO implement Component and UserComponent from previous tasks using Class declaration
      class Component{
          constructor(obj){
              this.data = {};
              for (let key in obj.data) {
                  this.data[key] = obj.data[key];
              }
          }
          setData (obj) {
              for(let key in obj){
                  if (key in this.data){
                      delete this.data[key];
                      this.data[key] = obj[key];
                  }
                  else {
                      this.data[key] = obj[key];
                  }
              }
          };
          getData () {
              return {name: this.data.name, msg: this.data.msg };
          };
          render () {
              return '';
          };
      }
      class UserComponent extends Component{
          render () {
              if(this.data.name == null){ // || this.data.name == undefined
                  this.data.name = "guest";
              }
              return `${this.data.msg}, ${this.data.name}!`;
          };
          login (name){
              this.data.name = name;
          };
          logout (){
              this.data.name = null;
          };
      }

      const component = new Component({
          data: {
              name: 'Tom',
              msg: 'Hello'
          }
      });


      expect(component.render()).toBe('');
      expect(component.getData()).toEqual({
          name: 'Tom',
          msg: 'Hello'
      });
      component.setData({
          name: 'Bob'
      });
      expect(component.render()).toBe('');
      expect(component.getData()).toEqual({
          name: 'Bob',
          msg: 'Hello'
      });

      const userComponent = new UserComponent({
          data: {
              name: 'Tom',
              msg: 'Hello'
          }
      });

      expect(userComponent.render()).toBe('Hello, Tom!');
      userComponent.logout();
      expect(userComponent.render()).toBe('Hello, guest!');
      userComponent.login('Tom');
      userComponent.setData({ msg: 'Greetings' });
      expect(userComponent.render()).toBe('Greetings, Tom!');


    // TODO: write own test, see previous task as example
  });

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings, {name: {value: 'Tom'}});
    let greetingsBob = Object.create(greetings, {name: {value: 'Bob'} , msg:{ value: 'Greetings'} });

    expect( helloTom.greetings()).toBe('Hello, Tom!');
    expect( greetingsBob.greetings() ).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});

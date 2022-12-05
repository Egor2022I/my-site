import React from "react";
import Categories from "./component/Categories";
import Footer from "./component/Footer";
import Headr from "./component/Headr";
import Items, { items } from "./component/Items";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
         id: 1,
         title: 'Ободок с бантиками и галстуком',
         img: 'a.jpg',
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
         category: 'set',
         price: '500'
        },
        {
          id: 4,
          title: 'Два бантика и ободок',
          img: 'd.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'set',
          price: '400'
        },
        {
          id: 9,
          title: 'Два бантика и ободок',
          img: 'photo.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'set',
          price: '300'
        },
        {
          id: 2,
          title: 'Два бантика',
          img: 'b.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'suit',
          price: '300'
        },
        {
          id: 6,
          title: 'Комплект классических бантов',
          img: 'j.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'set',
          price: '300'
        },
        {
          id: 3,
          title: 'Бант с короной',
          img: 'c.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'one',
          price: '150'
        },
       
        {
          id: 5,
          title: 'Бант со звездочкой',
          img: 'i.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'one',
          price: '150'
        },
        
        {
          id: 7,
          title: 'Подарочный набор конфет с алкоголем',
          img: 'k.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'composition',
          price: '6000'
        },
        {
          id: 8,
          title: 'Два банта со снежинками',
          img: 'g.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'suit',
          price: '350'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOder = this.deleteOder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render () {
    return (
     <div className="wrapper">
       <Headr orders={this.state.orders} onDelete={this.deleteOder}/>
       <Categories chooseCategory={this.chooseCategory}/>
       <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
       <Footer />
     </div>
    );
  }

  deleteOder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if(category ==='all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    let isItArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isItArray = true
        
      })
      if(!isItArray)
        this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;

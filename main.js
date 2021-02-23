const app = new Vue({
  el:'#app',
  data(){
    return{
      books:[{
        id:1,
        name:'《算法导论》',
        date :'2006-09',
        price:85.00,
        count:1
      },
        {
          id:2,
          name:'《UNIX编程艺术》',
          date :'2006-09',
          price:85.00,
          count:1
        },
        {
          id:1,
          name:'《编程珠玑》',
          date :'2006-09',
          price:85.00,
          count:1
        },
        {
          id:1,
          name:'《代码大全》',
          date :'2006-09',
          price:85.00,
          count:1
        }]
    }
  },
  methods:{
    decrement(index){

      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      // let result= 0
      // for (let  i = 0;i < this.books.length; i++){
      //   result += this.books[i].price * this.books[i].count
      // }

      //第一个参数：preValue是Number类型，初值是0。
      //第二个参数：n是正在遍历的数组
      let result = 0
      result= this.books.reduce((preValue,n)=>{
        return preValue + n.price
      },0)   //若将0改为[]，则第一个参数的类型则是Array
      return result
    }
  },
  filters:{
  //  过滤器
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})

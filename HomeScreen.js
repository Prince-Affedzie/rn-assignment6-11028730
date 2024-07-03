import {View,Text, Image,ScrollView,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logo from './assets/Logo.png'
import searchIcon from './assets/Search.png'
import shoppingBag from './assets/shoppingBag.png'
import listView from './assets/Listview.png'
import filter from './assets/Filter.png'
import add from './assets/add_circle.png'
import menu from './assets/Menu.png'
import d1 from './assets/dress1.png'
import d2 from './assets/dress2.png'
import d3 from './assets/dress3.png'
import d4 from './assets/dress4.png'
import d5 from './assets/dress5.png'
import d6 from './assets/dress6.png'
import d7 from './assets/dress7.png'
const products = [
{key:'1',name:'Office Wear',des:'Reversible Angora Cardigan',price:'$120',source:d1},{key:'2',name:'Black',des:'Reversible Angora Cardigan',price:'$120',source:d2},
{key:'3',name:'Church Wear',des:'Reversible Angora Cardigan',price:'$120',source:d3},{key:'4',name:'Lamarei',des:'Reversible Angora Cardigan',price:'$120',source:d4},
{key:'5',name:'21WN',des:'Reversible Angora Cardigan',price:'$120',source:d5},
{key:'6',name:'Lopo',des:'Reversible Angora Cardigan',price:'$120',source:d6},
{key:'7',name:'21WN',des:'Reversible Angora Cardigan',price:'$120',source:d7},
{key:'8',name:'Lame',des:'Reversible Angora Cardigan',price:'$120',source:d1}]

const HomeScreen =({addToCart })=>{
  

return(
<ScrollView>
  <View style={styles.container}>
   
    <View style={styles.container2}>
    <Image style={styles.menu} source={menu}/>
    <Image style={styles.logo} source={logo}/>
    <Image style={styles.searchIcon} source={searchIcon}/>
    <Image style={styles.shoppingBag} source={shoppingBag}/>
    </View>
    <View style={styles.container3}>
    <Text style={{fontSize:30}}> Our Story</Text>
    <View style={styles.listView}>
    <Image style={{marginHorizontal:10,marginVertical:10}}  source={listView}/>
    </View>
    <View style={styles.filter}>
    <Image style={{marginHorizontal:10,marginVertical:10}}  source={filter}/>
    </View>
    </View>
    <FlatList data={products} numColumns={2} keyExtractor={(item) => item.key} renderItem={({item})=>{
      return(
        <View style={{margin:7,marginBottom:20,justifyContent:'space-around'}}>
        <Image style={{}} source={item.source}/>
        
        <TouchableOpacity onPress={()=>addToCart(item)} style={{flexDirection:'row' ,justifyContent:'space-between'}}>
        <Text style={{fontSize:18}}>{item.name}</Text>
        <Image source={add}/>
        </TouchableOpacity>
        <Text style={{fontSize:16}}>{item.des}</Text>
        <Text style={{color:'orange'}}>{item.price}</Text>
        
        </View>
      )
    }}/>
   
  </View>
</ScrollView>
)


}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  container2:{
    flexDirection:'row',
    marginTop:20

  },
  container3:{
   flexDirection:'row',
   margin:10,
   marginTop:20
  },
  menu:{
    marginLeft:20
  },
  logo:{
    left:'25%',
    
    
  },
  searchIcon:{
    left:'40%'
  },
  shoppingBag:{
    left:'50%'
  },
  listView:{
    backgroundColor:'#ECEBEB',

    margin:10,
    left:'30%',
    width:40,
    height:40,
    borderRadius:20
  },
  filter:{
    backgroundColor:'#ECEBEB',
    left:'35%',
    width:40,
    height:40,
    borderRadius:20,
    top:10
  }
})

export default HomeScreen;
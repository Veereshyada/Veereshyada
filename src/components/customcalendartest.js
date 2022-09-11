import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SelectDropdown from 'react-native-select-dropdown'
import COLORS from '../Constants/color'

const CustomCalendar = () => {

  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const day = currentDate.getDay()
  const year = currentDate.getFullYear()
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const Years = []

  for (i = 0; i <= 5; i++) {
    Years.push(year - i)
  }
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const [monthDays, setMonthDays] = useState(nDays[month])
  const [Index, setIndex] = useState(month)
  const [Year, setYear] = useState(year)

  if (Year % 4 == 0) {
    nDays[1] = 29
  }
  var index = month
  var currentMonth = Months[index]

  var currentMonthInitial = Months[Index].concat(" 1, ").concat(Year)

  var MonthInitial = new Date(currentMonthInitial);
  var weekday = MonthInitial.getDay();


const ShowCalender=(currentIndex)=>{
  console.log(currentIndex);
      setIndex(currentIndex)
      setMonthDays(nDays[currentIndex])

}
  

  const monthday = monthDays - 1

  var days = new Array(monthday)
  var initialDays = new Array(weekday)


  const setInitial = () => {
    for (var i = 0; i <= weekday - 1; i++) {
      var neg = -20
      initialDays[i] = neg + i
    }
  }
  const setDays = () => {

    for (var i = 0; i <= monthday; i++) {
      days[i] = i + 1
    }
  }
  setInitial()
  setDays()

  var FinalArray = initialDays.concat(days)
  var TotalMonthArray = []
  if (FinalArray.length > 35) {
    var lastDaysLength = 41 - FinalArray.length

    var lastDays = new Array(lastDaysLength)

    for (var i = 0; i <= lastDaysLength; i++) {
      var last = -50
      lastDays[i] = last + i
    }

    TotalMonthArray = FinalArray.concat(lastDays)

  }
  else if (FinalArray.length <= 35) {
    var lastDaysLength = 35 - FinalArray.length
    if (lastDaysLength === 0) {
      TotalMonthArray = FinalArray
    }
    else {
      var lastDays = new Array(lastDaysLength)

      for (var i = 0; i <= lastDaysLength - 1; i++) {
        var last = -50
        lastDays[i] = last + i
      }

      TotalMonthArray = FinalArray.concat(lastDays)
    }
  }

  const icon = () => {
    return (
      <Icon
      name='keyboard-arrow-down'
      size={24}
      color="#003B4D"
      />
    );
  };
  const setdata=(i)=>{
    console.log(i,'==============================>');
  }
  return (
    <View>
      <View style={{width:'90%',alignSelf:'center',flexDirection:'row'}}>
        <SelectDropdown
          data={Months}
          onSelect={(relation, getcurrentInded) => {
            ShowCalender(getcurrentInded)
          }}
          defaultButtonText={Months[index]}
          // buttonTextStyle={{ marginLeft: "-70%" }}
          buttonStyle={styles.btnst}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={icon}
        />
        <View style={styles.btnst}>
          <Text style={{color:'#000',fontSize:18, alignSelf:'center'}}>2022</Text>
        </View>
      </View>
      <View style={styles.Container}>
        <View style={{ flexDirection: "row", width: '100%' }}>

        </View>

        <View style={styles.daysNameContainer}>

          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>S</Text>
          </View>
          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>M</Text>
          </View>

          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>T</Text>
          </View>

          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>W</Text>
          </View>

          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>T</Text>
          </View>

          <View style={{ width: '14.50%' }}>
            <Text style={[styles.daysName]}>F</Text>
          </View>

          <View style={{ width: '13.50%' }}>
            <Text style={[styles.daysName]}>S</Text>
          </View>

        </View>

        <View style={styles.daysContainer}>

          {TotalMonthArray.map((itr) => (
            <View style={styles.dateBox} key={itr}>

              {itr > 0 ? <TouchableOpacity 
              onPress={()=>setdata(itr)}
              style={styles.dateFilled}>
                <Text style={[styles.dateWhite]}>{itr}</Text>
              </TouchableOpacity> :
                <View style={styles.date}></View>
              }

            </View>
          ))}




        </View>
      </View>
    </View>
  )
}

export default CustomCalendar

const styles = StyleSheet.create({
  dateBox: {
    height: 30,
    width: '13.50%',
    marginTop:Platform.OS=='android'?1: 1,
    marginLeft: 2,
  },
  dateBoxFilled: {
    height: 20,
    width: '14.25%',
    backgroundColor: COLORS.darkBlue
  },
  date: {
    marginTop: '12%',
    height: 23,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  dateFilled: {
    marginTop:Platform.OS=='android'?'15%':'15%',
    height: 23,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  dateWhite: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: COLORS.black,
    fontSize:Platform.OS=='android'?12: 17,
    padding: 5,
    marginBottom:Platform.OS=='android'?-5:0
  },
  dateYellow: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#d6a744',
    fontSize: 22
  },
  dateRed: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#b53535',
    fontSize: 22
  },
  dateGreen: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#73bf74',
    fontSize: 22
  },
  daysName: {
    textAlign: 'center',
    color: '#1b2041',
  },
  Container: {
    height: 230,
    width: '86%',
    padding:10,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'column'
  },
  monthName: {
    textAlign: 'center',
    fontSize: 23,
    color: '#1b2041',
  },
  daysNameContainer: {
    flexDirection: 'row',
    height: 20,
    alignSelf: 'center',
    backgroundColor: 'silver',
    marginTop:10
    // width: '95%'
  },
  daysContainer: {
    width: '100%',
    alignSelf: 'center',
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  btnst:

  {
    borderRadius: 10,
    width: "46%",
    height: 45,
    padding: 10,
    alignSelf: "center",
    backgroundColor: "silver",
    backgroundColor: "#f9f9f9",
    margin: '2%'
  }


})

import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'

const CustomCalendar = () => {

  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const day = currentDate.getDay()

  const Months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const [monthDays, setMonthDays] = useState(nDays[month])
  const [Index, setIndex] = useState(month)

  var index = month
  var currentMonth = Months[index]

  const prevMonth = () => {
    currentMonth = Months[--index]
    const In = (Index - 1) % 12

    if (In < 0) {
      setIndex(11)
      setMonthDays(nDays[11])
    }
    else {
      setIndex(In)
      setMonthDays(nDays[In])
    }
  }

  const nextMonth = () => {
    currentMonth = Months[++index]
    const I = (Index + 1) % 12

    setIndex(I)
    setMonthDays(nDays[I])
  }
  const monthday = monthDays - 1

  var days = new Array(monthday)
  const setDays = () => {

    for (var i = 0; i <= monthday; i++) {
      days[i] = i + 1
    }
  }
  setDays()
  console.log("AAAAAAAAAAAAAA", days, Months[Index])
  return (
    <View style={styles.Container}>
      <View style={{ height: '18%', flexDirection: "row" }}>

        <TouchableOpacity style={{ alignSelf: 'center', width: '20%' }} onPress={() => prevMonth()}>
          <Icon name="chevron-left" size={40} style={{ alignSelf: 'flex-start', color: '#1b2041' }} />
        </TouchableOpacity>

        <View style={{ alignSelf: 'center', width: '60%' }}>
          <Text style={[Textstyles.bold, styles.monthName]}>{Months[Index]}</Text>
        </View>

        <TouchableOpacity style={{ alignSelf: 'center', width: '20%' }} onPress={() => nextMonth(index)}>
          <Icon name="chevron-right" size={40} style={{ alignSelf: 'flex-end', color: '#1b2041' }} />
        </TouchableOpacity>

      </View>

      <View style={styles.daysNameContainer}>
        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Mon</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Tue</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Wed</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Thur</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Fri</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Sat</Text>
        </View>

        <View style={{ width: '14.25%' }}>
          <Text style={[Textstyles.bold, styles.daysName]}>Sun</Text>
        </View>
      </View>

      <View style={styles.daysContainer}>

        {/* <View style={styles.dateBox}>
          <View style={styles.date}></View>
        </View>

        <View style={styles.dateBox}>
          <View style={styles.date}></View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.date}></View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.date}></View>
        </View> */}
        {days.map((itr) => (
          <View style={styles.dateBox} key={itr}>
            <View style={styles.dateFilled}>
              <Text style={[Textstyles.normal, styles.dateWhite]}>{itr}</Text>
            </View>
          </View>
        ))}

        {/* <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>2</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>3</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>4</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>5</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>6</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>7</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>8</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>9</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>10</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>11</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateGreen}>12</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateGreen}>13</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>14</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateGreen}>15</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateGreen}>16</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>17</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>18</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateYellow}>19</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateYellow}>20</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateYellow}>21</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateYellow}>22</Text>
          </View>
        </View>
        <View style={styles.dateBoxFilled}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateYellow}>23</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>24</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>25</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>26</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>27</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>28</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>29</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>30</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <View style={styles.dateFilled}>
            <Text style={styles.dateWhite}>31</Text>
          </View>
        </View> */}


      </View>
    </View >
  )
}

export default CustomCalendar

const styles = StyleSheet.create({
  dateBox: {
    height: '20%',
    width: '14.25%',
  },
  dateBoxFilled: {
    height: '20%',
    width: '14.25%',
    backgroundColor: '#C0C0C0'
  },
  date: {
    height: '90%',
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
    alignSelf: 'center',
    borderRadius: 10
  },
  dateFilled: {
    marginTop: '12%',
    height: '70%',
    width: '70%',
    justifyContent: 'center',
    backgroundColor: '#1b2041',
    alignSelf: 'center',
    borderRadius: 10
  },
  dateWhite: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 17
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
    height: 320,
    width: '90%',
    backgroundColor: '#fff',
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
    height: '7%',
    alignSelf: 'center',
    width: '95%'
  },
  daysContainer: {
    width: '95%',
    alignSelf: 'center',
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

})

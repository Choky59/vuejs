import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentPadding: 'Home',
    metersInfo: [], //  keys(): meter, kwht, timestamp         
    gateways: [],
    meterQuery: [],
    
  },
  mutations: {
    onCollapseClick(state) {
      if(state.contentPadding == 'Home') {
        state.contentPadding = 'HomeCollapsed'
      } else {
        state.contentPadding = 'Home'
      }
    },
    getReadings(state,mediciones) {
      var noMeters = Object.keys(mediciones.data.data).length;

      if(mediciones != null) {
        state.metersInfo = [];
        for (let i = 0; i < noMeters; i++) {

          var date = new Date(mediciones.data.data[i].readings[0].timestamp);
          var localTime = date.toString().slice(3,25) 
          
          var meterInfo = {
            meter: mediciones.data.data[i].meter,
            kwht: mediciones.data.data[i].readings[0].lines[0].kwht,
            timestamp: localTime
          }
          state.metersInfo.push(meterInfo)   
        }
      }
      

      return state.metersInfo
      //console.log(state.metersInfo);
      //console.log("get readings  " + Object.keys(mediciones.data.data[1].readings[0].lines[0]) + "     " + mediciones.data.data[1].readings[0].timestamp)
    },

    getMeterReadings(state,mediciones){
      var noReadings = Object.keys(mediciones.data.data).length;
      //console.log(mediciones.data.data[0].timestamp)
      if(mediciones != null) {
        state.meterQuery = [];
        for (let i = 0; i < noReadings; i++) {
          var date = new Date(mediciones.data.data[i].timestamp);
          var localTime = date.toString().slice(3,25) //Fri Dec 13 2019 14:11:19 GMT-0600 (hora estándar central)
                                                      //012 345 67 8901 23456789 01234567  
          var meterInfo = {
            V: mediciones.data.data[i].lines[0].volts,
            kwht: mediciones.data.data[i].lines[0].kwht,
            timestamp: localTime,
            a1: Math.abs(mediciones.data.data[i].lines[0].amps),
            w1: Math.abs(mediciones.data.data[i].lines[0].watts),
            a2: Math.abs(mediciones.data.data[i].lines[1].amps),
            w2: Math.abs(mediciones.data.data[i].lines[1].watts),
            a3: Math.abs(mediciones.data.data[i].lines[2].amps),
            w3: Math.abs(mediciones.data.data[i].lines[2].watts),

          }
          state.meterQuery.push(meterInfo)   
        }
        state.meterQuery.reverse()
      }

    },
    noReadings(state,status) {
      var meterInfo = {
        V: status,
        kwht: status,
        timestamp: status,
        a1: status,
        w1: status,
        a2: status,
        w2: status,
        a3: status,
        w3: status,
      }
      this.state.meterQuery = []
      this.state.meterQuery.push(meterInfo)   
    }


    /*
    getToken() {
      var data = {
        'username': 'app_test',
        'password': 'password'
      }
      fetch("http://tools.greenapsis.com/api/clients/login", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
    */
  },
  actions: {
    fetchJSON: async function( { commit }, gateway ) {
            await axios.get(`https://tools.greenapsis.com/api/readings/gateway/${gateway}?cnt=1&fmt=json`,{
                         'headers': { 'auth-api': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2YwNTFmODVjMjk3MDYzNTZlMzRiYTIiLCJuYW1lIjoiYXBwX3Rlc3QiLCJ0eXBlIjoiYXBwIiwiaWF0IjoxNTc2MDg1NDAwfQ.Z0E3J7fT6CD_E_HGfFuJfFKbfrdK9s0aDwaZ6Omnu9k'}})
                       .then(function (response) { 
                          commit('getReadings',response)
                        })
                       .catch(function (error) {
                          console.log("error fetchJSON" + error);
                        })
                        
    },
    fetchGateways: async function( { commit } ){

    },
    fetchMeter: async function({ commit } , meterQuery ){

      // http://tools.greenapsis.com/api/readings/meter/GreenG00?cnt=50&fmt=json&start=1558587600000&end=1558713435757
      await axios.get(`https://tools.greenapsis.com/api/readings/meter/${meterQuery.meter}?fmt=json&start=${meterQuery.start}&end=${meterQuery.end}`,{
                         'headers': { 'auth-api': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2YwNTFmODVjMjk3MDYzNTZlMzRiYTIiLCJuYW1lIjoiYXBwX3Rlc3QiLCJ0eXBlIjoiYXBwIiwiaWF0IjoxNTc2MDg1NDAwfQ.Z0E3J7fT6CD_E_HGfFuJfFKbfrdK9s0aDwaZ6Omnu9k'}})
                       .then(function (response) { 
                          commit('getMeterReadings',response)
                        })
                       .catch(function (error) {
                          console.log("error fetchMeter " + error);
                          commit('noReadings','No data')
                        })
    },
  },
  modules: {
  }
})

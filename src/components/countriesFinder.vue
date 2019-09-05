<template>
  <div class="b-countries-finder">
    <h1>Let's find an amazing country</h1>
    <form @submit.prevent="getCountries()">
      <div class="form-group">
        <label for="countryName">Country name</label>
        <input id="countryName" v-model="countryName" required>
        <button type="submit" class="btn btn-success"
                :disabled="countryName.length < 2">
          Search
        </button>
      </div>
    </form>
    <app-countries-cards :countries="countries"></app-countries-cards>
  </div>
</template>

<script>
import axios from 'axios'
import CountriesCards from './countriesCards'

export default {
  name: 'app-countries-finder',
  components: {
    'app-countries-cards': CountriesCards
  },
  data () {
    return {
      countryName: '',
      countries: null
    }
  },
  methods: {
    getCountries () {
      let serverAPI = 'http://countries-finder-api.webtraining.fun'
      let url = `${serverAPI}/countries/search`
      let serviceURL = `${url}/${this.countryName}`
      let self = this
      axios.get(serviceURL).then(function (res) {
        self.countries = res.data
      })
    }
  }
}
</script>

<style>
</style>

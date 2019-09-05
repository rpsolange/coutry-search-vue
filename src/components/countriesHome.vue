<template>
    <div class="b-countries-home">
        <div class="b-filter-container">
            <label for="countryName">Filter by name</label>
            <input type="text" id="countryName" placeholder="Type a country name" v-model="countryName" class="form-control">
        </div>
        <div class="b-loader" v-loading="loading">
            <div class="b-countries-wrapper" v-if="countries">
                <app-countries-cards :countries="filteredCountries"></app-countries-cards>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CountriesCards from './countriesCards'

export default {
  name: 'app-countries-home',
  components: {
    'app-countries-cards': CountriesCards
  },
  data () {
    return {
      countryName: '',
      countries: null,
      loading: true
    }
  },
  methods: {
    getCountries () {
      let serverAPI = 'http://countries-finder-api.webtraining.fun'
      let url = `${serverAPI}/countries`
      let serviceURL = `${url}`
      let self = this
      axios.get(serviceURL).then(
        function (res) {
          self.countries = res.data
          self.loading = false
        }
      )
    }
  },
  computed: {
    filteredCountries: {
      get () {
        let filter = new RegExp(this.countryName, 'i')
        return this.countries.filter(country => country.name.common.match(filter))
      }
    }
  },
  created () {
    this.getCountries()
  }
}
</script>

<style>
.b-loader{
    min-height: 200px;
}
</style>

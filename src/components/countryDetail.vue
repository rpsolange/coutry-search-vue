<template>
    <div class="b-country-detail">
        <h1> Information about {{ $route.params.countryName }}</h1>
        <div class="panel panel-default" v-for="(country, index) in currentCountry" :key="index">
            <div class="panel-heading">
                Data about countries
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <td>Field</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Common Name</td>
                        <td>{{country.name.common}}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{{country.currency}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app-country-detail',
  data () {
    return {
      currentCountry: null
    }
  },
  methods: {
    getCountry () {
      let serverAPI = 'http://countries-finder-api.webtraining.fun'
      let url = `${serverAPI}/countries/search`
      let serviceURL = `${url}/${this.$route.params.countryName}`

      axios.get(serviceURL).then(
        (response) => {
          this.currentCountry = response.data
          console.log(this.currentCountry)
        },
        (error) => {
          console.log(error)
        }
      )
    }
  },
  mounted () {
    this.getCountry()
  }
}
</script>

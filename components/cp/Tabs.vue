<template>
  <div class="forms_page_tabs">
    <a href="#" v-for="tab in tabs" :key="tab.id" @click.prevent="clickTab(tab.id)" :class="{active: tab.id === tabSelect}" >{{tab.text}}</a>
   <div class="mobile-first-item"><a href="#" v-for="tab in tabs1" :key="tab.id" @click.prevent="clickTab(tab.id)" :class="{active: tab.id === tabSelect}" >{{tab.text}}</a> </div>
   <div class="mobile-second-item"> <a href="#" v-for="tab in tabs2" :key="tab.id" @click.prevent="clickTab(tab.id)" :class="{active: tab.id === tabSelect}" >{{tab.text}}</a> </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    tabs1: {
      type: Array,
      required: true
    },
    tabs2: {
      type: Array,
      required: true
    },
    tabSelect: {
      type: String,
      required: true
    }
  },
  methods: {
    clickTab(id) {
      this.$emit('changeTab', id)
    }
   
  },
}
</script>

<style scoped lang="less">


.forms_page_tabs {
	border-bottom: 1px solid #DCE6F6;
	display: inline-flex;
  padding: 0 15px;
  margin-bottom: 30px;
  @media (max-width: 1440px) {
    margin-bottom: 21px;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 0;
    overflow-x: auto;
  }
   @media (max-width: 550px) {
    text-align: center;
    width: 100%;
  }
 
  a {
    font-size: 14px;
    font-weight: 600;
    color: #819EB9;
    text-transform: uppercase;
    padding-bottom: 15px;
    display: inline-block;
    margin-bottom: -1px;
    position: relative;
    line-height: 1.2;
    transition: all 0.2s ease;
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50px 50px 0px 0px;
      width: 100%;
      height: 3px;
      background-color: #2991F2;
      opacity: 0;
      transition: all 0.2s ease;
    }
    @media (max-width: 768px) {
      padding: 0 11px 15px 17px;
      font-size: 14px;
    }
    &.active {
      color: #000;
      &:after {
        opacity: 1;
        color: #000;
      }
      @media (max-width: 768px) {
        color: #000;
        font-weight: 600;
        border-bottom-color: #2691F4;
      }
    }
  }
	a + a {
    margin-left: 28px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
    @media (max-width: 550px) {
      margin: 10px;
    }
  }
 
  .mobile-first-item{
   @media (max-width: 550px) {
    display: flex;
    flex-direction: column; 
    text-align: center;
    a{
      border: 1px solid #2691F4;
      color: #1786EC;
      border-radius: 3px;
      padding: 10px  0;
      margin: 5px 0;
      text-transform: none;
    }
  }
}
 .mobile-second-item{
   @media (max-width: 550px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
    a{
      margin: 0;
      color: #000;
      padding: 10px;
      font-weight: 400;
      text-transform: none;
     &:after{
      content: '';
      height: 1px;
      background-color: #1786EC;
    }
    &.active {
      color: #1786EC;
      &:after {
        opacity: 1;
        color: #1786EC;
      }
    }
  }
  }
}
}
</style>

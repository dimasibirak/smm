<template>
  <div class="forms_page">
    <Tabs class="tabsGrand" :tabs="tabs" :tabSelect="tabSelect" @changeTab="changeTab" />
    <Tabs class="tabsMobile fstx" :tabs1="tabs1" :tabSelect="tabSelect" @changeTab="changeTab" />
    <Tabs class="tabsMobile2" :tabs2="tabs2" :tabSelect="tabSelect" @changeTab="changeTab" />

    <div class="main_content_wrap" :class="{wide: wideFunctions()}">
      <component :is="`profile-${tabSelect}`"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tabs from "@/components/cp/Tabs";
import ProfileMain from "@/components/cp/profile/Main";
import ProfileInvite from "@/components/cp/profile/Invite";
import ProfileAccounts from "@/components/cp/profile/Accounts";
import ProfileBalance from "@/components/cp/profile/Balance";

export default {
  layout: "cp",
  components: {
    Tabs,
    ProfileMain,
    ProfileInvite,
    ProfileAccounts,
    ProfileBalance
  },
  data: () => ({
    tabSelect: "main",
    tabs: [
      { text: "Мои аккаунты", id: "accounts" },
      { text: "Движение счета", id: "balance" },
      { text: "Пригласить друзей", id: "invite" },
      { text: "Настройки", id: "main" }
    ],
    tabs1: [
      { text: "Мои аккаунты", id: "accounts" },
      { text: "Настройки", id: "main" }
    ],
    tabs2: [
      { text: "Пригласить друзей", id: "invite" },
      { text: "Движение счета", id: "balance" }
    ]
  }),
  computed: {
    ...mapGetters("cp_sidebar", ["isClosing"])
  },
  methods: {
    changeTab(id) {
      id === "main"
        ? this.$router.push({ path: "/cp/profile" })
        : this.$router.push({ path: "/cp/profile", query: { tab: id } });
      this.tabSelect = id;
    },
    wideFunctions() {
      return this.isClosing && window.innerWidth > 1200;
    }
  },
  watch: {
    "$route.query.tab"(value) {
      value ? (this.tabSelect = value) : (this.tabSelect = "main");
    }
  },
  mounted() {
    if (this.$route.query.tab) this.tabSelect = this.$route.query.tab;
  }
};
</script>

<style lang="less" scoped>
.tabsMobile {
  display: none;
  @media (max-width: 550px) {
    display: flex;
  }
}

.tabsMobile2 {
  display: none;
  @media (max-width: 550px) {
    display: flex;
    
  }
}
.tabsGrand {
  @media (max-width: 550px) {
    display: none;
  }
}

.tabsMobile > :first-child {
  width: 100% !important;
}

.tabsMobile2 > :nth-child(2) {  
  width: 100% !important;
}

.forms_page {
  margin: 30px 71px auto 42px;
  @media (max-width: 1600px) {
    margin: 30px 50px auto 42px;
  }
  @media (max-width: 1440px) {
    margin: 30px 10px auto 30px;
  }
  @media (max-width: 768px) {
    margin: 20px;
  }
}
</style>
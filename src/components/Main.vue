<template>
  <div class="feedContainer">
    <div class="row">
      <div  @click="openModal(item)"
            v-for="item in fetchedContents"
            :key="item.pubDate"
            class="column">
        <div class="card">
          <div class="cardContent">
            <h5 class="author"> {{ item.author }}
            </h5>
            <img  class="cardImg textWrap"
                  :src="item.img"
                  :alt="item.title">
            <p class="textAndTitle">
              {{ item.title }}
              <br>
              <span class="contentDescription"> {{ item.description }} </span>
            </p>
          </div>
        </div>
        <hr class="separator">
        </div>
      </div>
      <!--Modal-->
      <div  id="modal"
            v-if="modalOpened"
            class="modal">
        <div class="modalContent">
              <span   @click="modalOpened = false"
                      class="modalCloseBtn">&times;</span>
          <p class="textAndTitle">
            {{ selectedItem.title }}
            <br>
            <span class="contentDescription"> {{ selectedItem.description }} </span>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
  // import Parser from "../classes/Parser";

  export default {
    name: 'Main',
    data() {
      return {
        parser: null,
        modalOpened: false,
        maxDescriptionLength: 300,
        selectedItem: {},
        fetchedContents: [
          {
            title: '9 Horror Movies So Sick And Twisted You\'ll Never Unsee Them',
            pubDate: 'Sun, 24 Mar 2019 19:41:27 GMT',
            author: 'Lisa Bernier',
            descriptionOriginal: '',
            description: 'Hostel. This brainchild of horror guru Eli Roth is pretty much every backpacker\'s nightmare. In it, a pair of American travelers check in to a hostel in Slovakia and are forced to endure a series of truly gruesome tortures.&#x26;lt;p&#x26;gt;Image: Lions Gate Films&#x26;lt;p&#x26;gt;mother! (2017)&#x26;lt;p&#x26;gt;It\'s hard to tell exactly which …',
            img: 'https://static.gamespot.com/uploads/scale_super/1561/15611758/3304710-2950242-hostel.jpg',
            imgWidth: 803,
            imgHeight: 447
          },
        ],
        url: 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss'
      };
    },
    watch: {
      modalOpened:  function (val) {
        let modal = document.getElementById('modal');
        if (val) {
          modal.style.display = 'block'
        } else {
          modal.display = 'none'
        }
      },
    },
    methods: {
      openModal(item) {
        this.modalOpened = true;
        this.selectedItem = item;
      },
    },
    mounted() {
      //UI testimiseks tehtud sisend
      const articleData = this.fetchedContents[0];
      for (let i = 0; i < 10; i++) {
        this.fetchedContents.push(articleData)
      }

      // Ei saa kasutada:
      // this.parser = new Parser();
      // this.fetchedContents = this.parser.parseUrl(this.url);
    }
  }
</script>

<style scoped lang="scss">
  .feedContainer {
       width: 98vw !important;
       margin: -1em auto auto auto !important;
       display: inline-grid;
     }

  .column {
    display: inline-block;
    width: 25em;
    padding: 0 10px 10px 0 ;
  }

  .row {
    margin: auto !important;
    padding: 10px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .pubDate {
    display: none;
  }

  .card {
    padding: 16px;
    text-align: left;
    background-color: #f1f1f1;
    height: 15em;
    overflow-y: hidden;
    cursor: pointer;
  }

  .cardContent {
    height: 100% !important;
    overflow-y: inherit;
  }

  .textWrap {
    float: right;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .author {
    margin-top: -0.1em;
  }

  .contentDescription,
  .pubDate {
    font-weight: lighter;
    margin-top: 1em;
    display: block;
  }

  .textAndTitle {
    font-weight: bold;
  }

  .cardImg {
    width: 35%;
  }

  .separator {
    display: none;
    border: rgba(0, 0, 0, 0.2) 0.3px solid;
    margin-bottom: -0.8em;
  }

  @media screen and (max-width: 450px) {
    .feedContainer {
      padding: 10px;
    }

    .column {
      width: 95%;
      display: block;
      padding-bottom: 20px;
    }

    .pubDate {
      display: unset;
    }

    .cardImg {
      background: 50% 50% no-repeat;
      object-fit: cover;
      width: 5em;
      height: 5em;

    }

    .textWrap {
      float: left;
      margin-right: 10px;
      margin-left: 0;
      margin-bottom: 0;
    }

    .author,
    .contentDescription {
      display: none;
    }

    .card {
      height: 5em;
      padding: unset;
      background-color: unset;
    }

    .separator {
      display: flex;
    }
  }

  /*Modal*/
  .modal {
    position: fixed;
    z-index: 1000;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  /* Modal Content */
  .modalContent {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .modalCloseBtn {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .modalCloseBtn:hover,
  .modalCloseBtn:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
</style>

class VerticalTimeline {

    /**
     * JavaScript library that allows you to create a vertical timeline of events.
     * 
     * @name vertical-timeline.js
     * @author EmaWebDesign
     * @version 1.0
     * @link https://github.com/emawebdesign/vertical-timeline.js
     * @license https://opensource.org/licenses/MIT MIT License
     * 
     * Usage
     * 
     * var timeline = new VerticalTimeline({
     *      'id' : 'timeline',
     *      'mode' : 'light',//or dark
     *      'items' : [
     *          {
     *          'type' : 'primary',
     *          'title' : 'The first event',
     *          'image' : '<img src="assets/img/user.jpg">',
     *          'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     *          'time' : '2 Hours Ago'
     *          },
     *          {
     *          'type' : 'danger',
     *          'title' : 'The second event',
     *          'image' : '<i class="fas fa-times"></i>',
     *          'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     *          'time' : '3 Hours Ago'
     *          }
     *      ]
     *  });
     *
     */

    constructor(params) {

        if (typeof params.id !== 'undefined' && typeof params.mode !== 'undefined' && typeof params.items !== 'undefined') {

            this.params = params;
            this.selector = document.getElementById(params.id);
            this.init(params.mode);

        }
        else throw new Error('Invalid parameters!');

    }

    init(mode) {

        if (mode=="dark") var modeClass = 'dark-mode';
        else var modeClass = '';

        this.selector.innerHTML += '<div class="container-timeline ' + modeClass + '">';
        var timeline = '#' + this.params.id + ' .container-timeline';
        document.querySelector(timeline).innerHTML += '<div class="timeline">';

        if (parseInt(this.params.items.length)>0) {

            for(var i=0; i<this.params.items.length; i++) {

                var html = '<div class="timeline-container ' + this.params.items[i].type + '">';
                html += '<div class="timeline-icon">';
                html += this.params.items[i].image;
                html += '</div>';
                html += '<div class="timeline-body">';
                html += '<h4 class="timeline-title"><span class="badge">' + this.params.items[i].title + '</span></h4>';
                html += '<p>' + this.params.items[i].text + '</p>';
                html += '<p class="timeline-subtitle">' + this.params.items[i].time + '</p>';
                html += '</div>';
                html += '</div>';

                document.querySelector('.container-timeline .timeline').innerHTML += html;

            }

        }

        document.querySelector(timeline).innerHTML += '</div>';
        this.selector.innerHTML += '</div>';

    }

}
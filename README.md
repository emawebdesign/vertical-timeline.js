# vertical-timeline.js
JavaScript library that allows you to create a responsive vertical timeline of events.

Author: EmaWebDesign http://www.emawebdesign.com

Version: 1.0

Usage:

Include vertical-timeline.min.css and vertical-timeline.min.js and call:

`````javascript
var timeline = new VerticalTimeline({
    'id' : 'timeline',
    'mode' : 'light',//or dark
    'items' : [
        {
        'type' : 'primary',
        'title' : 'The first event',
        'image' : '<img src="assets/img/user.jpg">',
        'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'time' : '2 Hours Ago'
        },
        {
        'type' : 'danger',
        'title' : 'The second event',
        'image' : '<i class="fas fa-times"></i>',
        'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'time' : '3 Hours Ago'
        },
        {
        'type' : 'secondary',
        'title' : 'The third event',
        'image' : '<i class="fas fa-flag"></i>',
        'url' : '#',
        'text' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'time' : '5 Hours Ago'
        }
    ]
});
`````

License: MIT License http://opensource.org/licenses/MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


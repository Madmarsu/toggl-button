/*jslint indent: 2 */
/*global $: false, togglbutton: false, createTag: false*/

'use strict';

// Jira
togglbutton.render('#ghx-detail-issue:not(.toggl)', {observe: true}, function (elem) {
  var link, description,
    container = createTag('div', 'ghx-toggl-button'),
    titleElem = $('[data-field-id="summary"]', elem),
    numElem = $('.ghx-fieldname-issuekey a'),
    projectElem = $('.ghx-project', elem);

  description = titleElem.textContent;
  if (numElem !== null) {
    description = numElem.textContent + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'jira',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  container.appendChild(link);
  $('#ghx-detail-head').appendChild(container);
});

// Jira
togglbutton.render('.issue-header-content:not(.toggl)', {observe: true}, function (elem) {
  var link, description, ul, li,
    numElem = $('#key-val', elem),
    titleElem = $('#summary-val', elem) || "",
    projectElem = $('#project-name-val', elem);

  if (!!titleElem) {
    description = titleElem.textContent;
  }

  if (numElem !== null) {
    if (!!description) {
      description = " " + description;
    }
    description = numElem.textContent + description;
  }

  link = togglbutton.createTimerLink({
    className: 'jira',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  ul = createTag('ul', 'toolbar-group');
  li = createTag('li', 'toolbar-item');
  li.appendChild(link);
  ul.appendChild(li);
  $('.toolbar-split-left').appendChild(ul);
});


//Confluence
togglbutton.render('#title-heading:not(.toggl)', {observe: true}, function (elem) {
  var link, description,
    titleElem = $('[id="title-text"]', elem);

  description = titleElem.textContent;

  link = togglbutton.createTimerLink({
    className: 'confluence',
    description: description
  });

  $('#title-text').appendChild(link);
});
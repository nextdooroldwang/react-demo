(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_41'],
  {
    41: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var r = a(71318),
        l = r.Z,
        n = l;
    },
    22122: function (e, t, a) {
      'use strict';
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      a.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    71318: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = {
          items_per_page: '/ page',
          jump_to: 'Go to',
          jump_to_confirm: 'confirm',
          page: '',
          prev_page: 'Previous Page',
          next_page: 'Next Page',
          prev_5: 'Previous 5 Pages',
          next_5: 'Next 5 Pages',
          prev_3: 'Previous 3 Pages',
          next_3: 'Next 3 Pages',
        },
        l = a(22122),
        n = {
          locale: 'en_US',
          today: 'Today',
          now: 'Now',
          backToToday: 'Back to today',
          ok: 'Ok',
          clear: 'Clear',
          month: 'Month',
          year: 'Year',
          timeSelect: 'select time',
          dateSelect: 'select date',
          weekSelect: 'Choose a week',
          monthSelect: 'Choose a month',
          yearSelect: 'Choose a year',
          decadeSelect: 'Choose a decade',
          yearFormat: 'YYYY',
          dateFormat: 'M/D/YYYY',
          dayFormat: 'D',
          dateTimeFormat: 'M/D/YYYY HH:mm:ss',
          monthBeforeYear: !0,
          previousMonth: 'Previous month (PageUp)',
          nextMonth: 'Next month (PageDown)',
          previousYear: 'Last year (Control + left)',
          nextYear: 'Next year (Control + right)',
          previousDecade: 'Last decade',
          nextDecade: 'Next decade',
          previousCentury: 'Last century',
          nextCentury: 'Next century',
        },
        o = n,
        c = {
          placeholder: 'Select time',
          rangePlaceholder: ['Start time', 'End time'],
        },
        i = c,
        s = {
          lang: (0, l.Z)(
            {
              placeholder: 'Select date',
              yearPlaceholder: 'Select year',
              quarterPlaceholder: 'Select quarter',
              monthPlaceholder: 'Select month',
              weekPlaceholder: 'Select week',
              rangePlaceholder: ['Start date', 'End date'],
              rangeYearPlaceholder: ['Start year', 'End year'],
              rangeMonthPlaceholder: ['Start month', 'End month'],
              rangeWeekPlaceholder: ['Start week', 'End week'],
            },
            o,
          ),
          timePickerLocale: (0, l.Z)({}, i),
        },
        m = s,
        d = m,
        u = '${label} is not a valid ${type}',
        p = {
          locale: 'en',
          Pagination: r,
          DatePicker: m,
          TimePicker: i,
          Calendar: d,
          global: { placeholder: 'Please select' },
          Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'No filters',
            emptyText: 'No data',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectNone: 'Clear all data',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting',
          },
          Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
          Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
          Transfer: {
            titles: ['', ''],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page',
          },
          Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file',
          },
          Empty: { description: 'No Data' },
          Icon: { icon: 'icon' },
          Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand',
          },
          PageHeader: { back: 'Back' },
          Form: {
            optional: '(optional)',
            defaultValidateMessages: {
              default: 'Field validation error for ${label}',
              required: 'Please enter ${label}',
              enum: '${label} must be one of [${enum}]',
              whitespace: '${label} cannot be a blank character',
              date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date',
              },
              types: {
                string: u,
                method: u,
                array: u,
                object: u,
                number: u,
                date: u,
                boolean: u,
                integer: u,
                float: u,
                regexp: u,
                email: u,
                url: u,
                hex: u,
              },
              string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters',
              },
              number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}',
              },
              array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}',
              },
              pattern: {
                mismatch: '${label} does not match the pattern ${pattern}',
              },
            },
          },
          Image: { preview: 'Preview' },
        },
        h = p;
    },
  },
]);

'use strict';

angular.module('core').factory('scheduleService', function () {
        var schedules = [];

        return {
            setSchedule:function (data) {
                schedules = data;
            },
            getSchedule:function () {
                return schedules;
            }
        };
    });/**
 * Created by Josh on 5/23/2015.
 */

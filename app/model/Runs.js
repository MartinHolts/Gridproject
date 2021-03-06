/*
 * File: app/model/Runs.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GridApp.model.Runs', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'master'
        },
        {
            name: 'name'
        },
        {
            name: 'run_number'
        },
        {
            name: 'year'
        },
        {
            name: 'start'
        },
        {
            name: 'birth'
        },
        {
            name: 'county'
        },
        {
            name: 'result'
        },
        {
            name: 'age_class'
        }
    ]
});
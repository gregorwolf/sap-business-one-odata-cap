"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.States = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var StatesRequestBuilder_1 = require("./StatesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "States" of service "SAPB1".
 */
var States = /** @class */ (function (_super) {
    __extends(States, _super);
    function States() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `States`.
     * @returns A builder that constructs instances of entity type `States`.
     */
    States.builder = function () {
        return core_1.EntityV4.entityBuilder(States);
    };
    /**
     * Returns a request builder to construct requests for operations on the `States` entity type.
     * @returns A `States` request builder.
     */
    States.requestBuilder = function () {
        return new StatesRequestBuilder_1.StatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `States`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `States`.
     */
    States.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, States);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    States.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for States.
     */
    States._entityName = 'States';
    /**
     * Default url path for the according service.
     */
    States._defaultServicePath = '/b1s/v2/';
    return States;
}(core_1.EntityV4));
exports.States = States;
var Countries_1 = require("./Countries");
(function (States) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    States.CODE = new core_1.StringField('Code', States, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    States.COUNTRY = new core_1.StringField('Country', States, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    States.NAME = new core_1.StringField('Name', States, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    States.COUNTRY_2 = new core_1.OneToOneLink('Country2', States, Countries_1.Countries);
    /**
     * All fields of the States entity.
     */
    States._allFields = [
        States.CODE,
        States.COUNTRY,
        States.NAME,
        States.COUNTRY_2
    ];
    /**
     * All fields selector.
     */
    States.ALL_FIELDS = new core_1.AllFields('*', States);
    /**
     * All key fields of the States entity.
     */
    States._keyFields = [States.CODE, States.COUNTRY];
    /**
     * Mapping of all key field names to the respective static field property States.
     */
    States._keys = States._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(States = exports.States || (exports.States = {}));
exports.States = States;
//# sourceMappingURL=States.js.map
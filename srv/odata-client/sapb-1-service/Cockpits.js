"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
exports.Cockpits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CockpitsRequestBuilder_1 = require("./CockpitsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Cockpits" of service "SAPB1".
 */
var Cockpits = /** @class */ (function (_super) {
    __extends(Cockpits, _super);
    function Cockpits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Cockpits`.
     * @returns A builder that constructs instances of entity type `Cockpits`.
     */
    Cockpits.builder = function () {
        return v4_1.Entity.entityBuilder(Cockpits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Cockpits` entity type.
     * @returns A `Cockpits` request builder.
     */
    Cockpits.requestBuilder = function () {
        return new CockpitsRequestBuilder_1.CockpitsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cockpits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cockpits`.
     */
    Cockpits.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Cockpits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Cockpits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Cockpits.
     */
    Cockpits._entityName = 'Cockpits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cockpits.
     */
    Cockpits._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Cockpits._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Cockpits;
}(v4_1.Entity));
exports.Cockpits = Cockpits;
var Users_1 = require("./Users");
(function (Cockpits) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.ABS_ENTRY = new v4_1.NumberField('AbsEntry', Cockpits, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.CODE = new v4_1.NumberField('Code', Cockpits, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.NAME = new v4_1.StringField('Name', Cockpits, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.DESCRIPTION = new v4_1.StringField('Description', Cockpits, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.USER_SIGNATURE = new v4_1.NumberField('UserSignature', Cockpits, 'Edm.Int32');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.DATE = new v4_1.DateField('Date', Cockpits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[time]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.TIME = new v4_1.TimeField('Time', Cockpits, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.MANUFACTURER = new v4_1.StringField('Manufacturer', Cockpits, 'Edm.String');
    /**
     * Static representation of the [[publisher]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.PUBLISHER = new v4_1.StringField('Publisher', Cockpits, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cockpits.USER = new v4_1.OneToOneLink('User', Cockpits, Users_1.Users);
    /**
     * All fields of the Cockpits entity.
     */
    Cockpits._allFields = [
        Cockpits.ABS_ENTRY,
        Cockpits.CODE,
        Cockpits.NAME,
        Cockpits.DESCRIPTION,
        Cockpits.USER_SIGNATURE,
        Cockpits.DATE,
        Cockpits.TIME,
        Cockpits.MANUFACTURER,
        Cockpits.PUBLISHER,
        Cockpits.USER
    ];
    /**
     * All fields selector.
     */
    Cockpits.ALL_FIELDS = new v4_1.AllFields('*', Cockpits);
    /**
     * All key fields of the Cockpits entity.
     */
    Cockpits._keyFields = [Cockpits.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Cockpits.
     */
    Cockpits._keys = Cockpits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Cockpits = exports.Cockpits || (exports.Cockpits = {}));
exports.Cockpits = Cockpits;
//# sourceMappingURL=Cockpits.js.map
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
exports.ValueMappingCommunication = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ValueMappingCommunicationRequestBuilder_1 = require("./ValueMappingCommunicationRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ValueMappingCommunication" of service "SAPB1".
 */
var ValueMappingCommunication = /** @class */ (function (_super) {
    __extends(ValueMappingCommunication, _super);
    function ValueMappingCommunication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ValueMappingCommunication`.
     * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
     */
    ValueMappingCommunication.builder = function () {
        return v4_1.Entity.entityBuilder(ValueMappingCommunication);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ValueMappingCommunication` entity type.
     * @returns A `ValueMappingCommunication` request builder.
     */
    ValueMappingCommunication.requestBuilder = function () {
        return new ValueMappingCommunicationRequestBuilder_1.ValueMappingCommunicationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMappingCommunication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
     */
    ValueMappingCommunication.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ValueMappingCommunication);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ValueMappingCommunication.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ValueMappingCommunication.
     */
    ValueMappingCommunication._entityName = 'ValueMappingCommunication';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ValueMappingCommunication.
     */
    ValueMappingCommunication._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ValueMappingCommunication._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ValueMappingCommunication;
}(v4_1.Entity));
exports.ValueMappingCommunication = ValueMappingCommunication;
(function (ValueMappingCommunication) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.ABS_ENTRY = new v4_1.NumberField('AbsEntry', ValueMappingCommunication, 'Edm.Int32');
    /**
     * Static representation of the [[thirdPartySystemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.THIRD_PARTY_SYSTEM_ID = new v4_1.NumberField('ThirdPartySystemId', ValueMappingCommunication, 'Edm.Int32');
    /**
     * Static representation of the [[objectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.OBJECT_ID = new v4_1.NumberField('ObjectId', ValueMappingCommunication, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.START_DATE = new v4_1.DateField('StartDate', ValueMappingCommunication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.START_TIME = new v4_1.NumberField('StartTime', ValueMappingCommunication, 'Edm.Int32');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.END_DATE = new v4_1.DateField('EndDate', ValueMappingCommunication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.END_TIME = new v4_1.NumberField('EndTime', ValueMappingCommunication, 'Edm.Int32');
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMappingCommunication.MESSAGE = new v4_1.StringField('Message', ValueMappingCommunication, 'Edm.String');
    /**
     * All fields of the ValueMappingCommunication entity.
     */
    ValueMappingCommunication._allFields = [
        ValueMappingCommunication.ABS_ENTRY,
        ValueMappingCommunication.THIRD_PARTY_SYSTEM_ID,
        ValueMappingCommunication.OBJECT_ID,
        ValueMappingCommunication.START_DATE,
        ValueMappingCommunication.START_TIME,
        ValueMappingCommunication.END_DATE,
        ValueMappingCommunication.END_TIME,
        ValueMappingCommunication.MESSAGE
    ];
    /**
     * All fields selector.
     */
    ValueMappingCommunication.ALL_FIELDS = new v4_1.AllFields('*', ValueMappingCommunication);
    /**
     * All key fields of the ValueMappingCommunication entity.
     */
    ValueMappingCommunication._keyFields = [ValueMappingCommunication.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ValueMappingCommunication.
     */
    ValueMappingCommunication._keys = ValueMappingCommunication._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ValueMappingCommunication = exports.ValueMappingCommunication || (exports.ValueMappingCommunication = {}));
exports.ValueMappingCommunication = ValueMappingCommunication;
//# sourceMappingURL=ValueMappingCommunication.js.map
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
exports.RouteStages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var RouteStagesRequestBuilder_1 = require("./RouteStagesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "RouteStages" of service "SAPB1".
 */
var RouteStages = /** @class */ (function (_super) {
    __extends(RouteStages, _super);
    function RouteStages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RouteStages`.
     * @returns A builder that constructs instances of entity type `RouteStages`.
     */
    RouteStages.builder = function () {
        return v4_1.Entity.entityBuilder(RouteStages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RouteStages` entity type.
     * @returns A `RouteStages` request builder.
     */
    RouteStages.requestBuilder = function () {
        return new RouteStagesRequestBuilder_1.RouteStagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RouteStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RouteStages`.
     */
    RouteStages.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, RouteStages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RouteStages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RouteStages.
     */
    RouteStages._entityName = 'RouteStages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RouteStages.
     */
    RouteStages._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    RouteStages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RouteStages;
}(v4_1.Entity));
exports.RouteStages = RouteStages;
(function (RouteStages) {
    /**
     * Static representation of the [[internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.INTERNAL_NUMBER = new v4_1.NumberField('InternalNumber', RouteStages, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.CODE = new v4_1.StringField('Code', RouteStages, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.DESCRIPTION = new v4_1.StringField('Description', RouteStages, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.CREATION_DATE = new v4_1.DateField('CreationDate', RouteStages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[generationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.GENERATION_TIME = new v4_1.TimeField('GenerationTime', RouteStages, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[dateOfUpdate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RouteStages.DATE_OF_UPDATE = new v4_1.DateField('DateOfUpdate', RouteStages, 'Edm.DateTimeOffset');
    /**
     * All fields of the RouteStages entity.
     */
    RouteStages._allFields = [
        RouteStages.INTERNAL_NUMBER,
        RouteStages.CODE,
        RouteStages.DESCRIPTION,
        RouteStages.CREATION_DATE,
        RouteStages.GENERATION_TIME,
        RouteStages.DATE_OF_UPDATE
    ];
    /**
     * All fields selector.
     */
    RouteStages.ALL_FIELDS = new v4_1.AllFields('*', RouteStages);
    /**
     * All key fields of the RouteStages entity.
     */
    RouteStages._keyFields = [RouteStages.INTERNAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property RouteStages.
     */
    RouteStages._keys = RouteStages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RouteStages = exports.RouteStages || (exports.RouteStages = {}));
exports.RouteStages = RouteStages;
//# sourceMappingURL=RouteStages.js.map
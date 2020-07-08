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
exports.Oty1 = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Oty1RequestBuilder_1 = require("./Oty1RequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "OTY1" of service "SAPB1".
 */
var Oty1 = /** @class */ (function (_super) {
    __extends(Oty1, _super);
    function Oty1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Oty1`.
     * @returns A builder that constructs instances of entity type `Oty1`.
     */
    Oty1.builder = function () {
        return v4_1.Entity.entityBuilder(Oty1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Oty1` entity type.
     * @returns A `Oty1` request builder.
     */
    Oty1.requestBuilder = function () {
        return new Oty1RequestBuilder_1.Oty1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Oty1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Oty1`.
     */
    Oty1.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Oty1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Oty1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Oty1.
     */
    Oty1._entityName = 'OTY1';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Oty1.
     */
    Oty1._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Oty1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Oty1;
}(v4_1.Entity));
exports.Oty1 = Oty1;
(function (Oty1) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.CODE = new v4_1.StringField('Code', Oty1, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.NAME = new v4_1.StringField('Name', Oty1, 'Edm.String');
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.DOC_ENTRY = new v4_1.NumberField('DocEntry', Oty1, 'Edm.Int32');
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.CANCELED = new v4_1.StringField('Canceled', Oty1, 'Edm.String');
    /**
     * Static representation of the [[object]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.OBJECT = new v4_1.StringField('Object', Oty1, 'Edm.String');
    /**
     * Static representation of the [[logInst]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.LOG_INST = new v4_1.NumberField('LogInst', Oty1, 'Edm.Int32');
    /**
     * Static representation of the [[userSign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.USER_SIGN = new v4_1.NumberField('UserSign', Oty1, 'Edm.Int32');
    /**
     * Static representation of the [[transfered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.TRANSFERED = new v4_1.StringField('Transfered', Oty1, 'Edm.String');
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.CREATE_DATE = new v4_1.DateField('CreateDate', Oty1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.CREATE_TIME = new v4_1.TimeField('CreateTime', Oty1, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.UPDATE_DATE = new v4_1.DateField('UpdateDate', Oty1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.UPDATE_TIME = new v4_1.TimeField('UpdateTime', Oty1, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Oty1.DATA_SOURCE = new v4_1.StringField('DataSource', Oty1, 'Edm.String');
    /**
     * All fields of the Oty1 entity.
     */
    Oty1._allFields = [
        Oty1.CODE,
        Oty1.NAME,
        Oty1.DOC_ENTRY,
        Oty1.CANCELED,
        Oty1.OBJECT,
        Oty1.LOG_INST,
        Oty1.USER_SIGN,
        Oty1.TRANSFERED,
        Oty1.CREATE_DATE,
        Oty1.CREATE_TIME,
        Oty1.UPDATE_DATE,
        Oty1.UPDATE_TIME,
        Oty1.DATA_SOURCE
    ];
    /**
     * All fields selector.
     */
    Oty1.ALL_FIELDS = new v4_1.AllFields('*', Oty1);
    /**
     * All key fields of the Oty1 entity.
     */
    Oty1._keyFields = [Oty1.CODE];
    /**
     * Mapping of all key field names to the respective static field property Oty1.
     */
    Oty1._keys = Oty1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Oty1 = exports.Oty1 || (exports.Oty1 = {}));
exports.Oty1 = Oty1;
//# sourceMappingURL=Oty1.js.map
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
exports.ElectronicFileFormats = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ElectronicFileFormatsRequestBuilder_1 = require("./ElectronicFileFormatsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ElectronicFileFormats" of service "SAPB1".
 */
var ElectronicFileFormats = /** @class */ (function (_super) {
    __extends(ElectronicFileFormats, _super);
    function ElectronicFileFormats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ElectronicFileFormats`.
     * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
     */
    ElectronicFileFormats.builder = function () {
        return core_1.EntityV4.entityBuilder(ElectronicFileFormats);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ElectronicFileFormats` entity type.
     * @returns A `ElectronicFileFormats` request builder.
     */
    ElectronicFileFormats.requestBuilder = function () {
        return new ElectronicFileFormatsRequestBuilder_1.ElectronicFileFormatsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ElectronicFileFormats`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
     */
    ElectronicFileFormats.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ElectronicFileFormats);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ElectronicFileFormats.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ElectronicFileFormats.
     */
    ElectronicFileFormats._entityName = 'ElectronicFileFormats';
    /**
     * Default url path for the according service.
     */
    ElectronicFileFormats._defaultServicePath = '/b1s/v2/';
    return ElectronicFileFormats;
}(core_1.EntityV4));
exports.ElectronicFileFormats = ElectronicFileFormats;
(function (ElectronicFileFormats) {
    /**
     * Static representation of the [[formatId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.FORMAT_ID = new core_1.NumberField('FormatID', ElectronicFileFormats, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.NAME = new core_1.StringField('Name', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.DESCRIPTION = new core_1.StringField('Description', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.VERSION = new core_1.StringField('Version', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[schemaVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.SCHEMA_VERSION = new core_1.StringField('SchemaVersion', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[outputFilePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.OUTPUT_FILE_PATH = new core_1.StringField('OutputFilePath', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[menuName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.MENU_NAME = new core_1.StringField('MenuName', ElectronicFileFormats, 'Edm.String');
    /**
     * Static representation of the [[menuPath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ElectronicFileFormats.MENU_PATH = new core_1.StringField('MenuPath', ElectronicFileFormats, 'Edm.String');
    /**
     * All fields of the ElectronicFileFormats entity.
     */
    ElectronicFileFormats._allFields = [
        ElectronicFileFormats.FORMAT_ID,
        ElectronicFileFormats.NAME,
        ElectronicFileFormats.DESCRIPTION,
        ElectronicFileFormats.VERSION,
        ElectronicFileFormats.SCHEMA_VERSION,
        ElectronicFileFormats.OUTPUT_FILE_PATH,
        ElectronicFileFormats.MENU_NAME,
        ElectronicFileFormats.MENU_PATH
    ];
    /**
     * All fields selector.
     */
    ElectronicFileFormats.ALL_FIELDS = new core_1.AllFields('*', ElectronicFileFormats);
    /**
     * All key fields of the ElectronicFileFormats entity.
     */
    ElectronicFileFormats._keyFields = [ElectronicFileFormats.FORMAT_ID];
    /**
     * Mapping of all key field names to the respective static field property ElectronicFileFormats.
     */
    ElectronicFileFormats._keys = ElectronicFileFormats._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ElectronicFileFormats = exports.ElectronicFileFormats || (exports.ElectronicFileFormats = {}));
exports.ElectronicFileFormats = ElectronicFileFormats;
//# sourceMappingURL=ElectronicFileFormats.js.map
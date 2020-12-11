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
exports.DynamicSystemStrings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DynamicSystemStringsRequestBuilder_1 = require("./DynamicSystemStringsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DynamicSystemStrings" of service "SAPB1".
 */
var DynamicSystemStrings = /** @class */ (function (_super) {
    __extends(DynamicSystemStrings, _super);
    function DynamicSystemStrings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DynamicSystemStrings`.
     * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
     */
    DynamicSystemStrings.builder = function () {
        return core_1.EntityV4.entityBuilder(DynamicSystemStrings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DynamicSystemStrings` entity type.
     * @returns A `DynamicSystemStrings` request builder.
     */
    DynamicSystemStrings.requestBuilder = function () {
        return new DynamicSystemStringsRequestBuilder_1.DynamicSystemStringsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicSystemStrings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
     */
    DynamicSystemStrings.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DynamicSystemStrings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DynamicSystemStrings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DynamicSystemStrings.
     */
    DynamicSystemStrings._entityName = 'DynamicSystemStrings';
    /**
     * Default url path for the according service.
     */
    DynamicSystemStrings._defaultServicePath = '/b1s/v2/';
    return DynamicSystemStrings;
}(core_1.EntityV4));
exports.DynamicSystemStrings = DynamicSystemStrings;
(function (DynamicSystemStrings) {
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.FORM_ID = new core_1.StringField('FormID', DynamicSystemStrings, 'Edm.String');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.ITEM_ID = new core_1.StringField('ItemID', DynamicSystemStrings, 'Edm.String');
    /**
     * Static representation of the [[columnId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.COLUMN_ID = new core_1.StringField('ColumnID', DynamicSystemStrings, 'Edm.String');
    /**
     * Static representation of the [[itemString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.ITEM_STRING = new core_1.StringField('ItemString', DynamicSystemStrings, 'Edm.String');
    /**
     * Static representation of the [[isBold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.IS_BOLD = new core_1.EnumField('IsBold', DynamicSystemStrings);
    /**
     * Static representation of the [[isItalics]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DynamicSystemStrings.IS_ITALICS = new core_1.EnumField('IsItalics', DynamicSystemStrings);
    /**
     * All fields of the DynamicSystemStrings entity.
     */
    DynamicSystemStrings._allFields = [
        DynamicSystemStrings.FORM_ID,
        DynamicSystemStrings.ITEM_ID,
        DynamicSystemStrings.COLUMN_ID,
        DynamicSystemStrings.ITEM_STRING,
        DynamicSystemStrings.IS_BOLD,
        DynamicSystemStrings.IS_ITALICS
    ];
    /**
     * All fields selector.
     */
    DynamicSystemStrings.ALL_FIELDS = new core_1.AllFields('*', DynamicSystemStrings);
    /**
     * All key fields of the DynamicSystemStrings entity.
     */
    DynamicSystemStrings._keyFields = [DynamicSystemStrings.FORM_ID, DynamicSystemStrings.ITEM_ID, DynamicSystemStrings.COLUMN_ID];
    /**
     * Mapping of all key field names to the respective static field property DynamicSystemStrings.
     */
    DynamicSystemStrings._keys = DynamicSystemStrings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DynamicSystemStrings = exports.DynamicSystemStrings || (exports.DynamicSystemStrings = {}));
exports.DynamicSystemStrings = DynamicSystemStrings;
//# sourceMappingURL=DynamicSystemStrings.js.map
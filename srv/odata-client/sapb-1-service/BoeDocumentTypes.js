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
exports.BoeDocumentTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BoeDocumentTypesRequestBuilder_1 = require("./BoeDocumentTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BOEDocumentTypes" of service "SAPB1".
 */
var BoeDocumentTypes = /** @class */ (function (_super) {
    __extends(BoeDocumentTypes, _super);
    function BoeDocumentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BoeDocumentTypes`.
     * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
     */
    BoeDocumentTypes.builder = function () {
        return v4_1.Entity.entityBuilder(BoeDocumentTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BoeDocumentTypes` entity type.
     * @returns A `BoeDocumentTypes` request builder.
     */
    BoeDocumentTypes.requestBuilder = function () {
        return new BoeDocumentTypesRequestBuilder_1.BoeDocumentTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeDocumentTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
     */
    BoeDocumentTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BoeDocumentTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BoeDocumentTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BoeDocumentTypes.
     */
    BoeDocumentTypes._entityName = 'BOEDocumentTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BoeDocumentTypes.
     */
    BoeDocumentTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BoeDocumentTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BoeDocumentTypes;
}(v4_1.Entity));
exports.BoeDocumentTypes = BoeDocumentTypes;
(function (BoeDocumentTypes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeDocumentTypes.DOC_ENTRY = new v4_1.NumberField('DocEntry', BoeDocumentTypes, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeDocumentTypes.DOC_TYPE = new v4_1.StringField('DocType', BoeDocumentTypes, 'Edm.String');
    /**
     * Static representation of the [[docDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeDocumentTypes.DOC_DESCRIPTION = new v4_1.StringField('DocDescription', BoeDocumentTypes, 'Edm.String');
    /**
     * All fields of the BoeDocumentTypes entity.
     */
    BoeDocumentTypes._allFields = [
        BoeDocumentTypes.DOC_ENTRY,
        BoeDocumentTypes.DOC_TYPE,
        BoeDocumentTypes.DOC_DESCRIPTION
    ];
    /**
     * All fields selector.
     */
    BoeDocumentTypes.ALL_FIELDS = new v4_1.AllFields('*', BoeDocumentTypes);
    /**
     * All key fields of the BoeDocumentTypes entity.
     */
    BoeDocumentTypes._keyFields = [BoeDocumentTypes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BoeDocumentTypes.
     */
    BoeDocumentTypes._keys = BoeDocumentTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BoeDocumentTypes = exports.BoeDocumentTypes || (exports.BoeDocumentTypes = {}));
exports.BoeDocumentTypes = BoeDocumentTypes;
//# sourceMappingURL=BoeDocumentTypes.js.map
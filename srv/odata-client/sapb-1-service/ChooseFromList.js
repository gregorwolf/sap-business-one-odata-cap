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
exports.ChooseFromList = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ChooseFromListRequestBuilder_1 = require("./ChooseFromListRequestBuilder");
var ChooseFromListLine_1 = require("./ChooseFromListLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ChooseFromList" of service "SAPB1".
 */
var ChooseFromList = /** @class */ (function (_super) {
    __extends(ChooseFromList, _super);
    function ChooseFromList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ChooseFromList`.
     * @returns A builder that constructs instances of entity type `ChooseFromList`.
     */
    ChooseFromList.builder = function () {
        return v4_1.Entity.entityBuilder(ChooseFromList);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ChooseFromList` entity type.
     * @returns A `ChooseFromList` request builder.
     */
    ChooseFromList.requestBuilder = function () {
        return new ChooseFromListRequestBuilder_1.ChooseFromListRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChooseFromList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChooseFromList`.
     */
    ChooseFromList.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ChooseFromList);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ChooseFromList.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ChooseFromList.
     */
    ChooseFromList._entityName = 'ChooseFromList';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ChooseFromList.
     */
    ChooseFromList._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ChooseFromList._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ChooseFromList;
}(v4_1.Entity));
exports.ChooseFromList = ChooseFromList;
(function (ChooseFromList) {
    /**
     * Static representation of the [[objectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChooseFromList.OBJECT_NAME = new v4_1.StringField('ObjectName', ChooseFromList, 'Edm.String');
    /**
     * Static representation of the [[chooseFromListLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChooseFromList.CHOOSE_FROM_LIST_LINES = new v4_1.CollectionField('ChooseFromList_Lines', ChooseFromList, new ChooseFromListLine_1.ChooseFromListLineField('', ChooseFromList));
    /**
     * All fields of the ChooseFromList entity.
     */
    ChooseFromList._allFields = [
        ChooseFromList.OBJECT_NAME,
        ChooseFromList.CHOOSE_FROM_LIST_LINES
    ];
    /**
     * All fields selector.
     */
    ChooseFromList.ALL_FIELDS = new v4_1.AllFields('*', ChooseFromList);
    /**
     * All key fields of the ChooseFromList entity.
     */
    ChooseFromList._keyFields = [ChooseFromList.OBJECT_NAME];
    /**
     * Mapping of all key field names to the respective static field property ChooseFromList.
     */
    ChooseFromList._keys = ChooseFromList._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ChooseFromList = exports.ChooseFromList || (exports.ChooseFromList = {}));
exports.ChooseFromList = ChooseFromList;
//# sourceMappingURL=ChooseFromList.js.map
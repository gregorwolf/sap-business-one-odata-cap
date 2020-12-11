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
exports.PickLists = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PickListsRequestBuilder_1 = require("./PickListsRequestBuilder");
var PickListsLine_1 = require("./PickListsLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PickLists" of service "SAPB1".
 */
var PickLists = /** @class */ (function (_super) {
    __extends(PickLists, _super);
    function PickLists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PickLists`.
     * @returns A builder that constructs instances of entity type `PickLists`.
     */
    PickLists.builder = function () {
        return core_1.EntityV4.entityBuilder(PickLists);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PickLists` entity type.
     * @returns A `PickLists` request builder.
     */
    PickLists.requestBuilder = function () {
        return new PickListsRequestBuilder_1.PickListsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickLists`.
     */
    PickLists.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PickLists);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PickLists.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PickLists.
     */
    PickLists._entityName = 'PickLists';
    /**
     * Default url path for the according service.
     */
    PickLists._defaultServicePath = '/b1s/v2/';
    return PickLists;
}(core_1.EntityV4));
exports.PickLists = PickLists;
var Users_1 = require("./Users");
(function (PickLists) {
    /**
     * Static representation of the [[absoluteentry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.ABSOLUTEENTRY = new core_1.NumberField('Absoluteentry', PickLists, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.NAME = new core_1.StringField('Name', PickLists, 'Edm.String');
    /**
     * Static representation of the [[ownerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.OWNER_CODE = new core_1.NumberField('OwnerCode', PickLists, 'Edm.Int32');
    /**
     * Static representation of the [[ownerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.OWNER_NAME = new core_1.StringField('OwnerName', PickLists, 'Edm.String');
    /**
     * Static representation of the [[pickDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.PICK_DATE = new core_1.DateField('PickDate', PickLists, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.REMARKS = new core_1.StringField('Remarks', PickLists, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.STATUS = new core_1.EnumField('Status', PickLists);
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.OBJECT_TYPE = new core_1.StringField('ObjectType', PickLists, 'Edm.String');
    /**
     * Static representation of the [[useBaseUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.USE_BASE_UNITS = new core_1.EnumField('UseBaseUnits', PickLists);
    /**
     * Static representation of the [[pickListsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.PICK_LISTS_LINES = new core_1.CollectionField('PickListsLines', PickLists, PickListsLine_1.PickListsLine);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickLists.USER = new core_1.OneToOneLink('User', PickLists, Users_1.Users);
    /**
     * All fields of the PickLists entity.
     */
    PickLists._allFields = [
        PickLists.ABSOLUTEENTRY,
        PickLists.NAME,
        PickLists.OWNER_CODE,
        PickLists.OWNER_NAME,
        PickLists.PICK_DATE,
        PickLists.REMARKS,
        PickLists.STATUS,
        PickLists.OBJECT_TYPE,
        PickLists.USE_BASE_UNITS,
        PickLists.PICK_LISTS_LINES,
        PickLists.USER
    ];
    /**
     * All fields selector.
     */
    PickLists.ALL_FIELDS = new core_1.AllFields('*', PickLists);
    /**
     * All key fields of the PickLists entity.
     */
    PickLists._keyFields = [PickLists.ABSOLUTEENTRY];
    /**
     * Mapping of all key field names to the respective static field property PickLists.
     */
    PickLists._keys = PickLists._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PickLists = exports.PickLists || (exports.PickLists = {}));
exports.PickLists = PickLists;
//# sourceMappingURL=PickLists.js.map
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
exports.KnowledgeBaseSolutions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var KnowledgeBaseSolutionsRequestBuilder_1 = require("./KnowledgeBaseSolutionsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "KnowledgeBaseSolutions" of service "SAPB1".
 */
var KnowledgeBaseSolutions = /** @class */ (function (_super) {
    __extends(KnowledgeBaseSolutions, _super);
    function KnowledgeBaseSolutions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `KnowledgeBaseSolutions`.
     * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
     */
    KnowledgeBaseSolutions.builder = function () {
        return v4_1.Entity.entityBuilder(KnowledgeBaseSolutions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `KnowledgeBaseSolutions` entity type.
     * @returns A `KnowledgeBaseSolutions` request builder.
     */
    KnowledgeBaseSolutions.requestBuilder = function () {
        return new KnowledgeBaseSolutionsRequestBuilder_1.KnowledgeBaseSolutionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `KnowledgeBaseSolutions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
     */
    KnowledgeBaseSolutions.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, KnowledgeBaseSolutions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    KnowledgeBaseSolutions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for KnowledgeBaseSolutions.
     */
    KnowledgeBaseSolutions._entityName = 'KnowledgeBaseSolutions';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for KnowledgeBaseSolutions.
     */
    KnowledgeBaseSolutions._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    KnowledgeBaseSolutions._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return KnowledgeBaseSolutions;
}(v4_1.Entity));
exports.KnowledgeBaseSolutions = KnowledgeBaseSolutions;
var Items_1 = require("./Items");
var ServiceCallSolutionStatus_1 = require("./ServiceCallSolutionStatus");
var Users_1 = require("./Users");
(function (KnowledgeBaseSolutions) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.ITEM_CODE = new v4_1.StringField('ItemCode', KnowledgeBaseSolutions, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.STATUS = new v4_1.NumberField('Status', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.OWNER = new v4_1.NumberField('Owner', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.CREATED_BY = new v4_1.NumberField('CreatedBy', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.CREATION_DATE = new v4_1.DateField('CreationDate', KnowledgeBaseSolutions, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastUpdatedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.LAST_UPDATED_BY = new v4_1.NumberField('LastUpdatedBy', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the [[lastUpdateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.LAST_UPDATE_DATE = new v4_1.DateField('LastUpdateDate', KnowledgeBaseSolutions, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[solution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.SOLUTION = new v4_1.StringField('Solution', KnowledgeBaseSolutions, 'Edm.String');
    /**
     * Static representation of the [[symptom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.SYMPTOM = new v4_1.StringField('Symptom', KnowledgeBaseSolutions, 'Edm.String');
    /**
     * Static representation of the [[cause]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.CAUSE = new v4_1.StringField('Cause', KnowledgeBaseSolutions, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.DESCRIPTION = new v4_1.StringField('Description', KnowledgeBaseSolutions, 'Edm.String');
    /**
     * Static representation of the [[solutionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.SOLUTION_CODE = new v4_1.NumberField('SolutionCode', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', KnowledgeBaseSolutions, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.ITEM = new v4_1.OneToOneLink('Item', KnowledgeBaseSolutions, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallSolutionStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.SERVICE_CALL_SOLUTION_STATUS = new v4_1.OneToOneLink('ServiceCallSolutionStatus', KnowledgeBaseSolutions, ServiceCallSolutionStatus_1.ServiceCallSolutionStatus);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KnowledgeBaseSolutions.USER = new v4_1.OneToOneLink('User', KnowledgeBaseSolutions, Users_1.Users);
    /**
     * All fields of the KnowledgeBaseSolutions entity.
     */
    KnowledgeBaseSolutions._allFields = [
        KnowledgeBaseSolutions.ITEM_CODE,
        KnowledgeBaseSolutions.STATUS,
        KnowledgeBaseSolutions.OWNER,
        KnowledgeBaseSolutions.CREATED_BY,
        KnowledgeBaseSolutions.CREATION_DATE,
        KnowledgeBaseSolutions.LAST_UPDATED_BY,
        KnowledgeBaseSolutions.LAST_UPDATE_DATE,
        KnowledgeBaseSolutions.SOLUTION,
        KnowledgeBaseSolutions.SYMPTOM,
        KnowledgeBaseSolutions.CAUSE,
        KnowledgeBaseSolutions.DESCRIPTION,
        KnowledgeBaseSolutions.SOLUTION_CODE,
        KnowledgeBaseSolutions.ATTACHMENT_ENTRY,
        KnowledgeBaseSolutions.ITEM,
        KnowledgeBaseSolutions.SERVICE_CALL_SOLUTION_STATUS,
        KnowledgeBaseSolutions.USER
    ];
    /**
     * All fields selector.
     */
    KnowledgeBaseSolutions.ALL_FIELDS = new v4_1.AllFields('*', KnowledgeBaseSolutions);
    /**
     * All key fields of the KnowledgeBaseSolutions entity.
     */
    KnowledgeBaseSolutions._keyFields = [KnowledgeBaseSolutions.SOLUTION_CODE];
    /**
     * Mapping of all key field names to the respective static field property KnowledgeBaseSolutions.
     */
    KnowledgeBaseSolutions._keys = KnowledgeBaseSolutions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(KnowledgeBaseSolutions = exports.KnowledgeBaseSolutions || (exports.KnowledgeBaseSolutions = {}));
exports.KnowledgeBaseSolutions = KnowledgeBaseSolutions;
//# sourceMappingURL=KnowledgeBaseSolutions.js.map
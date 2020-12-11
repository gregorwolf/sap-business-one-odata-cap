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
exports.ApprovalTemplates = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ApprovalTemplatesRequestBuilder_1 = require("./ApprovalTemplatesRequestBuilder");
var ApprovalTemplateUser_1 = require("./ApprovalTemplateUser");
var ApprovalTemplateStage_1 = require("./ApprovalTemplateStage");
var ApprovalTemplateDocument_1 = require("./ApprovalTemplateDocument");
var ApprovalTemplateTerm_1 = require("./ApprovalTemplateTerm");
var ApprovalTemplateQuery_1 = require("./ApprovalTemplateQuery");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ApprovalTemplates" of service "SAPB1".
 */
var ApprovalTemplates = /** @class */ (function (_super) {
    __extends(ApprovalTemplates, _super);
    function ApprovalTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ApprovalTemplates`.
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    ApprovalTemplates.builder = function () {
        return core_1.EntityV4.entityBuilder(ApprovalTemplates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalTemplates` entity type.
     * @returns A `ApprovalTemplates` request builder.
     */
    ApprovalTemplates.requestBuilder = function () {
        return new ApprovalTemplatesRequestBuilder_1.ApprovalTemplatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    ApprovalTemplates.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ApprovalTemplates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ApprovalTemplates.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ApprovalTemplates.
     */
    ApprovalTemplates._entityName = 'ApprovalTemplates';
    /**
     * Default url path for the according service.
     */
    ApprovalTemplates._defaultServicePath = '/b1s/v2/';
    return ApprovalTemplates;
}(core_1.EntityV4));
exports.ApprovalTemplates = ApprovalTemplates;
var ApprovalRequests_1 = require("./ApprovalRequests");
(function (ApprovalTemplates) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.CODE = new core_1.NumberField('Code', ApprovalTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.NAME = new core_1.StringField('Name', ApprovalTemplates, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.REMARKS = new core_1.StringField('Remarks', ApprovalTemplates, 'Edm.String');
    /**
     * Static representation of the [[useTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.USE_TERMS = new core_1.EnumField('UseTerms', ApprovalTemplates);
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.IS_ACTIVE = new core_1.EnumField('IsActive', ApprovalTemplates);
    /**
     * Static representation of the [[isActiveWhenUpdatingDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.IS_ACTIVE_WHEN_UPDATING_DOCUMENTS = new core_1.EnumField('IsActiveWhenUpdatingDocuments', ApprovalTemplates);
    /**
     * Static representation of the [[approvalTemplateUsers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_USERS = new core_1.CollectionField('ApprovalTemplateUsers', ApprovalTemplates, ApprovalTemplateUser_1.ApprovalTemplateUser);
    /**
     * Static representation of the [[approvalTemplateStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_STAGES = new core_1.CollectionField('ApprovalTemplateStages', ApprovalTemplates, ApprovalTemplateStage_1.ApprovalTemplateStage);
    /**
     * Static representation of the [[approvalTemplateDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_DOCUMENTS = new core_1.CollectionField('ApprovalTemplateDocuments', ApprovalTemplates, ApprovalTemplateDocument_1.ApprovalTemplateDocument);
    /**
     * Static representation of the [[approvalTemplateTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_TERMS = new core_1.CollectionField('ApprovalTemplateTerms', ApprovalTemplates, ApprovalTemplateTerm_1.ApprovalTemplateTerm);
    /**
     * Static representation of the [[approvalTemplateQueries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_QUERIES = new core_1.CollectionField('ApprovalTemplateQueries', ApprovalTemplates, ApprovalTemplateQuery_1.ApprovalTemplateQuery);
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_REQUESTS = new core_1.OneToManyLink('ApprovalRequests', ApprovalTemplates, ApprovalRequests_1.ApprovalRequests);
    /**
     * All fields of the ApprovalTemplates entity.
     */
    ApprovalTemplates._allFields = [
        ApprovalTemplates.CODE,
        ApprovalTemplates.NAME,
        ApprovalTemplates.REMARKS,
        ApprovalTemplates.USE_TERMS,
        ApprovalTemplates.IS_ACTIVE,
        ApprovalTemplates.IS_ACTIVE_WHEN_UPDATING_DOCUMENTS,
        ApprovalTemplates.APPROVAL_TEMPLATE_USERS,
        ApprovalTemplates.APPROVAL_TEMPLATE_STAGES,
        ApprovalTemplates.APPROVAL_TEMPLATE_DOCUMENTS,
        ApprovalTemplates.APPROVAL_TEMPLATE_TERMS,
        ApprovalTemplates.APPROVAL_TEMPLATE_QUERIES,
        ApprovalTemplates.APPROVAL_REQUESTS
    ];
    /**
     * All fields selector.
     */
    ApprovalTemplates.ALL_FIELDS = new core_1.AllFields('*', ApprovalTemplates);
    /**
     * All key fields of the ApprovalTemplates entity.
     */
    ApprovalTemplates._keyFields = [ApprovalTemplates.CODE];
    /**
     * Mapping of all key field names to the respective static field property ApprovalTemplates.
     */
    ApprovalTemplates._keys = ApprovalTemplates._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ApprovalTemplates = exports.ApprovalTemplates || (exports.ApprovalTemplates = {}));
exports.ApprovalTemplates = ApprovalTemplates;
//# sourceMappingURL=ApprovalTemplates.js.map
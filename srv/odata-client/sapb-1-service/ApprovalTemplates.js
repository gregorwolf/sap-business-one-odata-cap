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
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ApprovalTemplates" of service "SAPB1".
 */
var ApprovalTemplates = /** @class */ (function (_super) {
    __extends(ApprovalTemplates, _super);
    function ApprovalTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ApprovalTemplates`.
     * @returns A builder that constructs instances of entity type `ApprovalTemplates`.
     */
    ApprovalTemplates.builder = function () {
        return v4_1.Entity.entityBuilder(ApprovalTemplates);
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
        return v4_1.Entity.customFieldSelector(fieldName, ApprovalTemplates);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ApprovalTemplates.
     */
    ApprovalTemplates._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ApprovalTemplates._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ApprovalTemplates;
}(v4_1.Entity));
exports.ApprovalTemplates = ApprovalTemplates;
var ApprovalRequests_1 = require("./ApprovalRequests");
(function (ApprovalTemplates) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.CODE = new v4_1.NumberField('Code', ApprovalTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.NAME = new v4_1.StringField('Name', ApprovalTemplates, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.REMARKS = new v4_1.StringField('Remarks', ApprovalTemplates, 'Edm.String');
    /**
     * Static representation of the [[approvalTemplateUsers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_USERS = new v4_1.CollectionField('ApprovalTemplateUsers', ApprovalTemplates, new ApprovalTemplateUser_1.ApprovalTemplateUserField('', ApprovalTemplates));
    /**
     * Static representation of the [[approvalTemplateStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_STAGES = new v4_1.CollectionField('ApprovalTemplateStages', ApprovalTemplates, new ApprovalTemplateStage_1.ApprovalTemplateStageField('', ApprovalTemplates));
    /**
     * Static representation of the [[approvalTemplateDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_DOCUMENTS = new v4_1.CollectionField('ApprovalTemplateDocuments', ApprovalTemplates, new ApprovalTemplateDocument_1.ApprovalTemplateDocumentField('', ApprovalTemplates));
    /**
     * Static representation of the [[approvalTemplateTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_TERMS = new v4_1.CollectionField('ApprovalTemplateTerms', ApprovalTemplates, new ApprovalTemplateTerm_1.ApprovalTemplateTermField('', ApprovalTemplates));
    /**
     * Static representation of the [[approvalTemplateQueries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_TEMPLATE_QUERIES = new v4_1.CollectionField('ApprovalTemplateQueries', ApprovalTemplates, new ApprovalTemplateQuery_1.ApprovalTemplateQueryField('', ApprovalTemplates));
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalTemplates.APPROVAL_REQUESTS = new v4_1.OneToManyLink('ApprovalRequests', ApprovalTemplates, ApprovalRequests_1.ApprovalRequests);
    /**
     * All fields of the ApprovalTemplates entity.
     */
    ApprovalTemplates._allFields = [
        ApprovalTemplates.CODE,
        ApprovalTemplates.NAME,
        ApprovalTemplates.REMARKS,
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
    ApprovalTemplates.ALL_FIELDS = new v4_1.AllFields('*', ApprovalTemplates);
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
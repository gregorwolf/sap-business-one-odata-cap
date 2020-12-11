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
exports.ApprovalRequests = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ApprovalRequestsRequestBuilder_1 = require("./ApprovalRequestsRequestBuilder");
var ApprovalRequestLine_1 = require("./ApprovalRequestLine");
var ApprovalRequestDecision_1 = require("./ApprovalRequestDecision");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ApprovalRequests" of service "SAPB1".
 */
var ApprovalRequests = /** @class */ (function (_super) {
    __extends(ApprovalRequests, _super);
    function ApprovalRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ApprovalRequests`.
     * @returns A builder that constructs instances of entity type `ApprovalRequests`.
     */
    ApprovalRequests.builder = function () {
        return core_1.EntityV4.entityBuilder(ApprovalRequests);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalRequests` entity type.
     * @returns A `ApprovalRequests` request builder.
     */
    ApprovalRequests.requestBuilder = function () {
        return new ApprovalRequestsRequestBuilder_1.ApprovalRequestsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalRequests`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalRequests`.
     */
    ApprovalRequests.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ApprovalRequests);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ApprovalRequests.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ApprovalRequests.
     */
    ApprovalRequests._entityName = 'ApprovalRequests';
    /**
     * Default url path for the according service.
     */
    ApprovalRequests._defaultServicePath = '/b1s/v2/';
    return ApprovalRequests;
}(core_1.EntityV4));
exports.ApprovalRequests = ApprovalRequests;
var ApprovalTemplates_1 = require("./ApprovalTemplates");
var ApprovalStages_1 = require("./ApprovalStages");
var Users_1 = require("./Users");
(function (ApprovalRequests) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.CODE = new core_1.NumberField('Code', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[approvalTemplatesId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.APPROVAL_TEMPLATES_ID = new core_1.NumberField('ApprovalTemplatesID', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.OBJECT_TYPE = new core_1.StringField('ObjectType', ApprovalRequests, 'Edm.String');
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.IS_DRAFT = new core_1.StringField('IsDraft', ApprovalRequests, 'Edm.String');
    /**
     * Static representation of the [[objectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.OBJECT_ENTRY = new core_1.NumberField('ObjectEntry', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.STATUS = new core_1.EnumField('Status', ApprovalRequests);
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.REMARKS = new core_1.StringField('Remarks', ApprovalRequests, 'Edm.String');
    /**
     * Static representation of the [[currentStage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.CURRENT_STAGE = new core_1.NumberField('CurrentStage', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[originatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.ORIGINATOR_ID = new core_1.NumberField('OriginatorID', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.CREATION_DATE = new core_1.DateField('CreationDate', ApprovalRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.CREATION_TIME = new core_1.TimeField('CreationTime', ApprovalRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[draftEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.DRAFT_ENTRY = new core_1.NumberField('DraftEntry', ApprovalRequests, 'Edm.Int32');
    /**
     * Static representation of the [[draftType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.DRAFT_TYPE = new core_1.StringField('DraftType', ApprovalRequests, 'Edm.String');
    /**
     * Static representation of the [[approvalRequestLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.APPROVAL_REQUEST_LINES = new core_1.CollectionField('ApprovalRequestLines', ApprovalRequests, ApprovalRequestLine_1.ApprovalRequestLine);
    /**
     * Static representation of the [[approvalRequestDecisions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.APPROVAL_REQUEST_DECISIONS = new core_1.CollectionField('ApprovalRequestDecisions', ApprovalRequests, ApprovalRequestDecision_1.ApprovalRequestDecision);
    /**
     * Static representation of the one-to-one navigation property [[approvalTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.APPROVAL_TEMPLATE = new core_1.OneToOneLink('ApprovalTemplate', ApprovalRequests, ApprovalTemplates_1.ApprovalTemplates);
    /**
     * Static representation of the one-to-one navigation property [[approvalStage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.APPROVAL_STAGE = new core_1.OneToOneLink('ApprovalStage', ApprovalRequests, ApprovalStages_1.ApprovalStages);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalRequests.USER = new core_1.OneToOneLink('User', ApprovalRequests, Users_1.Users);
    /**
     * All fields of the ApprovalRequests entity.
     */
    ApprovalRequests._allFields = [
        ApprovalRequests.CODE,
        ApprovalRequests.APPROVAL_TEMPLATES_ID,
        ApprovalRequests.OBJECT_TYPE,
        ApprovalRequests.IS_DRAFT,
        ApprovalRequests.OBJECT_ENTRY,
        ApprovalRequests.STATUS,
        ApprovalRequests.REMARKS,
        ApprovalRequests.CURRENT_STAGE,
        ApprovalRequests.ORIGINATOR_ID,
        ApprovalRequests.CREATION_DATE,
        ApprovalRequests.CREATION_TIME,
        ApprovalRequests.DRAFT_ENTRY,
        ApprovalRequests.DRAFT_TYPE,
        ApprovalRequests.APPROVAL_REQUEST_LINES,
        ApprovalRequests.APPROVAL_REQUEST_DECISIONS,
        ApprovalRequests.APPROVAL_TEMPLATE,
        ApprovalRequests.APPROVAL_STAGE,
        ApprovalRequests.USER
    ];
    /**
     * All fields selector.
     */
    ApprovalRequests.ALL_FIELDS = new core_1.AllFields('*', ApprovalRequests);
    /**
     * All key fields of the ApprovalRequests entity.
     */
    ApprovalRequests._keyFields = [ApprovalRequests.CODE];
    /**
     * Mapping of all key field names to the respective static field property ApprovalRequests.
     */
    ApprovalRequests._keys = ApprovalRequests._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ApprovalRequests = exports.ApprovalRequests || (exports.ApprovalRequests = {}));
exports.ApprovalRequests = ApprovalRequests;
//# sourceMappingURL=ApprovalRequests.js.map
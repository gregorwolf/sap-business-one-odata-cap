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
exports.ApprovalStages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ApprovalStagesRequestBuilder_1 = require("./ApprovalStagesRequestBuilder");
var ApprovalStageApprover_1 = require("./ApprovalStageApprover");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ApprovalStages" of service "SAPB1".
 */
var ApprovalStages = /** @class */ (function (_super) {
    __extends(ApprovalStages, _super);
    function ApprovalStages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ApprovalStages`.
     * @returns A builder that constructs instances of entity type `ApprovalStages`.
     */
    ApprovalStages.builder = function () {
        return core_1.EntityV4.entityBuilder(ApprovalStages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ApprovalStages` entity type.
     * @returns A `ApprovalStages` request builder.
     */
    ApprovalStages.requestBuilder = function () {
        return new ApprovalStagesRequestBuilder_1.ApprovalStagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ApprovalStages`.
     */
    ApprovalStages.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ApprovalStages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ApprovalStages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ApprovalStages.
     */
    ApprovalStages._entityName = 'ApprovalStages';
    /**
     * Default url path for the according service.
     */
    ApprovalStages._defaultServicePath = '/b1s/v2/';
    return ApprovalStages;
}(core_1.EntityV4));
exports.ApprovalStages = ApprovalStages;
var ApprovalRequests_1 = require("./ApprovalRequests");
(function (ApprovalStages) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.CODE = new core_1.NumberField('Code', ApprovalStages, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.NAME = new core_1.StringField('Name', ApprovalStages, 'Edm.String');
    /**
     * Static representation of the [[noOfApproversRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.NO_OF_APPROVERS_REQUIRED = new core_1.NumberField('NoOfApproversRequired', ApprovalStages, 'Edm.Int32');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.REMARKS = new core_1.StringField('Remarks', ApprovalStages, 'Edm.String');
    /**
     * Static representation of the [[approvalStageApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.APPROVAL_STAGE_APPROVERS = new core_1.CollectionField('ApprovalStageApprovers', ApprovalStages, ApprovalStageApprover_1.ApprovalStageApprover);
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ApprovalStages.APPROVAL_REQUESTS = new core_1.OneToManyLink('ApprovalRequests', ApprovalStages, ApprovalRequests_1.ApprovalRequests);
    /**
     * All fields of the ApprovalStages entity.
     */
    ApprovalStages._allFields = [
        ApprovalStages.CODE,
        ApprovalStages.NAME,
        ApprovalStages.NO_OF_APPROVERS_REQUIRED,
        ApprovalStages.REMARKS,
        ApprovalStages.APPROVAL_STAGE_APPROVERS,
        ApprovalStages.APPROVAL_REQUESTS
    ];
    /**
     * All fields selector.
     */
    ApprovalStages.ALL_FIELDS = new core_1.AllFields('*', ApprovalStages);
    /**
     * All key fields of the ApprovalStages entity.
     */
    ApprovalStages._keyFields = [ApprovalStages.CODE];
    /**
     * Mapping of all key field names to the respective static field property ApprovalStages.
     */
    ApprovalStages._keys = ApprovalStages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ApprovalStages = exports.ApprovalStages || (exports.ApprovalStages = {}));
exports.ApprovalStages = ApprovalStages;
//# sourceMappingURL=ApprovalStages.js.map
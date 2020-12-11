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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalTemplateStage = exports.ApprovalTemplateStageField = exports.createApprovalTemplateStage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateStage.build]] instead.
 */
function createApprovalTemplateStage(json) {
    return ApprovalTemplateStage.build(json);
}
exports.createApprovalTemplateStage = createApprovalTemplateStage;
/**
 * ApprovalTemplateStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalTemplateStageField = /** @class */ (function (_super) {
    __extends(ApprovalTemplateStageField, _super);
    /**
     * Creates an instance of ApprovalTemplateStageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalTemplateStageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalTemplateStage) || this;
        /**
         * Representation of the [[ApprovalTemplateStage.sortId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortId = new core_1.ComplexTypeNumberPropertyField('SortID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalTemplateStage.approvalStageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalStageCode = new core_1.ComplexTypeNumberPropertyField('ApprovalStageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalTemplateStage.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return ApprovalTemplateStageField;
}(core_1.ComplexTypeField));
exports.ApprovalTemplateStageField = ApprovalTemplateStageField;
var ApprovalTemplateStage;
(function (ApprovalTemplateStage) {
    /**
     * Metadata information on all properties of the `ApprovalTemplateStage` complex type.
     */
    ApprovalTemplateStage._propertyMetadata = [{
            originalName: 'SortID',
            name: 'sortId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ApprovalStageCode',
            name: 'approvalStageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalTemplateStage);
    }
    ApprovalTemplateStage.build = build;
})(ApprovalTemplateStage = exports.ApprovalTemplateStage || (exports.ApprovalTemplateStage = {}));
//# sourceMappingURL=ApprovalTemplateStage.js.map
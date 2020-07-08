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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalTemplateStage = exports.ApprovalTemplateStageField = exports.createApprovalTemplateStage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ApprovalTemplateStageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ApprovalTemplateStage.sortId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortId = new v4_1.ComplexTypeNumberPropertyField('SortID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalTemplateStage.approvalStageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalStageCode = new v4_1.ComplexTypeNumberPropertyField('ApprovalStageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalTemplateStage.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return ApprovalTemplateStageField;
}(v4_1.ComplexTypeField));
exports.ApprovalTemplateStageField = ApprovalTemplateStageField;
var ApprovalTemplateStage;
(function (ApprovalTemplateStage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SortID: function (sortId) { return ({ sortId: v4_1.edmToTs(sortId, 'Edm.Int32') }); },
            ApprovalStageCode: function (approvalStageCode) { return ({ approvalStageCode: v4_1.edmToTs(approvalStageCode, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    ApprovalTemplateStage.build = build;
})(ApprovalTemplateStage = exports.ApprovalTemplateStage || (exports.ApprovalTemplateStage = {}));
//# sourceMappingURL=ApprovalTemplateStage.js.map
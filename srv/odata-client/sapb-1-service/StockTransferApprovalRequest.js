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
exports.StockTransferApprovalRequest = exports.StockTransferApprovalRequestField = exports.createStockTransferApprovalRequest = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[StockTransferApprovalRequest.build]] instead.
 */
function createStockTransferApprovalRequest(json) {
    return StockTransferApprovalRequest.build(json);
}
exports.createStockTransferApprovalRequest = createStockTransferApprovalRequest;
/**
 * StockTransferApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTransferApprovalRequestField = /** @class */ (function (_super) {
    __extends(StockTransferApprovalRequestField, _super);
    function StockTransferApprovalRequestField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[StockTransferApprovalRequest.approvalTemplatesId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalTemplatesId = new v4_1.ComplexTypeNumberPropertyField('ApprovalTemplatesID', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferApprovalRequest.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return StockTransferApprovalRequestField;
}(v4_1.ComplexTypeField));
exports.StockTransferApprovalRequestField = StockTransferApprovalRequestField;
var StockTransferApprovalRequest;
(function (StockTransferApprovalRequest) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ApprovalTemplatesID: function (approvalTemplatesId) { return ({ approvalTemplatesId: v4_1.edmToTs(approvalTemplatesId, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    StockTransferApprovalRequest.build = build;
})(StockTransferApprovalRequest = exports.StockTransferApprovalRequest || (exports.StockTransferApprovalRequest = {}));
//# sourceMappingURL=StockTransferApprovalRequest.js.map
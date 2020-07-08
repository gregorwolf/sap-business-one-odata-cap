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
exports.PaymentsApprovalRequest = exports.PaymentsApprovalRequestField = exports.createPaymentsApprovalRequest = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentsApprovalRequest.build]] instead.
 */
function createPaymentsApprovalRequest(json) {
    return PaymentsApprovalRequest.build(json);
}
exports.createPaymentsApprovalRequest = createPaymentsApprovalRequest;
/**
 * PaymentsApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentsApprovalRequestField = /** @class */ (function (_super) {
    __extends(PaymentsApprovalRequestField, _super);
    function PaymentsApprovalRequestField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentsApprovalRequest.approvalTemplatesId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalTemplatesId = new v4_1.ComplexTypeNumberPropertyField('ApprovalTemplatesID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentsApprovalRequest.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return PaymentsApprovalRequestField;
}(v4_1.ComplexTypeField));
exports.PaymentsApprovalRequestField = PaymentsApprovalRequestField;
var PaymentsApprovalRequest;
(function (PaymentsApprovalRequest) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ApprovalTemplatesID: function (approvalTemplatesId) { return ({ approvalTemplatesId: v4_1.edmToTs(approvalTemplatesId, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    PaymentsApprovalRequest.build = build;
})(PaymentsApprovalRequest = exports.PaymentsApprovalRequest || (exports.PaymentsApprovalRequest = {}));
//# sourceMappingURL=PaymentsApprovalRequest.js.map
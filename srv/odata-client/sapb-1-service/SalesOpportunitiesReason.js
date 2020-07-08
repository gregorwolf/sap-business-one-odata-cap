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
exports.SalesOpportunitiesReason = exports.SalesOpportunitiesReasonField = exports.createSalesOpportunitiesReason = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesReason.build]] instead.
 */
function createSalesOpportunitiesReason(json) {
    return SalesOpportunitiesReason.build(json);
}
exports.createSalesOpportunitiesReason = createSalesOpportunitiesReason;
/**
 * SalesOpportunitiesReasonField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitiesReasonField = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesReasonField, _super);
    function SalesOpportunitiesReasonField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunitiesReason.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new v4_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesReason.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesReason.reason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reason = new v4_1.ComplexTypeNumberPropertyField('Reason', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesReasonField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunitiesReasonField = SalesOpportunitiesReasonField;
var SalesOpportunitiesReason;
(function (SalesOpportunitiesReason) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNo: function (rowNo) { return ({ rowNo: v4_1.edmToTs(rowNo, 'Edm.Int32') }); },
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            Reason: function (reason) { return ({ reason: v4_1.edmToTs(reason, 'Edm.Int32') }); }
        });
    }
    SalesOpportunitiesReason.build = build;
})(SalesOpportunitiesReason = exports.SalesOpportunitiesReason || (exports.SalesOpportunitiesReason = {}));
//# sourceMappingURL=SalesOpportunitiesReason.js.map
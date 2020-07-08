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
exports.SalesOpportunityReasonSetupParams = exports.SalesOpportunityReasonSetupParamsField = exports.createSalesOpportunityReasonSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityReasonSetupParams.build]] instead.
 */
function createSalesOpportunityReasonSetupParams(json) {
    return SalesOpportunityReasonSetupParams.build(json);
}
exports.createSalesOpportunityReasonSetupParams = createSalesOpportunityReasonSetupParams;
/**
 * SalesOpportunityReasonSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunityReasonSetupParamsField = /** @class */ (function (_super) {
    __extends(SalesOpportunityReasonSetupParamsField, _super);
    function SalesOpportunityReasonSetupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunityReasonSetupParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunityReasonSetupParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunityReasonSetupParamsField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunityReasonSetupParamsField = SalesOpportunityReasonSetupParamsField;
var SalesOpportunityReasonSetupParams;
(function (SalesOpportunityReasonSetupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    SalesOpportunityReasonSetupParams.build = build;
})(SalesOpportunityReasonSetupParams = exports.SalesOpportunityReasonSetupParams || (exports.SalesOpportunityReasonSetupParams = {}));
//# sourceMappingURL=SalesOpportunityReasonSetupParams.js.map
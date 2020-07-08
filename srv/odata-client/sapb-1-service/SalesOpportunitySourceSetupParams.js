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
exports.SalesOpportunitySourceSetupParams = exports.SalesOpportunitySourceSetupParamsField = exports.createSalesOpportunitySourceSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitySourceSetupParams.build]] instead.
 */
function createSalesOpportunitySourceSetupParams(json) {
    return SalesOpportunitySourceSetupParams.build(json);
}
exports.createSalesOpportunitySourceSetupParams = createSalesOpportunitySourceSetupParams;
/**
 * SalesOpportunitySourceSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitySourceSetupParamsField = /** @class */ (function (_super) {
    __extends(SalesOpportunitySourceSetupParamsField, _super);
    function SalesOpportunitySourceSetupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunitySourceSetupParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitySourceSetupParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunitySourceSetupParamsField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunitySourceSetupParamsField = SalesOpportunitySourceSetupParamsField;
var SalesOpportunitySourceSetupParams;
(function (SalesOpportunitySourceSetupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    SalesOpportunitySourceSetupParams.build = build;
})(SalesOpportunitySourceSetupParams = exports.SalesOpportunitySourceSetupParams || (exports.SalesOpportunitySourceSetupParams = {}));
//# sourceMappingURL=SalesOpportunitySourceSetupParams.js.map
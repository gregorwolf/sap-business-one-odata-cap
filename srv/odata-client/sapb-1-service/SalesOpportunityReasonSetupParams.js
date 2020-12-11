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
exports.SalesOpportunityReasonSetupParams = exports.SalesOpportunityReasonSetupParamsField = exports.createSalesOpportunityReasonSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of SalesOpportunityReasonSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunityReasonSetupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunityReasonSetupParams) || this;
        /**
         * Representation of the [[SalesOpportunityReasonSetupParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunityReasonSetupParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunityReasonSetupParamsField;
}(core_1.ComplexTypeField));
exports.SalesOpportunityReasonSetupParamsField = SalesOpportunityReasonSetupParamsField;
var SalesOpportunityReasonSetupParams;
(function (SalesOpportunityReasonSetupParams) {
    /**
     * Metadata information on all properties of the `SalesOpportunityReasonSetupParams` complex type.
     */
    SalesOpportunityReasonSetupParams._propertyMetadata = [{
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunityReasonSetupParams);
    }
    SalesOpportunityReasonSetupParams.build = build;
})(SalesOpportunityReasonSetupParams = exports.SalesOpportunityReasonSetupParams || (exports.SalesOpportunityReasonSetupParams = {}));
//# sourceMappingURL=SalesOpportunityReasonSetupParams.js.map
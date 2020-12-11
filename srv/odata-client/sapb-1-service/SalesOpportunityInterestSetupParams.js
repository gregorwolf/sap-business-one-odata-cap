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
exports.SalesOpportunityInterestSetupParams = exports.SalesOpportunityInterestSetupParamsField = exports.createSalesOpportunityInterestSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityInterestSetupParams.build]] instead.
 */
function createSalesOpportunityInterestSetupParams(json) {
    return SalesOpportunityInterestSetupParams.build(json);
}
exports.createSalesOpportunityInterestSetupParams = createSalesOpportunityInterestSetupParams;
/**
 * SalesOpportunityInterestSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunityInterestSetupParamsField = /** @class */ (function (_super) {
    __extends(SalesOpportunityInterestSetupParamsField, _super);
    /**
     * Creates an instance of SalesOpportunityInterestSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunityInterestSetupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunityInterestSetupParams) || this;
        /**
         * Representation of the [[SalesOpportunityInterestSetupParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunityInterestSetupParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunityInterestSetupParamsField;
}(core_1.ComplexTypeField));
exports.SalesOpportunityInterestSetupParamsField = SalesOpportunityInterestSetupParamsField;
var SalesOpportunityInterestSetupParams;
(function (SalesOpportunityInterestSetupParams) {
    /**
     * Metadata information on all properties of the `SalesOpportunityInterestSetupParams` complex type.
     */
    SalesOpportunityInterestSetupParams._propertyMetadata = [{
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
        return core_1.deserializeComplexTypeV4(json, SalesOpportunityInterestSetupParams);
    }
    SalesOpportunityInterestSetupParams.build = build;
})(SalesOpportunityInterestSetupParams = exports.SalesOpportunityInterestSetupParams || (exports.SalesOpportunityInterestSetupParams = {}));
//# sourceMappingURL=SalesOpportunityInterestSetupParams.js.map
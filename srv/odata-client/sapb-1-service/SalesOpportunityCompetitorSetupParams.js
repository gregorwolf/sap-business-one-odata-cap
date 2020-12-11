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
exports.SalesOpportunityCompetitorSetupParams = exports.SalesOpportunityCompetitorSetupParamsField = exports.createSalesOpportunityCompetitorSetupParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityCompetitorSetupParams.build]] instead.
 */
function createSalesOpportunityCompetitorSetupParams(json) {
    return SalesOpportunityCompetitorSetupParams.build(json);
}
exports.createSalesOpportunityCompetitorSetupParams = createSalesOpportunityCompetitorSetupParams;
/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunityCompetitorSetupParamsField = /** @class */ (function (_super) {
    __extends(SalesOpportunityCompetitorSetupParamsField, _super);
    /**
     * Creates an instance of SalesOpportunityCompetitorSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunityCompetitorSetupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunityCompetitorSetupParams) || this;
        /**
         * Representation of the [[SalesOpportunityCompetitorSetupParams.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunityCompetitorSetupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunityCompetitorSetupParams.threatLevel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.threatLevel = new core_1.ComplexTypeEnumPropertyField('ThreatLevel', _this);
        return _this;
    }
    return SalesOpportunityCompetitorSetupParamsField;
}(core_1.ComplexTypeField));
exports.SalesOpportunityCompetitorSetupParamsField = SalesOpportunityCompetitorSetupParamsField;
var SalesOpportunityCompetitorSetupParams;
(function (SalesOpportunityCompetitorSetupParams) {
    /**
     * Metadata information on all properties of the `SalesOpportunityCompetitorSetupParams` complex type.
     */
    SalesOpportunityCompetitorSetupParams._propertyMetadata = [{
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ThreatLevel',
            name: 'threatLevel',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunityCompetitorSetupParams);
    }
    SalesOpportunityCompetitorSetupParams.build = build;
})(SalesOpportunityCompetitorSetupParams = exports.SalesOpportunityCompetitorSetupParams || (exports.SalesOpportunityCompetitorSetupParams = {}));
//# sourceMappingURL=SalesOpportunityCompetitorSetupParams.js.map
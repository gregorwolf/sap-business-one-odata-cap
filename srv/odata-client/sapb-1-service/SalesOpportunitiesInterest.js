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
exports.SalesOpportunitiesInterest = exports.SalesOpportunitiesInterestField = exports.createSalesOpportunitiesInterest = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesInterest.build]] instead.
 */
function createSalesOpportunitiesInterest(json) {
    return SalesOpportunitiesInterest.build(json);
}
exports.createSalesOpportunitiesInterest = createSalesOpportunitiesInterest;
/**
 * SalesOpportunitiesInterestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitiesInterestField = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesInterestField, _super);
    /**
     * Creates an instance of SalesOpportunitiesInterestField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunitiesInterestField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunitiesInterest) || this;
        /**
         * Representation of the [[SalesOpportunitiesInterest.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new core_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesInterest.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesInterest.primaryInterest]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryInterest = new core_1.ComplexTypeEnumPropertyField('PrimaryInterest', _this);
        /**
         * Representation of the [[SalesOpportunitiesInterest.interestId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.interestId = new core_1.ComplexTypeNumberPropertyField('InterestId', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesInterestField;
}(core_1.ComplexTypeField));
exports.SalesOpportunitiesInterestField = SalesOpportunitiesInterestField;
var SalesOpportunitiesInterest;
(function (SalesOpportunitiesInterest) {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesInterest` complex type.
     */
    SalesOpportunitiesInterest._propertyMetadata = [{
            originalName: 'RowNo',
            name: 'rowNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PrimaryInterest',
            name: 'primaryInterest',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InterestId',
            name: 'interestId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunitiesInterest);
    }
    SalesOpportunitiesInterest.build = build;
})(SalesOpportunitiesInterest = exports.SalesOpportunitiesInterest || (exports.SalesOpportunitiesInterest = {}));
//# sourceMappingURL=SalesOpportunitiesInterest.js.map
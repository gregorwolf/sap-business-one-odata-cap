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
exports.SalesOpportunitiesPartner = exports.SalesOpportunitiesPartnerField = exports.createSalesOpportunitiesPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesPartner.build]] instead.
 */
function createSalesOpportunitiesPartner(json) {
    return SalesOpportunitiesPartner.build(json);
}
exports.createSalesOpportunitiesPartner = createSalesOpportunitiesPartner;
/**
 * SalesOpportunitiesPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitiesPartnerField = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesPartnerField, _super);
    /**
     * Creates an instance of SalesOpportunitiesPartnerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunitiesPartnerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunitiesPartner) || this;
        /**
         * Representation of the [[SalesOpportunitiesPartner.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new core_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.partners]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partners = new core_1.ComplexTypeNumberPropertyField('Partners', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesPartner.relationshipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relationshipCode = new core_1.ComplexTypeNumberPropertyField('RelationshipCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesPartnerField;
}(core_1.ComplexTypeField));
exports.SalesOpportunitiesPartnerField = SalesOpportunitiesPartnerField;
var SalesOpportunitiesPartner;
(function (SalesOpportunitiesPartner) {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesPartner` complex type.
     */
    SalesOpportunitiesPartner._propertyMetadata = [{
            originalName: 'RowNo',
            name: 'rowNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Partners',
            name: 'partners',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RelationshipCode',
            name: 'relationshipCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunitiesPartner);
    }
    SalesOpportunitiesPartner.build = build;
})(SalesOpportunitiesPartner = exports.SalesOpportunitiesPartner || (exports.SalesOpportunitiesPartner = {}));
//# sourceMappingURL=SalesOpportunitiesPartner.js.map
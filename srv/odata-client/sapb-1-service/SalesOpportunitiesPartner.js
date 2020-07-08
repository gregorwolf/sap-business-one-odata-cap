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
exports.SalesOpportunitiesPartner = exports.SalesOpportunitiesPartnerField = exports.createSalesOpportunitiesPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function SalesOpportunitiesPartnerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunitiesPartner.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new v4_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.partners]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partners = new v4_1.ComplexTypeNumberPropertyField('Partners', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesPartner.relationshipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relationshipCode = new v4_1.ComplexTypeNumberPropertyField('RelationshipCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesPartner.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesPartnerField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunitiesPartnerField = SalesOpportunitiesPartnerField;
var SalesOpportunitiesPartner;
(function (SalesOpportunitiesPartner) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNo: function (rowNo) { return ({ rowNo: v4_1.edmToTs(rowNo, 'Edm.Int32') }); },
            Partners: function (partners) { return ({ partners: v4_1.edmToTs(partners, 'Edm.Int32') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            RelationshipCode: function (relationshipCode) { return ({ relationshipCode: v4_1.edmToTs(relationshipCode, 'Edm.Int32') }); },
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); }
        });
    }
    SalesOpportunitiesPartner.build = build;
})(SalesOpportunitiesPartner = exports.SalesOpportunitiesPartner || (exports.SalesOpportunitiesPartner = {}));
//# sourceMappingURL=SalesOpportunitiesPartner.js.map
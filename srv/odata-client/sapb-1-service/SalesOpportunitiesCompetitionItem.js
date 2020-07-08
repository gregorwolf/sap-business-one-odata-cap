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
exports.SalesOpportunitiesCompetitionItem = exports.SalesOpportunitiesCompetitionItemField = exports.createSalesOpportunitiesCompetitionItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesCompetitionItem.build]] instead.
 */
function createSalesOpportunitiesCompetitionItem(json) {
    return SalesOpportunitiesCompetitionItem.build(json);
}
exports.createSalesOpportunitiesCompetitionItem = createSalesOpportunitiesCompetitionItem;
/**
 * SalesOpportunitiesCompetitionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitiesCompetitionItemField = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesCompetitionItemField, _super);
    function SalesOpportunitiesCompetitionItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new v4_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.competition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.competition = new v4_1.ComplexTypeNumberPropertyField('Competition', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.wonOrLost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wonOrLost = new v4_1.ComplexTypeStringPropertyField('WonOrLost', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunitiesCompetitionItemField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunitiesCompetitionItemField = SalesOpportunitiesCompetitionItemField;
var SalesOpportunitiesCompetitionItem;
(function (SalesOpportunitiesCompetitionItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNo: function (rowNo) { return ({ rowNo: v4_1.edmToTs(rowNo, 'Edm.Int32') }); },
            Competition: function (competition) { return ({ competition: v4_1.edmToTs(competition, 'Edm.Int32') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            WonOrLost: function (wonOrLost) { return ({ wonOrLost: v4_1.edmToTs(wonOrLost, 'Edm.String') }); }
        });
    }
    SalesOpportunitiesCompetitionItem.build = build;
})(SalesOpportunitiesCompetitionItem = exports.SalesOpportunitiesCompetitionItem || (exports.SalesOpportunitiesCompetitionItem = {}));
//# sourceMappingURL=SalesOpportunitiesCompetitionItem.js.map
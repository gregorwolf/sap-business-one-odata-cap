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
exports.SalesOpportunitiesCompetitionItem = exports.SalesOpportunitiesCompetitionItemField = exports.createSalesOpportunitiesCompetitionItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of SalesOpportunitiesCompetitionItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunitiesCompetitionItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunitiesCompetitionItem) || this;
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.rowNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNo = new core_1.ComplexTypeNumberPropertyField('RowNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.competition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.competition = new core_1.ComplexTypeNumberPropertyField('Competition', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesCompetitionItem.wonOrLost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wonOrLost = new core_1.ComplexTypeStringPropertyField('WonOrLost', _this, 'Edm.String');
        return _this;
    }
    return SalesOpportunitiesCompetitionItemField;
}(core_1.ComplexTypeField));
exports.SalesOpportunitiesCompetitionItemField = SalesOpportunitiesCompetitionItemField;
var SalesOpportunitiesCompetitionItem;
(function (SalesOpportunitiesCompetitionItem) {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesCompetitionItem` complex type.
     */
    SalesOpportunitiesCompetitionItem._propertyMetadata = [{
            originalName: 'RowNo',
            name: 'rowNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Competition',
            name: 'competition',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WonOrLost',
            name: 'wonOrLost',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunitiesCompetitionItem);
    }
    SalesOpportunitiesCompetitionItem.build = build;
})(SalesOpportunitiesCompetitionItem = exports.SalesOpportunitiesCompetitionItem || (exports.SalesOpportunitiesCompetitionItem = {}));
//# sourceMappingURL=SalesOpportunitiesCompetitionItem.js.map
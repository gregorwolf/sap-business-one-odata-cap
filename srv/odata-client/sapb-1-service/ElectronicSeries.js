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
exports.ElectronicSeries = exports.ElectronicSeriesField = exports.createElectronicSeries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeries.build]] instead.
 */
function createElectronicSeries(json) {
    return ElectronicSeries.build(json);
}
exports.createElectronicSeries = createElectronicSeries;
/**
 * ElectronicSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ElectronicSeriesField = /** @class */ (function (_super) {
    __extends(ElectronicSeriesField, _super);
    function ElectronicSeriesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ElectronicSeries.electronicSeries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.electronicSeries = new v4_1.ComplexTypeNumberPropertyField('ElectronicSeries', _this, 'Edm.Int32');
        /**
         * Representation of the [[ElectronicSeries.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[ElectronicSeries.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ElectronicSeries.initialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.initialNumber = new v4_1.ComplexTypeStringPropertyField('InitialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ElectronicSeries.nextNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextNumber = new v4_1.ComplexTypeStringPropertyField('NextNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ElectronicSeries.lastNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastNumber = new v4_1.ComplexTypeStringPropertyField('LastNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ElectronicSeries.prefix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.prefix = new v4_1.ComplexTypeStringPropertyField('Prefix', _this, 'Edm.String');
        /**
         * Representation of the [[ElectronicSeries.approvalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalYear = new v4_1.ComplexTypeNumberPropertyField('ApprovalYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[ElectronicSeries.approvalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvalNumber = new v4_1.ComplexTypeNumberPropertyField('ApprovalNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ElectronicSeries.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return ElectronicSeriesField;
}(v4_1.ComplexTypeField));
exports.ElectronicSeriesField = ElectronicSeriesField;
var ElectronicSeries;
(function (ElectronicSeries) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ElectronicSeries: function (electronicSeries) { return ({ electronicSeries: v4_1.edmToTs(electronicSeries, 'Edm.Int32') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            InitialNumber: function (initialNumber) { return ({ initialNumber: v4_1.edmToTs(initialNumber, 'Edm.String') }); },
            NextNumber: function (nextNumber) { return ({ nextNumber: v4_1.edmToTs(nextNumber, 'Edm.String') }); },
            LastNumber: function (lastNumber) { return ({ lastNumber: v4_1.edmToTs(lastNumber, 'Edm.String') }); },
            Prefix: function (prefix) { return ({ prefix: v4_1.edmToTs(prefix, 'Edm.String') }); },
            ApprovalYear: function (approvalYear) { return ({ approvalYear: v4_1.edmToTs(approvalYear, 'Edm.Int32') }); },
            ApprovalNumber: function (approvalNumber) { return ({ approvalNumber: v4_1.edmToTs(approvalNumber, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    ElectronicSeries.build = build;
})(ElectronicSeries = exports.ElectronicSeries || (exports.ElectronicSeries = {}));
//# sourceMappingURL=ElectronicSeries.js.map
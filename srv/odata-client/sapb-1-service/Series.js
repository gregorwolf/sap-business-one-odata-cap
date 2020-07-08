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
exports.Series = exports.SeriesField = exports.createSeries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Series.build]] instead.
 */
function createSeries(json) {
    return Series.build(json);
}
exports.createSeries = createSeries;
/**
 * SeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SeriesField = /** @class */ (function (_super) {
    __extends(SeriesField, _super);
    function SeriesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Series.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new v4_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[Series.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new v4_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[Series.initialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.initialNumber = new v4_1.ComplexTypeNumberPropertyField('InitialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.lastNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastNumber = new v4_1.ComplexTypeNumberPropertyField('LastNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.nextNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextNumber = new v4_1.ComplexTypeNumberPropertyField('NextNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.prefix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.prefix = new v4_1.ComplexTypeStringPropertyField('Prefix', _this, 'Edm.String');
        /**
         * Representation of the [[Series.suffix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.suffix = new v4_1.ComplexTypeStringPropertyField('Suffix', _this, 'Edm.String');
        /**
         * Representation of the [[Series.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[Series.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new v4_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[Series.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[Series.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.digitNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.digitNumber = new v4_1.ComplexTypeNumberPropertyField('DigitNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.atDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.atDocumentType = new v4_1.ComplexTypeStringPropertyField('ATDocumentType', _this, 'Edm.String');
        return _this;
    }
    return SeriesField;
}(v4_1.ComplexTypeField));
exports.SeriesField = SeriesField;
var Series;
(function (Series) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Document: function (document) { return ({ document: v4_1.edmToTs(document, 'Edm.String') }); },
            DocumentSubType: function (documentSubType) { return ({ documentSubType: v4_1.edmToTs(documentSubType, 'Edm.String') }); },
            InitialNumber: function (initialNumber) { return ({ initialNumber: v4_1.edmToTs(initialNumber, 'Edm.Int32') }); },
            LastNumber: function (lastNumber) { return ({ lastNumber: v4_1.edmToTs(lastNumber, 'Edm.Int32') }); },
            NextNumber: function (nextNumber) { return ({ nextNumber: v4_1.edmToTs(nextNumber, 'Edm.Int32') }); },
            Prefix: function (prefix) { return ({ prefix: v4_1.edmToTs(prefix, 'Edm.String') }); },
            Suffix: function (suffix) { return ({ suffix: v4_1.edmToTs(suffix, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            PeriodIndicator: function (periodIndicator) { return ({ periodIndicator: v4_1.edmToTs(periodIndicator, 'Edm.String') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            DigitNumber: function (digitNumber) { return ({ digitNumber: v4_1.edmToTs(digitNumber, 'Edm.Int32') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); },
            ATDocumentType: function (atDocumentType) { return ({ atDocumentType: v4_1.edmToTs(atDocumentType, 'Edm.String') }); }
        });
    }
    Series.build = build;
})(Series = exports.Series || (exports.Series = {}));
//# sourceMappingURL=Series.js.map
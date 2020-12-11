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
exports.Series = exports.SeriesField = exports.createSeries = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of SeriesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SeriesField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Series) || this;
        /**
         * Representation of the [[Series.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new core_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[Series.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new core_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[Series.initialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.initialNumber = new core_1.ComplexTypeNumberPropertyField('InitialNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.lastNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastNumber = new core_1.ComplexTypeNumberPropertyField('LastNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.nextNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextNumber = new core_1.ComplexTypeNumberPropertyField('NextNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.prefix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.prefix = new core_1.ComplexTypeStringPropertyField('Prefix', _this, 'Edm.String');
        /**
         * Representation of the [[Series.suffix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.suffix = new core_1.ComplexTypeStringPropertyField('Suffix', _this, 'Edm.String');
        /**
         * Representation of the [[Series.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[Series.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new core_1.ComplexTypeEnumPropertyField('GroupCode', _this);
        /**
         * Representation of the [[Series.locked]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locked = new core_1.ComplexTypeEnumPropertyField('Locked', _this);
        /**
         * Representation of the [[Series.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new core_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[Series.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[Series.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.isDigitalSeries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isDigitalSeries = new core_1.ComplexTypeEnumPropertyField('IsDigitalSeries', _this);
        /**
         * Representation of the [[Series.digitNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.digitNumber = new core_1.ComplexTypeNumberPropertyField('DigitNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.seriesType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seriesType = new core_1.ComplexTypeEnumPropertyField('SeriesType', _this);
        /**
         * Representation of the [[Series.isManual]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isManual = new core_1.ComplexTypeEnumPropertyField('IsManual', _this);
        /**
         * Representation of the [[Series.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[Series.atDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.atDocumentType = new core_1.ComplexTypeStringPropertyField('ATDocumentType', _this, 'Edm.String');
        /**
         * Representation of the [[Series.isElectronicCommEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isElectronicCommEnabled = new core_1.ComplexTypeEnumPropertyField('IsElectronicCommEnabled', _this);
        /**
         * Representation of the [[Series.costAccountOnly]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costAccountOnly = new core_1.ComplexTypeEnumPropertyField('CostAccountOnly', _this);
        return _this;
    }
    return SeriesField;
}(core_1.ComplexTypeField));
exports.SeriesField = SeriesField;
var Series;
(function (Series) {
    /**
     * Metadata information on all properties of the `Series` complex type.
     */
    Series._propertyMetadata = [{
            originalName: 'Document',
            name: 'document',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentSubType',
            name: 'documentSubType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InitialNumber',
            name: 'initialNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LastNumber',
            name: 'lastNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NextNumber',
            name: 'nextNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Prefix',
            name: 'prefix',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Suffix',
            name: 'suffix',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GroupCode',
            name: 'groupCode',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Locked',
            name: 'locked',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PeriodIndicator',
            name: 'periodIndicator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Series',
            name: 'series',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'IsDigitalSeries',
            name: 'isDigitalSeries',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DigitNumber',
            name: 'digitNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SeriesType',
            name: 'seriesType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsManual',
            name: 'isManual',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ATDocumentType',
            name: 'atDocumentType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IsElectronicCommEnabled',
            name: 'isElectronicCommEnabled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CostAccountOnly',
            name: 'costAccountOnly',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Series);
    }
    Series.build = build;
})(Series = exports.Series || (exports.Series = {}));
//# sourceMappingURL=Series.js.map